import Editor from "@monaco-editor/react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Code() {
  const code = `
let message = 'Monaco Editor!'
console.log(message);

function test(a: number, b: number): number {
    return a+b;
}
  `;

  const theme = useContext(ThemeContext);

  return (
    <Editor
      height="100%"
      language="typescript"
      theme={"vs-"+theme}
      value={code}
      options={{
        // inlineSuggest: true,
        // fontSize: "16px",
        formatOnType: true,
        // autoClosingBrackets: true,        
        minimap: { scale: 2 }
      }}
    />
  );
}
export default Code;