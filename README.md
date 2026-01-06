# WTWR (What to wear) React.js/weather API project

## This project (created by Sean Semyck) is the final project for TripleTen's software developer course Sprint 10, used to showcase an understanding for React.js.

- The app uses .fetch to gather information from the OpenWeather API and return the most appropriate clothing options. It is comprised of most React/JSX to makeup most of the markup. The page is broken up into components ( found in assets ) as per React notation. Each component contains a JSX file and a corresponding CSS file.

- The project demonstrates loose coupling of components by using App.JSX to pass most of the functional logic to the other components. This makes the other components more scalable and independent by avoiding "hard-coding" anything into the components themselves.

### Things to improve:

- The main issue with the current state is the lack of responsive design. There is a need to scale the page for mobile use.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
