import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

const CodeEditor = () => {
  const [code, setCode] = useState(
    `function greet(name) {
  return 'Hello, ' + name + '!';
}
greet('John'); // This should return "Hello, John!"
`
  );
  const [output, setOutput] = useState("Code Output: (Nothing Yet)"); // Initialize an empty output

  const handleEditorChange = (newCode) => {
    setCode(newCode);
  };

  const [color, setColor] = useState("vs-dark");

  const changeColor = () => {
    if (color === "vs-dark") {
      setColor("vs-light");
    } else {
      setColor("vs-dark");
    }
  };

  const handleRunCode = () => {
    try {
      const result = eval(code);
      setOutput("Code Output: " + result); // Update the output state
    } catch (error) {
      console.error("Code Execution Error:", error);
    }
  };

  return (
    <div className="">
      <button
        onClick={changeColor}
        className="bg-gray-300 px-2 text-gray-400 hover:bg-gray-500 hover:text-white"
        type="button"
      >
        Change Theme
      </button>
      <MonacoEditor
        width="1000"
        height="400"
        language="javascript"
        theme={color}
        value={code}
        onChange={handleEditorChange}
      />
      <div className="">
        <button
          className="bg-green-500 text-white hover:bg-green-600 px-2 py-2"
          onClick={handleRunCode}
        >
          Run Code
        </button>
      </div>
      <div className="py-10">
        <div
          className="px-2 py-2 h-10 shadow-sm rounded-md text-gray-900 ring-1 ring-inset ring-gray-300"
          id="output"
        >
          {output}
        </div>{" "}
      </div>
    </div>
  );
};

export default CodeEditor;
