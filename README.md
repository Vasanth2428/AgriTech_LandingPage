# AgriTech Landing Page

A modern, responsive landing page for AgriTech solutions built with React.

## Description

This project is a landing page designed for an agricultural technology company. It features sections for header, hero, information, and contact modal to showcase AgriTech services and encourage user engagement.

## Features

- Responsive design optimized for all devices
- Hero section with compelling call-to-action
- Information sections highlighting key features
- Contact modal for user inquiries
- Built with React and modern CSS

## Technologies Used

- React 19.2.0
- React DOM 19.2.0
- React Scripts 5.0.1
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd AgriTech_LandingPage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Project Structure

```
AgriTech_LandingPage/
├── public/
│   ├── assets/
│   │   ├── farmer.png
│   │   ├── farmer.webp
│   │   ├── illustration.png
│   │   └── illustration.webp
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ContactModal/
│   │   │   ├── ContactModal.css
│   │   │   └── ContactModal.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   ├── InfoSection/
│   │   │   ├── InfoSection.css
│   │   │   └── InfoSection.jsx
│   │   └── Navbar/
│   │       ├── Navbar.css
│   │       └── Navbar.jsx
│   ├── App.jsx
│   ├── base.css
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Components

- **Header**: Navigation and branding
- **Hero**: Main call-to-action section
- **InfoSection**: Detailed information about services
- **ContactModal**: Contact form modal
- **Navbar**: Navigation bar component
