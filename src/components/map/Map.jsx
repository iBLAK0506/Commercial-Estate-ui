import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  // 1. Safety Check: Filter for items that have valid coordinates
  const validItems = items.filter((item) => item.latitude && item.longitude);

  // 2. Dynamic Centering: Center the map on the first valid item, or use a default
  const mapCenter =
    validItems.length > 0
      ? [validItems[0].latitude, validItems[0].longitude]
      : [9.0765, 7.3986]; // Default to Abuja, Nigeria if no items have location

  return (
    <MapContainer
      center={mapCenter}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* 3. Map over the filtered list of valid items */}
      {validItems.map((item) => (
        <Pin item={item} key={item._id} /> // Use ._id for MongoDB keys
      ))}
    </MapContainer>
  );
}

export default Map;

// import { MapContainer, TileLayer } from 'react-leaflet'
// import './map.scss'
// import "leaflet/dist/leaflet.css";
// import Pin from '../pin/Pin';

// function Map({items}){
//   return (
//     <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     {items.map(item=>(
//       <Pin item={item} key={item.id}/>
//     ))}
//   </MapContainer>
//   )
// }

// export default Map
