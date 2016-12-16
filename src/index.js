import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// const data = [
//   {
//     "when": "2 minutes ago",
//     "who": "Jill Dupre",
//     "description": "Created new account"
//   },
//   {
//     "when": "1 hour ago",
//     "who": "Lose White",
//     "description": "Added fist chapter"
//   },
//   {
//     "when": "2 hours ago",
//     "who": "Jordan Whash",
//     "description": "Created new account"
//   }
// ];

// const headings = ['When', 'Who', 'Description'];
//
// const title = 'Recent Changes';
//
// const props = {headings: headings, changeSets: data, title: title};

console.log('Start');

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// ReactDOM.unmountComponentAtNode(document.getElementById('root'));
