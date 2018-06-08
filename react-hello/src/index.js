import React from 'react';
import ReactDOM from 'react-dom';


function HelloWorld() {
    return(
        <div>       
             <Hello /> <World />
        </div>
    );
}

function Hello(){
    return (
        <span>Hello</span>
    )
}

function World(){
    return(
        <span>World!</span>
    )
}
// eslint-disable-next-line 
function NameCells () { 
    return (
        <React.Fragment>
            <td>First Name </td>
            <td>Last Name</td>
        </React.Fragment>
        
    );
}

ReactDOM.render( 
    <HelloWorld /> ,
    document.querySelector('#root'));