import React from 'react';

const Scroll =(props)=>{
    return (
    <div style={{overflowY: 'scroll',marginTop:"10px" ,border: "solid 5px #000", height: "800px"}}>
        {props.children}
    </div>);
}

export default Scroll;