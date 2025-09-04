# Commercial Estate Client

This is the frontend client for the Commercial Estate platform, built with React and Vite. It provides a modern, responsive user interface for property listings, agent profiles, chat functionality, and more.

## Features

- **Property Listings:** Browse, filter, and search for properties.
- **Property Details:** View detailed information and images for each property.
- **User Authentication:** Register, login, and manage user profiles.
- **Agent Directory:** View and contact real estate agents.
- **Chat System:** Communicate with agents and other users.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Interactive Map:** Visualize property locations.
- **Image Uploads:** Upload property images via a custom widget.

## Project Structure

- `public/`: Static assets and images.
- `src/`: Main source code.
  - `components/`: Reusable UI components (cards, chat, filter, navbar, etc.).
  - `context/`: React context for authentication.
  - `lib/`: API client and dummy data.
  - `routes/`: Page components (home, about, agents, contact, create, list, login, profile, register, single property).
  - `index.scss`, `responsive.scss`: Global and responsive styles.
  - `main.jsx`: App entry point.

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Technologies Used

- React
- Vite
- SCSS
- JavaScript (ES6+)

## Customization

- Update images in `public/` for branding.
- Modify styles in `src/index.scss` and component-specific SCSS files.
- Extend functionality by adding new components or pages in `src/routes/`.

## License

This project is licensed under the MIT License.
