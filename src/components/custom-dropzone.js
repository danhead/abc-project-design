import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";
import styled from "@emotion/styled";
import { Text } from ".";

const Container = styled.div`
  border: 1px solid var(--color-dark);
  margin-bottom: var(--spacing-y-sm);
  padding: var(--spacing-y-sm) var(--spacing-x-sm) 0;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-dark);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

const Message = styled.div`
  border: 3px dashed var(--color-mid-grey);
  padding: var(--spacing-y-md) var(--spacing-x-sm);
  margin-bottom: var(--spacing-y-sm);
  text-align: center;
`;

const Files = styled.div`
  margin-bottom: var(--spacing-y-sm);
`;

const List = styled.ul`
  margin: 0 0 var(--spacing-y-sm);
  list-style: circle;
`;

export default function CustomDropzone({ name, files, setFiles, ...other }) {
  const [fileList, setFileList] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
    setFileList(acceptedFiles.map(file => file.path));
    if (acceptedFiles.length > 1) {
      const zip = new JSZip();
      acceptedFiles.forEach(file => zip.file(file.name, file));
      zip.generateAsync({ type: "blob" }).then(blob => {
        const zippedFiles = new File([blob], "files.zip", {
          lastModified: Date.now(),
          type: "application/zip"
        });
        setFiles(zippedFiles);
      });
    } else {
      setFiles(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 5,
    onDrop
  });
  return (
    <Container {...getRootProps()} {...other}>
      <input name={name} {...getInputProps()} />
      <Message>
        {isDragActive ? (
          <Text noMargin>Drop the images here</Text>
        ) : (
          <>
            <Text noMargin>
              Drop your images here, or click to select the files
            </Text>
            <Text size="xs" textStyle="italic" noMargin>
              (5 files maximum, *.jpg and *.png only)
            </Text>
          </>
        )}
      </Message>
      {fileList.length > 0 && (
        <Files>
          <Text size="sm" noMargin>
            Files added:
          </Text>
          <List>
            {fileList.map(file => (
              <li key={file}>
                <Text size="sm" noMargin>
                  {file}
                </Text>
              </li>
            ))}
          </List>
        </Files>
      )}
    </Container>
  );
}
