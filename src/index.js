import _ from 'lodash';
import './style.css';
import Icon from './angularjs-icon.png';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'from', 'Dave!'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('angular-image');

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
