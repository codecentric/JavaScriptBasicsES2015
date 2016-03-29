var op1 = 0, op2 = 0, op = '', end = false, result = NaN;

do{
  op1 = prompt('operand 1');
  op = prompt('operation');
  op2 = prompt('operand 2');

  op1 = parseInt(op1, 10);
  op2 = parseInt(op2, 10);

  switch(op){
    case '+':
      result = op1 + op2;
      break;
    case '-':
      result = op1 - op2;
      break;
    case '/':
      result = op1 / op2;
      break;
    case '*':
      result = op1 * op2;
      break;
    default:
      result = 'Something is wrong'
  }

  alert('Result is: ' + result)
  end = confirm('ende?')
}while(end !== true)
