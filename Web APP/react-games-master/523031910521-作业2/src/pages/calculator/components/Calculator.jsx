import { useState } from "react";
import { CalculatorButton } from "./Button";
import { BUTTON_STYLES } from "../utils/Style";
import { ExpressionParser } from "../utils/expressionParser";

// import PropTypes from "prop-types";

export function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    setInput(input + number.toString());
  };

  const handleOperatorClick = (newOperator) => {
    if (!result && !input) return;

    if (result && input === "") {
      // setOperator(newOperator);
      setResult(result.slice(0, -1) + newOperator);
      return;
    }

    if (input && !result) {
      // setOperator(newOperator);
      setResult(input + newOperator);
      setInput("");
      return;
    }
    setResult(result + input + newOperator);
    setInput("");
  };

  const handleParenthesisClick = (parenthesis) => {
    if (parenthesis === "(") {
      // 左括号直接追加到结果，并清空输入
      setResult(result + input + parenthesis);
      setInput("");
    } else {
      // 右括号前先将当前输入合并到结果，再追加右括号
      setResult(result + input + parenthesis);
      setInput("");
    }
  };

  const handleEqualClick = () => {
    // if (input === "") return;

    let newResult = result + input;
    const calRes = ExpressionParser.evaluate(newResult);

    if (!isFinite(calRes)) {
      clear();
      return;
    }

    setInput(calRes.toString());
    setResult("");
  };

  const handleClear = () => {
    clear();
  };

  const handleBackspace = () => {
    if (input.length > 0) {
      setInput(input.slice(0, -1));
      return;
    }
    if (result.length > 0) {
      setResult(result.slice(0, -1));
    }
  };

  const handleDotClick = () => {
    if (input === "") {
      setInput("0.");
      return;
    }

    if (!input.includes(".")) {
      setInput(input + ".");
    }
  };


  const handlePlusMinusClick = () => {
    if (input === "") return;
    setInput((parseFloat(input) * -1).toString());
  };

  const handlePercentClick = () => {
    if (input === "") return;
    setInput(Number((parseFloat(input) / 100).toFixed(12)).toString());
  };

  const clear = () => {
    setInput("");
    setResult("");
  };
  const BUTTONS = [
    [
      { label: "C", onClick: handleClear, style: BUTTON_STYLES.clear },
      { label: "(", onClick: () => handleParenthesisClick("("), style: BUTTON_STYLES.parenthesis },
      { label: ")", onClick: () => handleParenthesisClick(")"), style: BUTTON_STYLES.parenthesis },
      { label: "÷", onClick: () => handleOperatorClick("÷"), style: BUTTON_STYLES.operator },
    ],
    [
      { label: "+/-", onClick: handlePlusMinusClick, style: BUTTON_STYLES.function },
      { label: "%", onClick: handlePercentClick, style: BUTTON_STYLES.function },
      { label: "←", onClick: handleBackspace, style: BUTTON_STYLES.function },
      { label: "×", onClick: () => handleOperatorClick("×"), style: BUTTON_STYLES.operator },
    ],
    [
      { label: "7", onClick: () => handleNumberClick(7), style: BUTTON_STYLES.number },
      { label: "8", onClick: () => handleNumberClick(8), style: BUTTON_STYLES.number },
      { label: "9", onClick: () => handleNumberClick(9), style: BUTTON_STYLES.number },
      { label: "-", onClick: () => handleOperatorClick("-"), style: BUTTON_STYLES.operator },
    ],
    [
      { label: "4", onClick: () => handleNumberClick(4), style: BUTTON_STYLES.number },
      { label: "5", onClick: () => handleNumberClick(5), style: BUTTON_STYLES.number },
      { label: "6", onClick: () => handleNumberClick(6), style: BUTTON_STYLES.number },
      { label: "+", onClick: () => handleOperatorClick("+"), style: BUTTON_STYLES.operator },
    ],
    [
      { label: "1", onClick: () => handleNumberClick(1), style: BUTTON_STYLES.number },
      { label: "2", onClick: () => handleNumberClick(2), style: BUTTON_STYLES.number },
      { label: "3", onClick: () => handleNumberClick(3), style: BUTTON_STYLES.number },
      { label: "=", onClick: handleEqualClick, style: BUTTON_STYLES.equals },
    ],
    [
      { label: "0", onClick: () => handleNumberClick(0), style: BUTTON_STYLES.number },
      { label: ".", onClick: handleDotClick, style: BUTTON_STYLES.number },
    ],
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-emerald-800 mb-4">计算器</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <div className="bg-gray-100 p-4 rounded mb-4 h-24">
          <div className="text-right text-xl text-gray-600 min-h-[1.5rem]">
            {result}
          </div>
          <div className="text-right text-3xl">{input}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {BUTTONS.map((row, rowIndex) =>
            row.map((button, colIndex) => (
              <CalculatorButton key={`${rowIndex}-${colIndex}`} onClick={button.onClick} className={button.style}>
                {button.label}
              </CalculatorButton>
            )),
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
