import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import JSZip from "jszip";
import styled from "@emotion/styled";
import { Text } from ".";

const Container = styled.div`
  border: 1px solid var(--color-dark);
  margin-bottom: var(--spacing-y-sm);
  padding: var(--spacing-y-lg) var(--spacing-x-sm);
  text-align: center;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--color-dark);
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

export default function CustomDropzone({ name, files, setFiles, ...other }) {
  const onDrop = useCallback(acceptedFiles => {
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
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Container {...getRootProps()} {...other}>
      <input name={name} {...getInputProps()} />
      {isDragActive ? (
        <Text noMargin>Drop the images here</Text>
      ) : (
        <Text noMargin>
          Drop your images here, or click to select the files
        </Text>
      )}
    </Container>
  );
}
