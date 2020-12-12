import _ from 'lodash';
import './style.css';
import Image from './suculentas.jpg';

function component() {
    const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
// Add the image to our existing div.
const myImage = document.createElement("img");
myImage.src = Image;

element.appendChild(myImage);


    return element;
  }
  
  document.body.appendChild(component());