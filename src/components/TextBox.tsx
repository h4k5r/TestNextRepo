import React, {useState} from 'react';
import {textBoxPropType} from "@/Types";


const TextBox = ({onTextValueChange}: textBoxPropType) => {
    // Define a state variable to store the textbox value
    const [inputValue, setInputValue] = useState<string>('');

    // Function to handle changes in the textbox value
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTextValueChange(event.target.value)
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
            />
        </div>
    );
}

export default TextBox;
