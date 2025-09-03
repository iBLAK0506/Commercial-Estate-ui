import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../lib/apiClient";
import Slider from "../../components/slider/Slider"; // 1. Import the Slider component
import Map from "../../components/map/Map";
import "./singlePage.scss"; // 2. Import the stylesheet for this page

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
      <div className="details">
        <div className="wrapper">
          {/* 3. Add the Slider component to display the images */}
          {property.images && property.images.length > 0 && (
            <Slider images={property.images} />
          )}
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{property.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="address pin" />
                  <span>{property.address}</span>
                </div>
                <div className="price">$ {property.price}</div>
              </div>
              <div className="user">
                <img
                  src={property.owner?.avatarUrl || "/noavatar.jpg"}
                  alt="owner avatar"
                />
                <span>{property.owner?.name || "Unknown"}</span>
              </div>
            </div>
            <div className="bottom">{property.description}</div>
          </div>
        </div>
      </div>
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

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Slider from "../../components/slider/Slider";
// import Map from "../../components/map/Map";
// import apiClient from "../../lib/apiClient"; // 1. Import your authenticated API client

// function SinglePage() {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         // 2. Use apiClient to make an authenticated request
//         const res = await apiClient.get(`/properties/${id}`);
//         // 3. Get the property from res.data.item (as defined in your controller)
//         setProperty(res.data.item);
//       } catch (err) {
//         console.error("Failed to fetch property", err);
//       }
//     };
//     fetchProperty();
//   }, [id]);

//   if (!property) return <p>Loading...</p>;

//   return (
//     <div className="singlePage">
//       <div className="details">
//         <div className="wrapper">
//           {/* 4. Add a safety check to only render Slider if images exist */}
//           {property.images && property.images.length > 0 && (
//             <Slider images={property.images} />
//           )}
//           <div className="info">
//             <div className="top">
//               <div className="post">
//                 <h1>{property.title}</h1>
//                 <div className="address">
//                   <img src="/pin.png" alt="address pin" />
//                   <span>{property.address}</span>
//                 </div>
//                 <div className="price">$ {property.price}</div>
//               </div>
//               <div className="user">
//                 {/* 5. Use optional chaining and correct property names for the owner */}
//                 <img
//                   src={property.owner?.avatarUrl || "/noavatar.jpg"}
//                   alt="owner avatar"
//                 />
//                 <span>{property.owner?.name || "Unknown Owner"}</span>
//               </div>
//             </div>
//             <div className="bottom">{property.description}</div>
//           </div>
//         </div>
//       </div>
//       <div className="features">
//         <div className="wrapper">
//           <p className="title">Location</p>
//           <div className="mapContainer">
//             <Map items={[property]} />
//           </div>
//           <div className="buttons">
//             <button>
//               <img src="/chat.png" alt="chat icon" />
//               Send a Message
//             </button>
//             <button>
//               <img src="/save.png" alt="save icon" />
//               Save the Place
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SinglePage;
