import React, {useState} from 'react';
import Button from './Button';
import addComma from './addComma';

var Calculator = () => {
    const [value, setValue] = useState('0');
  const [memory, setMemory] = useState(null);
  const [op, setOp] = useState(null);

  const handleClick = operator => () => {
    const num = parseFloat(value);

    switch(operator){
      case 'AC': setValue('0');setMemory(null);setOp(null);return;
      case '∓': setValue((num*-1).toString());return;
      case 'mod': if(value < 0){
        setValue((num*-1).toString());
      }return;
      case '.': if(value.includes('.')) return;
      setValue(value + '.');
      return;
      case '+': if(op != null){
        if(op == '+'){
          setMemory((memory + parseFloat(value)));
        }
        else if(op == '-'){
          setMemory((memory - parseFloat(value)));
        }
        else if(op == '×'){
          setMemory((memory * parseFloat(value)));
        }
        else if(op == '÷'){
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');setOp('+');
      return;
      case '-': if(op != null){
        if(op == '+'){
          setMemory((memory + parseFloat(value)));
        }
        else if(op == '-'){
          setMemory((memory - parseFloat(value)));
        }
        else if(op == '×'){
          setMemory((memory * parseFloat(value)));
        }
        else if(op == '÷'){
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');setOp('-');
      return;
      case '×': if(op != null){
        if(op == '+'){
          setMemory((memory + parseFloat(value)));
        }
        else if(op == '-'){
          setMemory((memory - parseFloat(value)));
        }
        else if(op == '×'){
          setMemory((memory * parseFloat(value)));
        }
        else if(op == '÷'){
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');setOp('×');
      return;
      case '÷': if(op != null){
        if(op == '+'){
          setMemory((memory + parseFloat(value)));
        }
        else if(op == '-'){
          setMemory((memory - parseFloat(value)));
        }
        else if(op == '×'){
          setMemory((memory * parseFloat(value)));
        }
        else if(op == '÷'){
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');setOp('÷');
      return;
      case 'ln': if(op != null){
        if(op == '+'){
          setMemory((memory + parseFloat(value)));
        }
        else if(op == '-'){
          setMemory((memory - parseFloat(value)));
        }
        else if(op == '×'){
          setMemory((memory * parseFloat(value)));
        }
        else if(op == '÷'){
          setMemory((memory / parseFloat(value)));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');setOp('+');
      return;
      case '=': if(op == '+'){
        setValue((memory + parseFloat(value)).toString());
      }
      else if(op == '-'){
        setValue((memory - parseFloat(value)).toString());
      }
      else if(op == '×'){
        setValue((memory * parseFloat(value)).toString());
      }
      else if(op == '÷'){
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);setOp(null);return;
      case '⌫': if(value.length != 1) setValue(value.substring(0,value.length - 1));
      else setValue('0');
      return;
    }

    if(value[value.length - 1] == '.'){
      setValue(value + operator);
    } else {
      setValue(parseFloat(num + operator).toString());
    }

  };
  return(
    <div className="container">
        <div id='result' className="result">{addComma(value)}</div>
        <Button clicked={handleClick} operator='mod' type="function" />
        <Button clicked={handleClick} operator='AC' type="function" />
        <Button clicked={handleClick} operator='⌫' type="function" />
        <Button clicked={handleClick} operator='7' />
        <Button clicked={handleClick} operator='8' />
        <Button clicked={handleClick} operator='9' />
        <Button clicked={handleClick} operator='÷' type='operation' />
        <Button clicked={handleClick} operator='4' />
        <Button clicked={handleClick} operator='5' />
        <Button clicked={handleClick} operator='6' />
        <Button clicked={handleClick} operator='×' type='operation'  />
        <Button clicked={handleClick} operator='1' />
        <Button clicked={handleClick} operator='2' />
        <Button clicked={handleClick} operator='3' />
        <Button clicked={handleClick} operator='-' type='operation'  />        
        <Button clicked={handleClick} operator='∓' type="function" />
        <Button clicked={handleClick} operator='0' />
        <Button clicked={handleClick} operator='.' />
        <Button clicked={handleClick} operator='+' type='operation'  />
        <Button clicked={handleClick} operator='=' type="operation" />
      </div>
  )
}

export default Calculator;
