import React, { useEffect, useState } from "react";
import ace from "ace-builds";

const CodeEditor = () => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/python");
  }, []);

  const handleRun = async () => {
    const code = ace.edit("editor").getValue();

    const response = await fetch("YOUR_BACKEND_ENDPOINT_TO_EXECUTE_CODE", {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setOutput(result.output);
  };

  return (
    <div>
      <div id="editor" style={{ width: "100%", height: "400px" }}></div>
      <button onClick={handleRun}>Run</button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
