import "./toggleSwitch.css";

function ToggleSwitch(props: {label: string, option1: string, option2: string}) {
    return (
        <div className="container p-4 flex justify-center items-center gap-4">
            <p className="text-text text-xl">{props.label}:</p>
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="checkbox"
                    name={props.label}
                    id={props.label}
                />
                <label className="label" htmlFor={props.label}>
                    <span custom-opt1={props.option1} custom-opt2={props.option2} className="inner 
                        before:content-[attr(custom-opt1)] 
                        before:text-text
                        dark:before:bg-blue-500 before:bg-blue-400
                        after:content-[attr(custom-opt2)]
                        after:text-text
                        dark:after:bg-red-500 after:bg-red-400" />
                    <span className="switch bg-text" />
                </label>
            </div>
        </div>
    );
}

export default ToggleSwitch;