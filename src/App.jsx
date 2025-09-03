import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import CreatePage from "./routes/createPage/createPage";
import RequireAuth from "./routes/layout/requireAuth";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
// 1. Import the AboutPage component
import AboutPage from "./routes/aboutPage/AboutPage";
import ContactPage from "./routes/contactPage/contactPage";
import AgentsPage from "./routes/agentsPage/AgentsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // --- PUBLIC ROUTES ---
        // These are accessible to everyone
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/properties/:id", element: <SinglePage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },

        // --- THIS IS THE FIX ---
        // 2. Add the new route for the About page
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/agents", element: <AgentsPage /> },

        // --- PROTECTED ROUTES ---
        // These are guarded by the RequireAuth component
        {
          element: <RequireAuth />,
          children: [
            { path: "/profile", element: <ProfilePage /> },
            { path: "/create", element: <CreatePage /> },
            { path: "/profile/update", element: <ProfileUpdatePage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
