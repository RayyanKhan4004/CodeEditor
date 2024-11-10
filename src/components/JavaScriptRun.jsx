import React, { useState } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function JavaScriptRun() {
  const [code, setCode] = useState(`console.log("Hello, World!");`);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // Capture console.log output
      const originalLog = console.log;
      console.log = (...args) => {
        setOutput(prev => prev + args.join(' ') + '\n');
      };

      // Execute the code
      eval(code);

      // Restore original console.log
      console.log = originalLog;
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">JavaScript Compiler</h1>
      <AceEditor 
                    mode="js"
                    theme="monokai"
                    name="jsEditor"
                    onChange={setCode} 
                    fontSize={14}
                    lineHeight={19}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={code}
                    // width='40vw'
                    // height='90vh'
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        wrap: true,
                        tabSize: 2,
                    }}
                />
      {/* <textarea
        className="border border-gray-300 p-2 w-full h-40 mb-4"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      /> */}
      <button
        onClick={runCode}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Run Code
      </button>
      <h2 className="mt-4 font-bold">Output:</h2>
      <pre className="bg-gray-100 p-2 w-full h-40 overflow-auto border border-gray-300">
        {output}
      </pre>
    </div>
  );
}

export default JavaScriptRun;
