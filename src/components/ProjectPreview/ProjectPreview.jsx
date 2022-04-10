import React from 'react';
import Tag from '../Tag';
import ProjectPreviewCSS from './ProjectPreview.module.css';
import { ReactComponent as GithubSVG } from '../SVGIcons/github.svg';
import ExtLink from '../ExtLink';

export default function ProjectPreview({title, tags, beschrijving, imgSrc, imgAlt, github, ...rest})
{
    return (
        <div className={ProjectPreviewCSS["main"]}>
            <div className={ProjectPreviewCSS["project-preview"]}>
                <img src={imgSrc} alt={imgAlt} className={ProjectPreviewCSS["project-image"]} />
                <div className="project-info">
                    <p className={ProjectPreviewCSS["project-title"]}>{title}</p>
                    <div className={ProjectPreviewCSS["tags"]}>
                        {github && <ExtLink href={github} ><GithubSVG className='svg-icon' /></ExtLink>}
                              {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}</div>
                    <p className={ProjectPreviewCSS["project-beschrijving"]}>{beschrijving}</p>
                </div>
            </div>
        </div>
    );
};