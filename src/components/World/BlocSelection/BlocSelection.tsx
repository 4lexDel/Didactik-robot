// import { useEffect, useState } from "react";

import Bloc from "./Bloc";

export default function BlocSelection(props: {}) {
    const selectionData = [
        {label: "Obstacle"},
        {label: ""}
    ];

    return (
        <>
            <p className="text-center text-text text-lg pb-4">Block selection</p>

            <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                    <p className="text-center text-text text-md">Steps block</p>
                    <div className="flex p-2 size-full gap-4 flex-wrap justify-center items-start content-start">
                        <Bloc selected={true} color="start">Start</Bloc>
                        <Bloc selected={false} color="inter">Checkpoint</Bloc>
                        <Bloc selected={false} color="end">End</Bloc>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-center text-text text-md">Classical block</p>
                    <div className="flex p-2 size-full gap-4 flex-wrap justify-center items-start content-start">
                    <Bloc selected={false} color="ground">Ground</Bloc>
                    <Bloc selected={false} color="path">Path</Bloc>
                    </div>
                </div>
            </div>
        </>
    );
}