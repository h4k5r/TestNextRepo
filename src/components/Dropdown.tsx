import React, {useState} from "react";
import {DropdownProps} from "@/Types";



const Dropdown = ({DropdownOptions, onOptionChange}: DropdownProps) => {
    // Define a state variable to track the selected option
    const [selectedOption, setSelectedOption] = useState('');

    // Function to handle changes in the selected option
    const handleOptionChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        onOptionChange(event.target.value)
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                {
                    DropdownOptions.map((option, index) => {
                        return <option value={option} key={index}>{option}</option>;
                    })
                }
            </select>
        </div>
    );
}

export default Dropdown;