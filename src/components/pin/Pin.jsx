import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          {/* Use the first image from the images array */}
          <img src={item.images[0]} alt={item.title} />
          <div className="textContainer">
            {/* Link to the correct properties route using the MongoDB _id */}
            <Link to={`/properties/${item._id}`}>{item.title}</Link>
            <span>{item.beds} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
