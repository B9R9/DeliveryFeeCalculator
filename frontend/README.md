# Frontend

## Requirements

- Node.js (version 12 or later)
- npm (Node.js package manager)

## Installation

1. Navigate to the `frontend` directory in your project.
2. Run `npm install` to install the required dependencies.

## Usage

1. After installing dependencies, you can start the frontend server by running `npm start`.
2. Access the frontend application by navigating to `http://localhost:3000` in your browser.

### Backend Connection

If your API calls are encapsulated within a service file located in the `service` directory, and you have a `.Fee.jsx` file where these API calls are utilized, ensure that the backend API is running on the specified proxy target or the correct backend location is configured within these service files.

If necessary, update the API endpoint URLs in your service files to point to the correct backend location. Look for API endpoint URLs in your `Fee.jsx` file or other service files and ensure they are correctly configured.

## TypeScript Integration

While the current setup uses JavaScript, consider integrating TypeScript into your project for improved type safety and code maintainability. TypeScript adds static typing to JavaScript, catching errors before they make it to production and providing better IDE support.

To get started with TypeScript:

1. Install TypeScript: Run `npm install --save-dev typescript @types/react @types/react-dom @types/styled-components` in your frontend directory.
2. Rename your JavaScript files to TypeScript files with the `.tsx` extension.
3. Update your `tsconfig.json` file with the necessary configurations.
4. Start writing TypeScript code!

## Folder Structure

Here's a brief overview of the frontend folder structure:

- **public**: Contains the public assets of the frontend application.
- **src**: Contains the source code of the frontend application.
  - **components**: Contains React components used throughout the application.
  - **service**: Contains service files encapsulating API calls to the backend.
  - **styles**: Contains styled-components for styling the application.

## Contributing

If you'd like to contribute to the frontend component, feel free to open issues or submit pull requests!
