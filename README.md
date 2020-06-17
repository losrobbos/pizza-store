This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Pizza Order store

Now the time has come, my friend....

You will now create the first source of your future income: Your own online store.

### Stage 3 - Add cart state

- Create a “cart” state in your Context - it should hold an array of bought pizzas
  - use useState hook one more time to set that up
- Create a function addToCart
  - this function should add a product to your cart state
- Export cart and addToCart in the value={} prop to make it available for your components

Pizza component
- Import the addToCart function from context
- When clicking “Buy” button in your Pizza component
  - add the pizza to your cart state in context
  - console.log your cart data afterwards

### Stage 2 - Outsource your data to ContextAPI

- Create a directory contexts
- Create a file PizzaContext.js
  - Setup a Context & Provider
  - Outsource your pizza data to there
  - Export BOTH (!) - the Provider and the Context
  - Export the pizza data in the value prop of the Provider (=> value={{ pizzas }}
- index.js: Wrap your App with that Provider
  - This way we make the data accessible in our whole App component
- Grab your data in your PizzaList component using useContext


### Stage 1 - Pizza List

- Create a PizzaList component
  - Define an array of pizzas using useState
    - Use free pizza image links from pixabay, unsplash.it or -your-other-favorite-free-image-service
  - Render a list of Pizza components from that data
    - Pass in your data as prop to your pizza component please

- Create a component to display a pizza
  - Display Image, title, description and price
  - Add a Buy now button

Bonus:
- On buy click: Display a modal that item was added to cart



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
