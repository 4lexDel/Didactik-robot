import { useEffect, useState } from "react";
import "./toggleSwitch.css";

function ToggleSwitch(props: {label: string, option1: string, option2: string, onChange: any, defaultValue: boolean, disabled: boolean}) {
    const [optionSelected, setOptionSelected] = useState(1);

    const handleInputChange = (evt: any) => {
        const newVal = optionSelected == 1 ? 2 : 1;
        setOptionSelected(newVal); 
        props.onChange(newVal);
    };

    useEffect(() => {
        const newVal = props.defaultValue ? 1 : 2;
        setOptionSelected(newVal);
    }, [props.defaultValue]);

    return (
        <div className="switch-container p-4 flex justify-center items-center gap-4">
            <p className="text-text text-xl">{props.label}:</p>
            <div className="toggle-switch">
                <input
                    // def={props.defaultValue}
                    checked={optionSelected === 2}
                    disabled={props.disabled}
                    type="checkbox"
                    className="checkbox"
                    name={props.label}
                    id={props.label}
                    onChange={handleInputChange}
                />
                <label className="label" htmlFor={props.label}>
                    <span custom-opt1={props.option1} custom-opt2={props.option2} className={`inner 
                        before:content-[attr(custom-opt2)] 
                        before:text-text
                        dark:before:bg-blue-500 before:bg-blue-400
                        after:content-[attr(custom-opt1)]
                        after:text-text
                        dark:after:bg-red-500 after:bg-red-400`+(props.disabled ? " opacity-70 cursor-not-allowed" : "")} />
                    <span className={"switch bg-text"+(props.disabled ? " opacity-70 cursor-not-allowed" : "")} />
                </label>
            </div>
        </div>
    );
}

export default ToggleSwitch;