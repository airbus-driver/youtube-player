# Youtube Player

Youtube player is a small web application to create and play youtube playlist

***Auto play is muted because of a new security update in browsers***

## Client
### Install
```
cd client
npm install
```
***If you get an error during `npm install` about `react-virtualized` package then add force switch***
```
npm install --force
```
- Make a copy of the `.env.example` file and name it `.env`
- Fill in the values for firebase config

***It is important to supply the firebase config values or the web app will not work***

### Run
```
npm start
```

### Test
```
npm test
```

## Backend
***Backend is implemented using google firebase - no need to run anything***
- The `index.js` file in functions folder has one cloud function `addVideoInfo` which will get the video info and store it in firestore.
- The `addVideoInfo` function is already deployed in firebase and is triggered on create new doc.

## License
[MIT](https://choosealicense.com/licenses/mit/)