const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  const { num1, num2, operation } = req.body;

  if (!num1 || !num2 || !operation) {
    return res.status(400);
  }

  const firstOperand = +num1;
  const secondOperand = +num2;

  let result;

  switch (operation) {
    case 'add':
      result = firstOperand + secondOperand;
      break;
    case 'subtract':
      result = firstOperand - secondOperand;
      break;
    case 'multiply':
      result = firstOperand * secondOperand;
      break;
    case 'divide':
      if (secondOperand === 0) {
        return res.status(400);
      }
      result = firstOperand / secondOperand;
      break;
    default:
      return res.status(400);
  }

  res.send(JSON.stringify(result));
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
