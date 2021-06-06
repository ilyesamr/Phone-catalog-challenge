# Phone Catalog

It is a challenge that consists of creating a phone catalog app from scratch.

## Features
- Home page with the list of phones
- Details page for every phone
- The phones’ information are retrieved from a REST API using [NodeJS](https://nodejs.org/en/)
-  Spinner component while the app is waiting for phones data

## Structure
This application is composed of two parts
- react-app : the frontend part, which allows to display the phones with their details made with [ReactJS](https://reactjs.org/)
- express-app : the backend part, which allows to send phones informations to the frontend thanks to a REST API made with [ExpressJS](http://expressjs.com/)

## Installation
### Frontend
First, you need to access to the "react-app" folder :
```bash
cd react-app
```
Then, you need to install the dependencies using [npm](https://www.npmjs.com/) :
```javascript
npm install
```
Finally, you need to run the frontend using [npm](https://www.npmjs.com/) :
```javascript
npm start
```
### Backend
First, you need to access to the "express-app" folder :
```bash
cd express-app
```
Then, you need to install the dependencies using [npm](https://www.npmjs.com/) :
```javascript
npm install
```
Finally, you need to run the backend using [npm](https://www.npmjs.com/) :
```javascript
npm start
```
## Test
To run the unit tests, you need to go to the "react-app" folder and type :

```javascript
npm test
```

## Demo
This application is deployed with [Heroku](https://www.heroku.com/). 

If you want to access to the app please click [here](https://phone-catalog-challenge.herokuapp.com/)


