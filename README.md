# Testfully Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Structure

All the project components and files are in the app ./src/app folder
**Note: I would like to separate the project UI and Logic with patterens below
	1. `Components`: Smallest Parts of the ui that usually do not contain logic
	2. `Container`: Larget than `components` that are contained with component(s) and we handle logic of the UI there
	3. `Screens`: We have screens that are contained of `containers`. Screens also should contain logic if needed

For the folder structure I have decided to keep tests in a single folder but based on the scale of the project and usually I put the test for each component in it's own component folder. The folder structure that I usually utilize in my projects:
```bash
	app/
		component/
			DummyComponent/
				index.tsx
				DummyComponent.test.tsx
				DummyComponent.storybook.tsx
				(DummyComponent.utils.tsx)
```

**Note: For handling the user inputs and forms I have utilized the `Formik`.
extra node on the form handle hooks:
	For the small projects I would like to keep custom hooks as close as possible for the components. eg: `useSignInForm` hook which I haven't generated a hooks folder and kept it in the same folder as the container itself

**Note: `src/app/types` folder contains some types that we commonly use in our components and share amongest them

**Note: `src/app/utils` folder containes some utility functions and commonly shared things amongest the components

**Note: For large scale projects I also have `src/config` folder and put my config and configuation related stuff there