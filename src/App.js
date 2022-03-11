import React from 'react';
import './App.css';
import ExtLink from './components/ExtLink';
import ProjectPreview from './components/ProjectPreview';

function App()
{
  return (
    < >
      <header>
        <a href="#main-content">Navigatie overslaan</a>
        <nav>
          <ul>
            <li>Projecten</li>
            <li>CV</li>
          </ul>
        </nav>
      </header>
      <main id='main-content'>
        <section title='intro'>
          <img src="" alt="foto van mezelf" />
          <p>Ben Arts</p>
          <p>geen dokter</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, et? Nesciunt nihil, magni labore quidem ullam delectus molestiae eius rem dicta ipsa adipisci perferendis beatae quae sunt saepe quaerat laborum?</p>
        </section>
        <section aria-labelledby='projecten-title'>
          <h2 id='projecten-title'>Projecten</h2>
          <ProjectPreview title={"Scouts Alowis Site"} beschrijving={"Een site die ik heb gemaakt voor Scouts Sint-Aloysius Aalst"} imgAlt={"screenshot van Alowis Site"} />
        </section>
        <section aria-labelledby='CV-title'>
          <h2 id='CV-title'>CV</h2>

          <button>Download CV</button>
        </section>
      </main>
      <footer>
        <aside>
          <ExtLink href='https://github.com/bengeendokter' >github</ExtLink>
        </aside>
      </footer>

    </>
  );
}

export default App;
