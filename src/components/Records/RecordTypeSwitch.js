import React from 'react';

export default function RecordsTypeSwitch({typesetter}) {
    return (
        <div className="Records-Page">
            <button onClick={() => typesetter('Male')}>Male</button>
            <button onClick={() => typesetter('Female')}>Female</button>
        </div>
    );
}