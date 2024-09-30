import Editor from "@monaco-editor/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Code(props: {onRun: (code: string | undefined) => void}) {
  const [code, setCode] = useState<string | undefined>(
`function* main(initX, initY, map) {
    for (let i = 0; i < 4; i++) {
        yield {move: "right"};
    }

    for (let i = 0; i < 4; i++) {
        yield {move: "down"};
    }

    for (let i = 0; i < 4; i++) {
        yield {move: "left"};
    }

    for (let i = 0; i < 4; i++) {
        yield {move: "up"};
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