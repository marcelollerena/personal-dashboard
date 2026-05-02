import { Marker, Popup } from "react-leaflet";

const businesses = [
  {
    id: 1,
    name: "Tienda de Gustavo",
    lat: -16.41,
    lng: -71.53,
  },
  {
    id: 2,
    name: "Tienda de Luis",
    lat: -16.42,
    lng: -71.54,
  },
];

export const StoreLocations = () => {
  return businesses.map((business) => (
    <Marker key={business.id} position={[business.lat, business.lng]}>
      <Popup>
        <h2 className="font-bold">{business.name}</h2>
      </Popup>
    </Marker>
  ));
};
