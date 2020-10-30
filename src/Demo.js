import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Dom.css'
const Demo = ({name}) => {
    return <div className="maindiv">
    <h1> hello {name}</h1>
    <p> hey guys!!</p>
    </div>

}

export default Demo;