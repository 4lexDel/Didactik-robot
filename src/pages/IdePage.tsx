import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Code from "../components/Code/Code";
import World from "../components/World/World";
import { useEffect, useState } from "react";
import ToggleSwitch from "../components/Shared/ToggleSwitch/ToggleSwitch";
import { useParams } from "react-router-dom";
import BlocSelection from "../components/World/BlocSelection/BlocSelection";
import Block from "../models/Block";

function IdePage() {
    const [code, setCode] = useState<string | undefined>(undefined);
    const [mode, setMode] = useState(1);
    const [blockSelected, setBlockSelected] = useState<Block | null>();
    const [worldState, setWorldState] = useState("stopped");

    let buildNumber = 0;

    const handleCodeRun = (code: string | undefined) => {
        buildNumber++;
        setCode(code+"// Build n°"+buildNumber);
    }

    const { category } = useParams();
    
    useEffect(() => {
        setMode(1);
    }, [category]);

    const onBlockSelected = (block: Block) => {
        setBlockSelected(block);
    }
    
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
                                <World code={code} editBlock={blockSelected} readonly={mode === 1} onStateChange={(state: string) => setWorldState(state)}></World>
                            </Panel>
                            {mode === 1 &&
                                <>
                                    <PanelResizeHandle />
                                    <Panel minSize={10}>
                                        <center>Console</center>
                                    </Panel>
                                </>
                            }
                        </PanelGroup>
                    </Panel>
                    <PanelResizeHandle className="overflow-auto w-1 z-index-1"/>
                    {mode===1 ?
                        <Panel defaultSize={30} minSize={10} className="overflow-auto">
                            <center>Editeur</center>
                            <Code onRun={handleCodeRun} worldState={worldState}></Code>
                        </Panel>
                        :
                        <Panel defaultSize={30} minSize={10}>
                            <BlocSelection onSelect={onBlockSelected}></BlocSelection>
                        </Panel>
                    }
                </PanelGroup>
            </div>
        </>
    );
}

export default IdePage;

// Doc: https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels