import React from 'react'


export const InputControl = ({ input, meta, component, ...custom }) => {
    let hasError = meta.touched && meta.error
    let renderInput = (
        <input
            // style={{ color: 'white !important' }}
            {...input}
            {...custom}
            error={meta.error && meta.touched}
        />
    )
    return (
        <div>
            {renderInput}
    {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const TextFieldControl = ({ input, meta, component, ...custom }) => {
    let renderTextField = (
        <textarea
            // style={{ color: 'white !important' }}
            {...input}
            {...custom}
            error={meta.error && meta.touched}
        />
    )
    return (
        <div>
            {renderTextField}
    {hasError && <span>{meta.error}</span>}

        </div>
    )
}
export const CheckboxControl = ({ input}) => {
    let renderCheckbox = (
        <input
            type="checkbox"
            checked={input.value ? true : false}
            onChange={input.onChange}
        />
    )
    return (
        <div>
            {renderCheckbox}
        </div>
    )
}
export const SelectorControl = ({ input, children}) => {
    
    let renderSelector = (
        <select {...input}>
            {children}
        </select>
    )
    return (
        <div>
            {renderSelector}
    {hasError && <span>{meta.error}</span>}

        </div>
    )
}