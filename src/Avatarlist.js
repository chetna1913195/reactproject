import React from 'react';
const Avatarlist = (props) => {
    return (
        <div className="c ma4 bg-light-yellow dib pa4 grow shadow-4 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
    <h1>{props.name}</h1>
    <p>{props.work}</p>
    </div>
    )
}
    export default Avatarlist;