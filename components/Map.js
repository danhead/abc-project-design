import React, { useCallback, useState } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";

const triangleCoords = [
  { lat: 52.253, lng: 0.109 }, // Cambridge
  { lat: 52.095, lng: 1.144 }, // Ipswich
  { lat: 51.975, lng: 1.379 }, // Felixtowe
  { lat: 51.782, lng: 1.151 }, // Clacton
  { lat: 51.755, lng: 0.975 }, // Blackwater
  { lat: 51.612, lng: 0.987 }, // Courtsend
  { lat: 51.453, lng: 0.733 }, // Grain
  { lat: 51.228, lng: 0.554 }, // Maidstone
  { lat: 51.258, lng: -0.087 }, // Caterham
  { lat: 51.436, lng: -0.361 }, // Twickenham
  { lat: 51.611, lng: -0.45 }, // Northwood
  { lat: 51.737, lng: -0.399 }, // St Albans
  { lat: 51.992, lng: -0.281 }, // Letchworth
  { lat: 52.253, lng: 0.109 }, // Cambridge
];

const getContainerStyle = ({ fullHeight }) => ({
  width: "100%",
  height: fullHeight ? "100%" : "50vh",
  maxHeight: "500px",
});

const center = {
  lat: 51.765,
  lng: 0.022,
};

const marker = {
  lat: 51.536,
  lng: 0.176,
};

export default function CustomMap({
  fullHeight,
  showMarker,
  showRegion,
  zoom = 7,
  apikey,
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apikey,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={getContainerStyle({ fullHeight })}
      center={showMarker ? marker : center}
      zoom={zoom}
      options={{
        fullscreenControl: false,
        gestureHandling: "none",
        zoomControl: false,
      }}
      onUnmount={onUnmount}
    >
      {showRegion && (
        <Polyline
          path={triangleCoords}
          strokeColor="var(--color-primary)"
          fillColor="#ff0000"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      )}
      {showMarker && (
        <Marker title="ABC Project Design Ltd" position={marker} />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}
