import React from 'react';
import Tag from './Tag';

export default function ProjectPreview({title, tags, beschrijving, imgSrc, imgAlt, ...rest})
{
    return (
        <div className='project-preview'>
            <img src={imgSrc} alt={imgAlt} className='project-image' />
            <p className='project-title'>{title}</p>
            <Tag>personal project</Tag>
            <p className='project-beschrijving'>{beschrijving}</p>
        </div>
    );
};