export type option = string
export type enteredText = string

export type combinedType = {
    option:option,
    enteredText:enteredText
}

export type textBoxPropType = {
    onTextValueChange: (enteredText:enteredText) => void
}

export type DropdownProps = {
    DropdownOptions: string[]
    onOptionChange: (selectedOption: option) => void
}