import Editor from "@monaco-editor/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Code(props: {onRun: (code: string | undefined) => void}) {
  const [code, setCode] = useState<string | undefined>(`
function main(x, y, iteration, map) { // current state
    if(iteration < 4) {
        return {move: "right"};
    }
    if(iteration < 8) {
        return {move: "down"};
    }
    if(iteration < 12) {
        return {move: "left"};
    }
    if(iteration < 16) {
        return {move: "up"};
    }
}
`);

  const theme = useContext(ThemeContext);

  return (
    <>
      <button onClick={() => props.onRun(code)} className="bg-primary w-full text-text font-bold py-3 px-8 rounded text">Run</button>
      <Editor
        height="100%"
        language="javascript"
        theme={"vs-"+theme}
        value={code}
        onChange={(val) => setCode(val)}
        options={{
          // inlineSuggest: true,
          // fontSize: "16px",
          formatOnType: true,
          // autoClosingBrackets: true,        
          minimap: { scale: 2 }
        }}
      />
    </>
  );
}
export default Code;