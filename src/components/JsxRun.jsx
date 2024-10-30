
import React, { useState } from 'react';
import parse from 'html-react-parser';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function JsxRun() {
    const [code, setCode] = useState(
        `
          <h1 style="background-color: #3b82f6; padding: 1.5rem; color: white;">Hi There code for fun</h1>
        `
    );
    // editor.resize()
    return (
        <div className='w-[100vw] flex justify-center  items-center '>

        <div className='flex mt-3 h-[90vh] ml-3 gap-10'>
                   <AceEditor 
                    mode="html"
                    theme="monokai"
                    name="htmlEditor"
                    onChange={setCode} 
                    fontSize={14}
                    lineHeight={19}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={code}
                    width='40vw'
                    height='90vh'
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        wrap: true,
                        tabSize: 2,
                    }}
                />
           
            <div className='bg-blue-800 w-[40vw] p-4 overflow-auto'>
                {parse(code)} {/* This will render the HTML as React components */}
            </div>
        </div>
        </div>
    );
}

export default JsxRun;
