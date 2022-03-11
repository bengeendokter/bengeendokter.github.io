import React from 'react';

export default function Tag({children, ...rest})
{
    return (
        <span className='tag'>
            {children}
        </span>
    );
};