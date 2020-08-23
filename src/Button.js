import React from 'react';

const Button = ({operator, clicked}) => {
    var subc = 'Button ';
    if(!isNaN(operator)){
        subc = subc + 'dark';
    } else if(operator==='=' || operator=='AC'){
        subc = subc + 'double';
    }
    return <button onClick={clicked(operator)} className={subc}>{operator}</button>;
}

export default Button;