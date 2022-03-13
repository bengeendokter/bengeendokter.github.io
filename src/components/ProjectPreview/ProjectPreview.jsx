import React from 'react';
import Tag from '../Tag';
import ProjectPreviewCSS from './ProjectPreview.module.css';

export default function ProjectPreview({title, tags, beschrijving, imgSrc, imgAlt, ...rest})
{
    return (
        <div className={ProjectPreviewCSS["project-preview"]}>
            <img src={imgSrc} alt={imgAlt} className={ProjectPreviewCSS["project-image"]} />
            <p className={ProjectPreviewCSS["project-title"]}>{title}</p>
            <div className={ProjectPreviewCSS["tags"]}>{tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}</div>
            <p className={ProjectPreviewCSS["project-beschrijving"]}>{beschrijving}</p>
        </div>
    );
};