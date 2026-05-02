import L from "leaflet";
import locationIcon from "../../../../assets/icons/location-icon.png";

const leafIcon = new L.Icon({
  iconUrl: locationIcon,
  iconRetinaUrl: locationIcon,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "",
});

export { leafIcon };
