import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Code from "../components/Code/Code";
import World from "../components/World/World";
import { useEffect, useState } from "react";
import ToggleSwitch from "../components/Shared/ToggleSwitch/ToggleSwitch";
import { useParams } from "react-router-dom";
import BlocSelection from "../components/World/BlocSelection/BlocSelection";

function IdePage() {
    const [code, setCode] = useState<string | undefined>(undefined);
    let buildNumber = 0;

    const handleCodeRun = (code: string | undefined) => {
        buildNumber++;
        setCode(code+"// Build n°"+buildNumber);
    }

    const [mode, setMode] = useState(1);

    const { category } = useParams();
    
    useEffect(() => {
        console.log(category);
        setMode(1);
    }, [category]);
    
    return (
        <>
            <div>
                <ToggleSwitch
                    label="Mode" 
                    option1="Developer" 
                    option2="Creator" 
                    defaultValue={mode===1}
                    disabled={category !== "sandbox"}
                    onChange={(optionSelected: number) => setMode(optionSelected)}></ToggleSwitch>
            </div>
            <div className="flex-1 ide-page h-96 flex flex-col">
                <PanelGroup direction="horizontal" className="border-2 border-text">
                    <Panel minSize={10}>
                        <PanelGroup direction="vertical">
                            <Panel defaultSize={80} minSize={10}>
                                <World code={code}></World>
                            </Panel>
                            <PanelResizeHandle />
                            <Panel hidden={mode===2} minSize={10}>
                                <center>Console</center>
                            </Panel>
                        </PanelGroup>
                    </Panel>
                    <PanelResizeHandle />
                    {mode===1 ?
                        <Panel defaultSize={35} minSize={10} className="overflow-auto">
                            <center>Editeur</center>
                            <Code onRun={handleCodeRun}></Code>
                        </Panel>
                        :
                        <Panel defaultSize={20} minSize={10}>
                            <BlocSelection></BlocSelection>
                        </Panel>
                    }
                </PanelGroup>
            </div>
        </>
    );
}

export default IdePage;

// Doc: https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels