// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import Bloc from "./Bloc";
import Block from "../../../models/Block";
import BlockType from "../../../models/BlockType";

export default function BlocSelection(props: {onSelect: (block: Block) => void}) {
    const [selectionData, setSelectionData] = useState<BlockType>(
        {
            obstacle: { label: "Obstacle", color: "obstacle", selected: false, id: 1 },
            inter: { label: "Checkpoint", color: "inter", selected: false, id: 4 },
            start: { label: "Start", color: "start", selected: false, id: 3 },
            end: { label: "End", color: "end", selected: false, id: 5 },
            ground: { label: "Ground", color: "ground", selected: false, id: 0 },
            path: { label: "Path", color: "path", selected: false, id: 2 },
            wood: { label: "Wood", color: "wood", selected: false, id: 6 }
        }
    );

    useEffect(() => {
        // Default selection
        onBlockSelect("obstacle");
    }, []);

    const onBlockSelect = (keyInput: string) => {
        let key: keyof BlockType;
        for (key in selectionData) {
            const item = selectionData[key];
            
            if(key === keyInput){
                item.selected = true;
                props.onSelect(item);
            } 
            else item.selected = false;
        }

        setSelectionData({...selectionData});
    };

    return (
        <>
            <p className="text-center text-text text-lg pb-4">Block selection</p>

            <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                    <p className="text-center text-text text-md">Steps block</p>
                    <div className="flex p-2 size-full gap-4 flex-wrap justify-center items-start content-start">
                        <Bloc onClick={() => onBlockSelect("start")} selected={selectionData["start"].selected} color={selectionData["start"].color}>{selectionData["start"].label}</Bloc>
                        <Bloc onClick={() => onBlockSelect("inter")} selected={selectionData["inter"].selected} color={selectionData["inter"].color}>{selectionData["inter"].label}</Bloc>
                        <Bloc onClick={() => onBlockSelect("end")} selected={selectionData["end"].selected} color={selectionData["end"].color}>{selectionData["end"].label}</Bloc>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-center text-text text-md">Classical block</p>
                    <div className="flex p-2 size-full gap-4 flex-wrap justify-center items-start content-start">
                        <Bloc onClick={() => onBlockSelect("ground")} selected={selectionData["ground"].selected} color={selectionData["ground"].color}>{selectionData["ground"].label}</Bloc>
                        <Bloc onClick={() => onBlockSelect("path")} selected={selectionData["path"].selected} color={selectionData["path"].color}>{selectionData["path"].label}</Bloc>
                        <Bloc onClick={() => onBlockSelect("obstacle")} selected={selectionData["obstacle"].selected} color={selectionData["obstacle"].color}>{selectionData["obstacle"].label}</Bloc>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-center text-text text-md">Action block</p>
                    <div className="flex p-2 size-full gap-4 flex-wrap justify-center items-start content-start">
                        <Bloc onClick={() => onBlockSelect("wood")} selected={selectionData["wood"].selected} color={selectionData["wood"].color}>{selectionData["wood"].label}</Bloc>
                    </div>
                </div>
            </div>
        </>
    );
}