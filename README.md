This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Pizza Order store

Now the time has come, my friend....

You will now create the first source of your future income: Your own online store.

We will apply the modern React features Hooks & ContextAPI to get there.

Demo on end result: https://pizza-store-two.vercel.app/

### Intro

We will use ContextAPI as our central store for data and functions / actions to change that data. 

And we will use React Hooks to code with functional components only. With functions we get out of the classes "this" hell where we have to "thisify" almost anything, which makes our code very wordy and hard to read, once it gets more complex, especially in forms. But funkys have no state and lifecycle by default. Hooks will "upgrade" our funkys to be able to manage state and lifecycle. 

We will apply the following hooks:
- useState -> to setup state variables in functional components
- useContext -> to read data out of our central store (=context)
- useEffect -> to fetch data from an API in functional components (=replaces componentDidMount)


### Stage 1 - Pizza List

Create a list of pizzas. So far no ContextAPI involved...

- Create a component to display a pizza 
  - Display Image, title, description and price
  - The data should come from props please
  - Add a "Buy" button

- Create a PizzaList component
  - Define a list of products using useState
    - Use free pizza image links from pixabay, unsplash.it or -your-other-favorite-free-image-service
  - Render a list of Pizza components from that data
    - Pass in your data as prop to your pizza component please

Hint: You can also start in your App.js file and code your list there, if that's easier for you. Once everything works, create the components listed above.

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
  - view your state change in React Developer Tools
    - Chrome > Inspect > Tab "Components" > hooks > State


### Stage 4 - Display cart

Create a component Cart.js
  - Grab the ordered pizzas from your context (= cart state)
  - Display the products with title & price per item

Router setup
- Install react-router-dom
- index.js: Wrap everything with BrowserRouter or HashRouter
- App.js: Setup two routes
  - Home "/" : here we show our pizza list
  - Cart "/cart" : here we show our cart component
- Create a Nav to jump between Pizzas and Cart routes


### Bonus Tasks - if you ever have the time

Here some extras that you can continue working on to ace out your skillset.

#### Cart total

Display the total price of all pizzas in your cart

Hints:

- Context: Create a function "getTotal"
  - this should calculate the total sum of your products in cart
  - export the function by putting it in the value prop of your provider
  - import the function in the cart


#### Manage Quantities

Cart state
- when adding items to cart: add a quantity field
- check if item to add is already in cart. If so: Increase quantity by 1

- Allow changing the quantity of items in the cart
- Allow deleting items in the cart


#### Redirect

On click "Buy item" => redirect to the cart page


#### Product Search

- Create a PizzaFilter component with one input for the search field
- As you type in the input: Show pizzas that match search term dynamically


#### Outsource data to API

- Copy your pizzas array data to a pizzas.json file in directory “data”
- Setup an API for your pizzas using JSON Server
- Add a script to your package.json file for running the API
- Context: Fetch the list of products from API
  - use the useEffect hook for that (useEffect => replacement for componentDidMount in function components) 


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
