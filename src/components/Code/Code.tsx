import Editor from "@monaco-editor/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Code(props: {onRun: (code: string | undefined) => void, worldState: string}) {
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

  const onRunClick = () => {
    if(props.worldState === "stopped") props.onRun(code);
  }

  return (
    <>
      <button onClick={onRunClick} className={`${props.worldState === "running" ? "bg-primary" : "bg-green-600"} w-full text-text font-bold py-3 px-8 mb-4 rounded text`}>
        {props.worldState === "running" ?
          "Running..."
          :
          "Run"
        }
      </button>
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
          minimap: { scale: 1 }
        }}
      />
    </>
  );
}
export default Code;