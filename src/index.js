// var React = require('react');
// var ReactDOM = require('react-dom');

// ReactDOM.render(
//   [<h1>Thapa Technical Netflix Pick</h1>,
//   <p>List of 5 Best Series</p>,
//   <ol>
//     <li>Dark</li>
//     <li>Extra curricular</li>
//     <li>My Holo Love</li>
//     <li>My first-2 love</li>
//     <li>Mr. Robot</li>
//   </ol>
//   ],
//   document.getElementById('root')

// );




// expression in react starts here =>

import React from 'react';
import ReactDOM from 'react-dom';

// const name = "amir afjal"

// ReactDOM.render(
//   <>
//     <h1>this is {name}</h1>
//     <p>my lucky number is {2 + 3}</p>
//   </>,
//   document.getElementById('root')
// );


// templete literals in react start here =>
const fname = 'amir';
const lname = "afjal";

ReactDOM.render(
  <>
    <h1>{`My first name is ${fname} and my last name is ${lname}`}</h1>
    <p>{`${fname} ${lname} lucky number is ${2 + 3}`}</p>
  </>,
  document.getElementById('root')
);


