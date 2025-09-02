import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../lib/apiClient"; // Make sure this path is correct
import "./newPostPage.scss";

function NewPostPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from reloading on submit
    setError(""); // Clear previous errors

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // Send all the form data to your backend endpoint
      const res = await apiClient.post("/properties", {
        // --- Property Data ---
        title: data.title,
        price: parseInt(data.price),
        address: data.address,
        city: data.city,
        beds: parseInt(data.bedroom),
        baths: parseInt(data.bathroom),
        type: data.type,
        property: data.property,
        latitude: data.latitude,
        longitude: data.longitude,
        // Assuming your model expects these fields, adjust if necessary
        // --- Additional Details ---
        size: parseInt(data.size),
        school: parseInt(data.school),
        bus: parseInt(data.bus),
        restaurant: parseInt(data.restaurant),
        utilities: data.utilities,
        pet: data.pet,
        income: data.income,
        // You would also handle description and image uploads here
      });

      // Navigate to the new property's page on success
      navigate("/" + res.data.item.id);
    } catch (err) {
      console.error(err);
      setError("Failed to create post. Please fill all fields correctly.");
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          {/* Add the onSubmit handler to your form tag */}
          <form onSubmit={handleSubmit}>
            {/* ... all your existing form items ... */}
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" required />
            </div>
            {/* ... other items like address, city, etc. ... */}

            <button className="sendButton">Add</button>
            {error && <span className="error-message">{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {/* You can add an image preview here */}
      </div>
    </div>
  );
}

export default NewPostPage;

// import "./newPostPage.scss";

// function NewPostPage() {
//   return (
//     <div className="newPostPage">
//       <div className="formContainer">
//         <h1>Add New Post</h1>
//         <div className="wrapper">
//           <form>
//             <div className="item">
//               <label htmlFor="title">Title</label>
//               <input id="title" name="title" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="price">Price</label>
//               <input id="price" name="price" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="address">Address</label>
//               <input id="address" name="address" type="text" />
//             </div>
//             <div className="item description">
//               <label htmlFor="desc">Description</label>
//             </div>
//             <div className="item">
//               <label htmlFor="city">City</label>
//               <input id="city" name="city" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="bedroom">Bedroom Number</label>
//               <input min={1} id="bedroom" name="bedroom" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="bathroom">Bathroom Number</label>
//               <input min={1} id="bathroom" name="bathroom" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="latitude">Latitude</label>
//               <input id="latitude" name="latitude" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="longitude">Longitude</label>
//               <input id="longitude" name="longitude" type="text" />
//             </div>
//             <div className="item">
//               <label htmlFor="type">Type</label>
//               <select name="type">
//                 <option value="rent" defaultChecked>
//                   Rent
//                 </option>
//                 <option value="buy">Buy</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="type">Property</label>
//               <select name="property">
//                 <option value="apartment">Apartment</option>
//                 <option value="house">House</option>
//                 <option value="condo">Condo</option>
//                 <option value="land">Land</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="utilities">Utilities Policy</label>
//               <select name="utilities">
//                 <option value="owner">Owner is responsible</option>
//                 <option value="tenant">Tenant is responsible</option>
//                 <option value="shared">Shared</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="pet">Pet Policy</label>
//               <select name="pet">
//                 <option value="allowed">Allowed</option>
//                 <option value="not-allowed">Not Allowed</option>
//               </select>
//             </div>
//             <div className="item">
//               <label htmlFor="income">Income Policy</label>
//               <input
//                 id="income"
//                 name="income"
//                 type="text"
//                 placeholder="Income Policy"
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="size">Total Size (sqft)</label>
//               <input min={0} id="size" name="size" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="school">School</label>
//               <input min={0} id="school" name="school" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="bus">bus</label>
//               <input min={0} id="bus" name="bus" type="number" />
//             </div>
//             <div className="item">
//               <label htmlFor="restaurant">Restaurant</label>
//               <input min={0} id="restaurant" name="restaurant" type="number" />
//             </div>
//             <button className="sendButton">Add</button>
//           </form>
//         </div>
//       </div>
//       <div className="sideContainer"></div>
//     </div>
//   );
// }

// export default NewPostPage;
