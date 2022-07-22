import React from 'react'

const ErrorMessage = (Msg) => (
    <div className="alert alert-danger" role="alert">
        {Msg}
    </div>
);

const showSuccessMsg = (Msg) => (
    <div className="alert alert-success" role="alert">
        {Msg}
    </div>
)

export {ErrorMessage, showSuccessMsg};

