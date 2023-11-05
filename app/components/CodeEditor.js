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
  const [output, setOutput] = useState(" "); // Initialize an empty output

  const handleEditorChange = (newCode) => {
    setCode(newCode);
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
    <div>
      <MonacoEditor
        width="800"
        height="400"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
      />
      <div className="pt-10">
        <button
          className="bg-green-500 text-white hover:bg-green-600 px-2 py-2 rounded-md"
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
