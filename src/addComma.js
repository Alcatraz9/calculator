const addComma = (value) => {
    var output = '';
    var decimal = '';
    var isNeg = false;
    if(value.includes('.')) {
        output = value.substring(0, value.indexOf('.'));
        decimal = value.substring(value.indexOf('.'));
    } else {
        output = value;
    }

    if(parseFloat(value)<0){
        isNeg = true;
        output = output.substring(1);
    }

    if(isNeg){
        return '-' + parseFloat(output).toLocaleString() + decimal;
    } else {
        return parseFloat(output).toLocaleString() + decimal;
    }

}

export default addComma;