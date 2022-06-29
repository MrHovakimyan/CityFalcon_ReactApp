# CityFalcon_ReactApp

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Project Description

CityFalcon is a quite cozy and nice app that represents a simple page with a list of stories that are being fetched from the given endpoint (basic news from worldwide newspapers) and renders it with basic information. Main "Content" is a list of stories of several types such as publications, research, tweets, etc. 

## Project status

Features that are planned to develop in the future:

- Sidebar with additional information / Search functionality 
- SignUp/SignIn functionality -> linked to the FireBase.

---

### Stories behaviour
- By clicking on the story title, the URL opens in a new tab.
- By clicking on the arrow down, the story expands and a block with curation tools appear: bookmark, like, dislike.
- By clicking on the arrow again the story collapses.
- By clicking the "Refresh" button the page is reloaded.
- When the page is loaded to the bottom the infinity loading is applied for fetching more stories.

---

### Filters behaviour
- By clicking on the filter button, the filters appear/hide.
- When clicking on "Autorefresh", a list of possible refresh intervals appears. Possible values are 10 seconds, 30 seconds, 1 minute, and 10 minutes. If a user selects one of the new stories is being updated with this interval (new request is sent).
- When clicking on "Languages", we see a list of languages to choose from.
- When clicking on "Order", we see a list of options to choose from.
- Filter changes are applied on click.
- Filters close upon clicking outside the field.

## Support

In case you have questions or any kind of issues do not hesitate to contact me at

- Email (hghovakimyan@outlool.com)
- _[LinkedIn profile <img src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-vector-PNG.png" width=30px/>](https://www.linkedin.com/in/hayk-hovakimyan-b81600b2/)_
- _[GitHub profile <img src="https://pics.freeicons.io/uploads/icons/png/3345023101530077752-512.png" width=30px/>](https://github.com/MrHovakimyan)_

- _[FaceBook profile <img src="https://img.icons8.com/plasticine/2x/facebook-new.png" width=30px/> ](https://www.facebook.com/Mr.Hovakimyan/)_

## Additional information / Available Scripts

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
