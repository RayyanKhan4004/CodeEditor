import JavaScriptRun from "./components/JavaScriptRun"
import JsxRun from "./components/JsxRun"
import { useState } from "react"
function App() {
 const [editor ,setEditor] = useState(`html`)

  return (

    <>
    <div className="w-[100%] flex justify-center items-center" >

    <div className=" flex text-center  gap-9 text-white uppercase text-3xl cursor-pointer  ">
      <h1 className="hover:text-slate-400" onClick={   ()=> setEditor(`html`)} >jsx run</h1>
      <h1 className="hover:text-slate-400" onClick={   ()=> setEditor(`js`)} >JavaScript</h1>
      <h1 className="hover:text-slate-400" onClick={   ()=> setEditor(`html`)} >jsx run</h1>

    </div>
    </div>

    {/* fff */}
    <div>
{
  editor === `html` && <JsxRun />


}
{
    editor === `js` && <JavaScriptRun />
}
    {/* <JsxRun/> */}
    </div>
    </>
  )
}

export default App
