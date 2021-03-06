import React from 'react';

const Alert = ({type, text}) => {
    return (
        <div className={`alert ${type} mb-3`}>
            {
                text
            }
        </div>
    );
};

export default Alert;