import React from 'react';
import CVCSS from './CV.module.css';

export default function CV({children, ...rest})
{
    return (
        <article className={CVCSS.main}>
            <section title='naam'>
                <h3>Ben Arts</h3>
            </section>
            <section aria-labelledby='profiel-title'>
                <h4 id='profiel-title'>profiel</h4>
                <p>tags/kernwoorden</p>

                <p>url LinkedIn-profiel</p>
                <p>+32 400 00 00 00</p>
                <p>ben.arts.mail@gmail.com</p>
                <p>27/03/2000</p>
                <p>Straatnaam 0, 0000 Stad</p>
            </section>
            <section aria-labelledby='vaardigheden-title'>
                <h4 id='vaardigheden-title'>vaardigheden</h4>
                <p>programeertalen</p>
                <p>talen</p>
            </section>
            <section aria-labelledby='werkervaring-title'>
                <h4 id='werkervaring-title'>werkervaring</h4>
                <p>aviapartner</p>
            </section>
            <section aria-labelledby='opleiding-title'>
                <h4 id='opleiding-title'>opleiding</h4>
                <p>hogent toeg. inf.</p>
            </section>
            <section aria-labelledby='hobbies-title'>
                <h4 id='hobbies-title'>hobbies</h4>
            </section>
        </article>
    );
};