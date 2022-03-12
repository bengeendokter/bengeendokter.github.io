import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import ExtLink from './components/ExtLink';
import ProjectPreview from './components/ProjectPreview';
function App()
{
  const [projecten, setProjecten] = useState({data: []});

  useEffect(() =>
  {
    async function fetchData()
    {
      await fetch("./assets/projecten/data.json").then(response =>
      {
        response.json().then(projecten =>
        {
          setProjecten(projecten);
        })
      })
    }
    fetchData();
  }, [setProjecten]);


  return (
    < >
      <header>
        <a className='skip-nav' href="#main-content">Navigatie overslaan</a>
        <nav>
          <ul>
            <li><a href="#projecten">Projecten</a></li>
            <li><a href="#CV">CV</a></li>
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
        <section aria-labelledby='projecten-title' id='projecten' className='projecten'>
          <h2 id='projecten-title'>Projecten</h2>
          {projecten.data.map((project, i) => <ProjectPreview key={i} {...project} />)}
        </section>
        <section aria-labelledby='CV-title' id='CV' className='CV'>
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
