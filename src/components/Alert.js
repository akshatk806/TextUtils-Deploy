import React from 'react'

export default function Alert(props) {
    const capatlize = (text) => {
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height:'40px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capatlize(props.alert.type)}</strong>: {props.alert.message}
            </div>}
        </div>
    )
}
