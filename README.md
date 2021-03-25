This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running locally
download the Front end and the backend folder from the following link
1) Frontend: https://github.ccs.neu.edu/rahulravindran/wbdv-final-proj-frontend
2) Backend : https://github.ccs.neu.edu/tejashwini/wbdv-CS5610-spring2020-FinalProject

Open the backend project in intelliJ and make sure to change the cross Origins value in all the controllers
to "*" and then run the program. Backend should be up an running.

Open the frontend project in intelliJ and make sure to change the "API_URL" in the common/constants.js to
"http://localhost:8080/api/" or whatever local port the backend runs on. Now navigate to the folder using 
terminal or command prompt and run npm start. It should start the application.

## Website Description

### A platform to share images and view images uploaded by other users.

There are two kinds of users ### 1) Regular and 2) Business
Regular users can only upload, buy and view images (with filters)
Business users can upload, buy and sell products.

## Uploading an image
### Currently the Images uploaded should have low resolution and should be below 400kb
User can upload image by navigating to the upload image section
1) when on the page, click the upload icon to upload an image it will then give options to choose filters.
2) After choosing a filter the image changes according to the filter chosen
3) Option to add Hashtags and an upload button to save the image appears.
4) User can push the button and the image will be uploaded and the site navigates to the feed page

## Feed page
This page displays all the images that were uploaded by all the users
Here the user can click on an image to check the details of that image.
If the image was uploaded by the same user then the user can delete it.


## Profile Page
This page displays the User information. 
1) User name
2) user Posts
3) Uploaded images 

## Hashtag Page
This page displays the images associated with a Hashtag

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
