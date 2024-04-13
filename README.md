# Project Technical Documentation

## Overview
This project is a web application built with React, Tailwind CSS, Redux Toolkit, and Vite. It serves as a boilerplate for starting React projects with Tailwind CSS styling.

## Key Features
- **Technologies Used:**
  - React for building the UI components.
  - Tailwind CSS for styling the components.
  - Redux Toolkit for state management.
  - Vite for fast development and building.

## Project Structure
- The project follows a modular structure with components, pages, and store directories.
- **Components:** Reusable UI elements such as `Header`, `Footer`, `ProductCard`, `Category`, `AddToCart`, `Rating`, etc.
- **Pages:** Different views of the application such as `Products`, `Categories`, `ProductDetails`, `Cart`, etc.
- **Store:** Contains Redux logic for managing the cart state. It includes a `cartSlice` with actions for adding and removing items from the cart.

## Component Linking
- Components are linked in the `App.tsx` file using the `react-router-dom` library.
- Each route in the `Routes` component is linked to a specific page component.

## APIs
- The project uses the `axios` library to make HTTP requests to APIs.
- There are two API functions:
  - `getAllCategories`: Fetches all product categories.
  - `getAllProducts`: Fetches all products, optionally filtered by category.

## Setup and Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use `npm run dev` to start the development server.
4. Access the application at the specified localhost port.

## Author
- **Rochak Pandey**
- Github: [@pandeyrochak](https://github.com/pandeyrochak)

## Support
If you found this project helpful, give it a ⭐️ on GitHub!

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_