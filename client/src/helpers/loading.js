import React from 'react'
const styleSpinner = {
    width: '3rem',
    height: '3rem',
}
const showLoading = () => (
    <>
    <div className="d-flex align-items-center">
        <strong>Loading...</strong>
    <div className="spinner-border ms-auto" role="status" aria-hidden="true" style={styleSpinner} ></div>
    </div>
    </>
)

export {showLoading};