import React from 'react';

export default function Tag({children, ...rest})
{
    return (
        <div className='tag'>
            {children}
        </div>
    );
};