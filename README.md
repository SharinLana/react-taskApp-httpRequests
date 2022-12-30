# Task App (React.js)

`You are on the main branch. 
All the http requests are handled directly in the React components`

> This application allows you to write/delete daily tasks. Each task will be stored in a Firebase Realtime Database until you delete it by clicking on the task field on the screen.
> `NOTE: The app was created using 2 different approaches:

- the first is the classic approach with creating http requests directly in the components (stored in the branch main);
- the second approach uses a custom hook, when all the http request logic is stored inside the useHttp() custom hook and then executed in the components (stored in the branch custom-hook).`

## The goals of creating this application:

The main goals for me as a web developer were to improve my skills in working with:

- http requests and Firebase (fetching, posting, deleting data) asynchronously;
- the React hooks: useState(), useEffect();
- the React props (data transfer from parents to children and vice versa);
- JavaScript logic and methods (async-await, fetch(), filter(), map(), trim(), ternary operator, if/else statement, spread operator, etc);
- React styled components;

## To start the app on your machine:

1. Clone the project to your machine by running:

```
git clone https://github.com/SharinLana/react-taskApp-httpRequests.git
```

2. To install the project dependencies, run:

```
npm install
```

3. When the installation is complete, run the following command to start the app:

```
npm start
```

4. To view the code of the alternative approach:

```
git switch custom-hook
```

## Languages, frameworks, libraries, packages, tools and technologies:

- React.js
- JavaScript
- styled-components
- Firebase

## Functionalities:

- fetching, posting and deleting user entered tasks using Firebase Realtime Database;
- handling and displaying http request errors;
- prohibit submitting empty input field;
- displaying components conditionally;
- responsive design (mobile adaptation);
