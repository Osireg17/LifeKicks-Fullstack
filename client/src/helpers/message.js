import React from 'react'

const ErrorMessage = (errorMsg) => (
    <div className="alert alert-danger" role="alert">
        {errorMsg}
    </div>
);

export default ErrorMessage;

