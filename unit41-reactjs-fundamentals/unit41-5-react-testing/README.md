# React Testing Exercises
This exercise practices working with props, defaultProps, state, and simple click events in React.

## Carousel Component
You’ve been given a React App containing an image carousel. The app contains a couple of components, and a single test file.

### Part 1: Demo the App & Read the Code
Start the app and play around with the image carousel. Sketch out the component hierarchy and make sure you understand what’s going on. Which components have state, and how does that state get changed?

You may find bugs as you’re exploring the app. Don’t fix them yet!

### Part 2: Smoke and Snapshot tests
The Card and Carousel components don’t have any smoke or snapshot tests. Write one of each type of test for each component.

### Part 3: Bug! Left arrow
As you may have noticed, the left arrow and the right arrow both do the same thing: move to the next image in the image array. Write a (failing) test that checks for this bug. In other words, write a test that expects that when you’re on the second image, clicking the left arrow will move you to the first image. Once you’ve written a failing test, fix the app so that your test turns green.

### Part 4: Bug! Exhausting the image array
As you may have noticed, if you’re on the last image and try to move forward, or if you’re on the first image and try to move backward, you get an error. To fix this, let’s just hide the left arrow on the first image and the right arrow on the last.

Write a (failing) test to check that the left arrow is missing when you’re on the first image, and that the right arrow is missing when you’re on the last image. Then fix the bug so that your test turns green.

# App Information
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
