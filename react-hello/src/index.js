import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
    return React.createElement('div', {},
        React.createElement('div', {}, 'HELLO'),
        React.createElement('div', {}, 'WORLD!',
            React.createElement('h1', {}, 'child1 child2')
        )
    );
}

ReactDOM.render( 
    <HelloWorld /> ,
    document.querySelector('#root'));