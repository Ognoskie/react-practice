// 1) import the react and react DOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) create a component
function App() {
    let message = 'Bye there!';
    let randomNum = Math.floor((Math.random() * 6) + 1);
    if (randomNum > 3) {
        message = 'Hello there!';
    }
    console.log(randomNum)
    return <h1>{message}</h1>;

}


// 5) show the component on the screen
root.render(<App />);