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

// -------------------------------


// expression in react starts here =>

// import React from 'react';
// import ReactDOM from 'react-dom';

// const name = "amir afjal"

// ReactDOM.render(
//   <>
//     <h1>this is {name}</h1>
//     <p>my lucky number is {2 + 3}</p>
//   </>,
//   document.getElementById('root')
// );

// ---------------------------------------


// templete literals in react start here =>
// import React from 'react';
// import ReactDOM from 'react-dom';
// const fname = 'amir';
// const lname = "afjal";

// ReactDOM.render(
//   <>
//     <h1>{`My first name is ${fname} and my last name is ${lname}`}</h1>
//     <p>{`${fname} ${lname} lucky number is ${2 + 3}`}</p>
//   </>,
//   document.getElementById('root')
// );


// ------------------------------------------

// video 13 challenge no.2 starts here

// import React from 'react';
// import ReactDOM from 'react-dom';

// const myName = "amir afjal";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1>{`my name is ${myName}`}</h1>
//     <p>{`Current Date is ${currDate}`}</p>
//     <p>{`Current Time is ${currTime}`}</p>
//   </>,
//   document.getElementById('root')
// );


// -----------------------------------
// html global attribute ::contentEditable starts here=>

// import React from 'react';
// import ReactDOM from 'react-dom';

// const fullName = "amir afjal";
// const img1 = "https://picsum.photos/id/237/200/300";
// const img2 = "https://picsum.photos/id/238/200/300";
// const img3 = "https://picsum.photos/id/239/200/300";
// const links = 'https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14';

// ReactDOM.render(
//     <>
//         <h1 contentEditable="true">My name is {fullName}</h1>
//         <img src={img1} alt="img1" />
//         <img src={img2} alt="img2" />
//         <a href={links} target="_blank" >
//             <img src={img3} alt="img3" />
//         </a>
//     </>,
//     document.getElementById('root')
// );


// --------------------------------------
// using css in react=>

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const abc = "amir afjal"
// const img1 = "https://picsum.photos/id/237/200/300";
// const img2 = "https://picsum.photos/id/238/200/300";
// const img3 = "https://picsum.photos/id/239/200/300";

// ReactDOM.render(
//     <>
//         <h1 id="name" contentEditable="true">My name is {abc} </h1>
//         <div id="image">
//             <img src={img1} alt="a" />
//             <img src={img2} alt="b" />
//             <img src={img3} alt="c" />
//         </div>

//     </>,
//     document.getElementById("root")
// );


// -------------------------------------
// React challenge 3 mini project 1 dynamically show mornig ,afternoon and night=>video 17-18=>
// year ,month ,date ,hours =>

import React from "react";
import ReactDOM from 'react-dom';
let greetings = "";

let currTime = new Date();
currTime = currTime.getHours();

if (currTime >= 1 && currTime < 12) {
    greetings = "Good Morning";
} else if (currTime >= 12 && currTime < 19) {
    greetings = "Good Afternoon";
} else {
    greetings = "Good Night";
}


ReactDOM.render(
    <>
        <h1>Hello sir, {greetings}</h1>
    </>,
    document.getElementById('root')
);




