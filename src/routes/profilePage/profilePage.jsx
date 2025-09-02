import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./profilePage.scss";
import apiClient from "../../lib/apiClient";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

function ProfilePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedAvatar, setSelectedAvatar] = useState(
    currentUser?.avatarUrl || "/noavatar.jpg"
  );
  // Example avatar options
  const avatars = ["/noavatar.jpg", "/avatar-female.jpeg", "/avatar-male.jpeg"];

  const handleLogout = async () => {
    try {
      await apiClient.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleAvatarChange = async (avatar) => {
    setSelectedAvatar(avatar);
    try {
      // --- THIS IS THE FIX ---
      // Changed the endpoint to the more reliable "/users/profile" route.
      // This route gets the user ID from the token on the backend.
      const res = await apiClient.patch(`/users/profile`, {
        avatarUrl: avatar,
      });

      // Update the AuthContext with the latest user data from the API response
      updateUser(res.data.user);
    } catch (err) {
      console.error("Failed to update avatar:", err);
      // Optionally, revert the selected avatar if the API call fails
      setSelectedAvatar(currentUser.avatarUrl || "/noavatar.jpg");
    }
  };

  if (!currentUser) return <div>Loading...</div>;

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={selectedAvatar} alt="User Avatar" />
            </span>
            <span>
              Username: <b>{currentUser.name}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout} className="logoutButton">
              Logout
            </button>
          </div>

          {/* Avatar Selection Section */}
          <div className="avatar-options">
            <h2>Select Avatar</h2>
            <div className="avatar-grid">
              {avatars.map((avatar) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt="Avatar option"
                  className={selectedAvatar === avatar ? "selected" : ""}
                  onClick={() => handleAvatarChange(avatar)}
                />
              ))}
            </div>
          </div>

          <div className="title">
            <h1>My List</h1>
            <Link to="/create">
              <button>Create New Post</button>
            </Link>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import "./profilePage.scss";
// import apiClient from "../../lib/apiClient";
// import List from "../../components/list/List";
// import Chat from "../../components/chat/Chat";

// function ProfilePage() {
//   const { currentUser, updateUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [selectedAvatar, setSelectedAvatar] = useState(
//     currentUser?.avatarUrl || "/noavatar.jpg"
//   );
//   // Example avatar options
//   const avatars = ["/noavatar.jpg", "/avatar-female.jpeg", "/avatar-male.jpeg"];

//   const handleLogout = async () => {
//     try {
//       await apiClient.post("/auth/logout");
//       updateUser(null);
//       navigate("/");
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };

//   const handleAvatarChange = async (avatar) => {
//     setSelectedAvatar(avatar);
//     try {
//       // Make an API call to update the user's avatar on the backend
//       const res = await apiClient.patch(`/users/${currentUser.id}`, {
//         avatarUrl: avatar,
//       });
//       // Update the AuthContext with the latest user data from the API response
//       updateUser(res.data.user);
//     } catch (err) {
//       console.error("Failed to update avatar:", err);
//       // Optionally, revert the selected avatar if the API call fails
//       setSelectedAvatar(currentUser.avatarUrl || "/noavatar.jpg");
//     }
//   };

//   if (!currentUser) return <div>Loading...</div>;

//   return (
//     <div className="profilePage">
//       <div className="details">
//         <div className="wrapper">
//           <div className="title">
//             <h1>User Information</h1>
//             <Link to="/profile/update">
//               <button>Update Profile</button>
//             </Link>
//           </div>
//           <div className="info">
//             <span>
//               Avatar:
//               <img src={selectedAvatar} alt="User Avatar" />
//             </span>
//             <span>
//               Username: <b>{currentUser.name}</b>
//             </span>
//             <span>
//               E-mail: <b>{currentUser.email}</b>
//             </span>
//             <button onClick={handleLogout} className="logoutButton">
//               Logout
//             </button>
//           </div>

//           {/* Avatar Selection Section */}
//           <div className="avatar-options">
//             <h2>Select Avatar</h2>
//             <div className="avatar-grid">
//               {avatars.map((avatar) => (
//                 <img
//                   key={avatar}
//                   src={avatar}
//                   alt="Avatar option"
//                   className={selectedAvatar === avatar ? "selected" : ""}
//                   onClick={() => handleAvatarChange(avatar)}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="title">
//             <h1>My List</h1>
//             <Link to="/create">
//               <button>Create New Post</button>
//             </Link>
//           </div>
//           <List />
//         </div>
//       </div>
//       <div className="chatContainer">
//         <div className="wrapper">
//           <Chat />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;

// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import "./profilePage.scss";
// import apiClient from "../../lib/apiClient";
// import List from "../../components/list/List";
// import Chat from "../../components/chat/Chat";

// function ProfilePage() {
//   const { currentUser, updateUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [selectedAvatar, setSelectedAvatar] = useState(
//     currentUser?.avatarUrl || "/noavatar.jpg"
//   );
//   // Example avatar options
//   const avatars = ["/noavatar.jpg", "/avatar-female.jpeg", "/avatar-male.jpeg"];

//   const handleLogout = async () => {
//     try {
//       await apiClient.post("/auth/logout");
//       updateUser(null);
//       navigate("/");
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };

//   // --- THIS FUNCTION IS NOW FULLY IMPLEMENTED ---
//   const handleAvatarChange = async (avatar) => {
//     setSelectedAvatar(avatar);
//     try {
//       // Make an API call to update the user's avatar on the backend
//       const res = await apiClient.patch(`/users/${currentUser.id}`, {
//         avatarUrl: avatar,
//       });
//       // Update the AuthContext with the latest user data from the API response
//       updateUser(res.data.user);
//     } catch (err) {
//       console.error("Failed to update avatar:", err);
//       // Optionally, revert the selected avatar if the API call fails
//       setSelectedAvatar(currentUser.avatarUrl || "/noavatar.jpg");
//     }
//   };

//   if (!currentUser) return <div>Loading...</div>;

//   return (
//     <div className="profilePage">
//       <div className="details">
//         <div className="wrapper">
//           <div className="title">
//             <h1>User Information</h1>
//             <Link to="/profile/update">
//               <button>Update Profile</button>
//             </Link>
//           </div>
//           <div className="info">
//             <span>
//               Avatar:
//               <img src={selectedAvatar} alt="User Avatar" />
//             </span>
//             <span>
//               Username: <b>{currentUser.name}</b>
//             </span>
//             <span>
//               E-mail: <b>{currentUser.email}</b>
//             </span>
//             <button onClick={handleLogout} className="logoutButton">
//               Logout
//             </button>
//           </div>

//           {/* Avatar Selection Section */}
//           <div className="avatar-options">
//             <h2>Select Avatar</h2>
//             <div className="avatar-grid">
//               {avatars.map((avatar) => (
//                 <img
//                   key={avatar}
//                   src={avatar}
//                   alt="Avatar option"
//                   className={selectedAvatar === avatar ? "selected" : ""}
//                   onClick={() => handleAvatarChange(avatar)}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="title">
//             <h1>My List</h1>
//             <Link to="/create">
//               <button>Create New Post</button>
//             </Link>
//           </div>
//           <List />
//         </div>
//       </div>
//       <div className="chatContainer">
//         <div className="wrapper">
//           <Chat />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;
