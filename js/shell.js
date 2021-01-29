/* Javascript Shell */
// 'use strict';
let cl = console.log;

document.write("<b><i>Javascript Active: </b></i>" + Date());


var testText = React.createElement('h1', null, 'React is Online')
ReactDOM.render(testText, document.getElementById('content'))

// Usage without the h1 variable
// ReactDOM.render(
//   React.createElement('h1', null, 'Hello world!'),
//   document.getElementById('content')
// )
