import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../lib/apiClient";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import "./singlePage.scss";

function SinglePage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await apiClient.get(`/properties/${id}`);
        setProperty(res.data.item);
      } catch (err) {
        console.error("Failed to fetch property", err);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div className="singlePage">
      {/* LEFT SIDE: DETAILS */}
      <div className="details">
        <div className="wrapper">
          {property.images && property.images.length > 0 && (
            <Slider images={property.images} />
          )}

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{property.title}</h1>
                <div className="price">$ {property.price}</div>

                {/* FULL DETAILS LIST */}
                <div className="detailsList">
                  <p>
                    <strong>Address:</strong> {property.address}
                  </p>
                  <p>
                    <strong>City:</strong> {property.city}
                  </p>
                  <p>
                    <strong>Type:</strong> {property.type}
                  </p>
                  <p>
                    <strong>Bedrooms:</strong> {property.beds}
                  </p>
                  <p>
                    <strong>Bathrooms:</strong> {property.baths}
                  </p>
                  <p>
                    <strong>Total Size:</strong> {property.sqft} sqft
                  </p>
                  <p>
                    <strong>Latitude:</strong> {property.latitude}
                  </p>
                  <p>
                    <strong>Longitude:</strong> {property.longitude}
                  </p>
                </div>
              </div>

              <div className="user">
                <img
                  src={property.owner?.avatarUrl || "/noavatar.jpg"}
                  alt="owner avatar"
                />
                <span>{property.owner?.name || "Unknown"}</span>
              </div>
            </div>

            <div className="bottom">
              <h2>Description</h2>
              <p>{property.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: MAP + ACTIONS */}
      <div className="features">
        <div className="wrapper">
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[property]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat icon" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="save icon" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
