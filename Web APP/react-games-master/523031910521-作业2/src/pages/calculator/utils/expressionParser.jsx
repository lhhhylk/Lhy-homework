export class ExpressionParser {
  static evaluate(expression) {
    try {
      const tokens = this.tokenize(expression);
      const ast = this.buildAST(tokens);
      return this.evaluateAST(ast);
    } catch (e) {
      console.error(e);
      return "Error";
    }
  }

  static tokenize(expression) {
    return expression
      .replace(/\s/g, '')
      .match(/(\d+\.?\d*|[+\-×÷()])/g) || [];
  }

  static buildAST(tokens) {
    const output = [];
    const operators = [];

    const precedence = {
      '+': 1,
      '-': 1,
      '×': 2,
      '÷': 2
    };

    tokens.forEach(token => {
      if (!isNaN(parseFloat(token))) {
        output.push({ type: 'number', value: parseFloat(token) });
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length && operators[operators.length - 1] !== '(') {
          output.push({ type: 'operator', value: operators.pop() });
        }
        operators.pop(); // Remove '('
      } else {
        while (operators.length &&
        precedence[operators[operators.length - 1]] >= precedence[token]) {
          output.push({ type: 'operator', value: operators.pop() });
        }
        operators.push(token);
      }
    });

    while (operators.length) {
      output.push({ type: 'operator', value: operators.pop() });
    }

    return output;
  }

  static evaluateAST(ast) {
    const stack = [];

    ast.forEach(node => {
      if (node.type === 'number') {
        stack.push(node.value);
      } else {
        const b = stack.pop();
        const a = stack.pop();
        switch (node.value) {
          case '+': stack.push(a + b); break;
          case '-': stack.push(a - b); break;
          case '×': stack.push(a * b); break;
          case '÷':
            if (b === 0) throw new Error("Division by zero");
            stack.push(a / b); break;
          default: throw new Error("Invalid operator");
        }
      }
    });

    return stack[0];
  }
}