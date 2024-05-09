**Summary:**

A web application that allows a user to select a country and display some information about that country, including displaying the country’s flag. The application makes use of the REST countries API, https:// restcountries.com.

**Live site URL**

- [Flags App (React Vite)](https://flagify.netlify.app/)

**Technologies Used:**
- React
- TypeScript
- CSS
- Vite

**Overview:**

This codebase consists of a React application for searching and displaying detailed information about countries. TypeScript ensures type safety, React is utilized for building user interfaces, and CSS styles the components. The Vite development server enhances development speed with hot module replacement (HMR) support, leveraging modern browser capabilities and plugins for React and TypeScript integration.

**Key Components:**

- **App:** The main component orchestrating rendering and state management.
- **SearchBar:** Enables country searches and fetches data from the Rest Countries API.
- **SearchResultsList:** Renders search results or error messages based on API responses.
- **SearchResults:** Displays individual country search results and detailed information.
- **Card:** Presents comprehensive information about a country, including its geography, culture, economy, and more.

**Functionality:**

- Users can search for countries by name using the SearchBar component.
- Search results are displayed in a list format, with detailed information available on click.
- Beautiful video in the background

**Additional Information:**

- The project utilizes React, ReactDOM, and React Icons for UI development.
- TypeScript provides type safety throughout the codebase.
- CSS is employed for styling the user interface components.
- Development tasks such as linting, building, and previewing are facilitated through scripts in the `package.json` file.

**Preview:**

  ![Results](https://i.imgur.com/qqNNGLY.pngimage_url)

  ![Details](https://i.imgur.com/IwyjsXL.png)
