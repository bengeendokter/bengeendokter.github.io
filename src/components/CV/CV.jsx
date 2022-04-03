import React from 'react';
import CVCSS from './CV.module.css';

export default function CV({children, ...rest})
{
    return (
        <article className={CVCSS.main}>
            <section title='naam'>
                <p>Ben Arts</p>
            </section>
            <section aria-labelledby='profiel-title'>
                <h3 id='profiel-title'>profiel</h3>
                <p>tags/kernwoorden</p>

                <p>url LinkedIn-profiel</p>
                <p>+32 474 53 04 30</p>
                <p>ben.arts.mail@gmail.com</p>
                <p>27/03/2000</p>
                <p>Ledebaan 168, 9300 Aalst</p>
            </section>
            <section aria-labelledby='vaardigheden-title'>
                <h3 id='vaardigheden-title'>vaardigheden</h3>
                <p>programeertalen</p>
                <p>talen</p>
            </section>
            <section aria-labelledby='werkervaring-title'>
                <h3 id='werkervaring-title'>werkervaring</h3>
                <p>aviapartner</p>
            </section>
            <section aria-labelledby='opleiding-title'>
                <h3 id='opleiding-title'>opleiding</h3>
                <p>hogent toeg. inf.</p>
            </section>
            <section aria-labelledby='hobbies-title'>
                <h3 id='hobbies-title'>hobbies</h3>
            </section>
        </article>
    );
};