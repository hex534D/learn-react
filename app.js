import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Hello I am h1 from child1!!'),
    React.createElement('h2', {}, 'Hello I am h2!!'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'Hello I am h1 from child2!!'),
    React.createElement('h2', {}, 'Hello I am h2!!'),
  ]),
]);

console.log(heading);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
