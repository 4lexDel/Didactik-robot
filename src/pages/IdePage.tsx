import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Code from "../components/Code/Code";
import World from "../components/World/World";

function IdePage() {
    return (
        <div className="flex-1 ide-page h-96 flex flex-col">
            <PanelGroup direction="horizontal" className="border-2 border-text">
                <Panel defaultSize={20} minSize={10}>
                    <center>Environement</center>
                </Panel>
                <PanelResizeHandle className="border w-1 border-text"/>
                <Panel minSize={10}>
                    <PanelGroup direction="vertical">
                        <Panel defaultSize={80} minSize={10}>
                            <World></World>
                        </Panel>
                        <PanelResizeHandle className="border h-1 border-text" />
                        <Panel minSize={10}>
                            <center>Console</center>
                        </Panel>
                    </PanelGroup>
                </Panel>
                <PanelResizeHandle className="border w-1 border-text" />
                <Panel minSize={10} className="overflow-auto">
                    <center>Editeur</center>
                    <Code></Code>
                </Panel>
            </PanelGroup>
        </div>
    );
}

export default IdePage;

// Doc: https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels