import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { StoreLocations } from "../components/current-location/current-location";

export function PeruMapPage() {
  return (
    <div className="h-screen w-full">
      <MapContainer center={[-16.4, -71.53]} zoom="8" className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <StoreLocations />
      </MapContainer>
    </div>
  );
}
