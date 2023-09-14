import Dropdown from "@/components/Dropdown";
import {useState} from "react";
import TextBox from "@/components/TextBox";
import {combinedType, enteredText, option} from "@/Types";


export default function Home() {
    const dropdownOption: string [] = [
        "City1",
        "City2",
        "City3"
    ]

    const [combinedData, setCombinedData] = useState<combinedType>({
        option: "",
        enteredText: ""
    });

    return (
        <>
            <Dropdown DropdownOptions={dropdownOption} onOptionChange={(option) => {
                setCombinedData(prevState => {
                    return {
                        ...prevState,
                        option
                    }
                })
            }}/>
            <TextBox onTextValueChange={(enteredText) => {
                setCombinedData(prevState => {
                    return {
                        ...prevState,
                        enteredText
                    }
                })
            }}/>
            <h1>selected option : {combinedData.option}</h1>
            <h1> entered Text: {combinedData.enteredText}</h1>
        </>
    )
}
