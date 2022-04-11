import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import ExtLink from './components/ExtLink';
import CV from './components/CV';
import ProjectPreview from './components/ProjectPreview';
import {ReactComponent as GithubSVG} from './components/SVGIcons/github.svg';
import {ReactComponent as LinkedinSVG} from './components/SVGIcons/linkedin.svg';

function App()
{
  const [projecten, setProjecten] = useState({data: []});

  useEffect(() =>
  {
    async function fetchData()
    {
      await fetch("./assets/content/projecten.json").then(response =>
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
        <section aria-label='intro'>
          <img src="./assets/images/PF.jpg" width="300" height="300" alt="foto van mezelf" className='PF' />
          <div className='intro-info'>
            <h1 className='naam'>Ben Arts</h1>
            <p className='geendokter'>geen dokter</p>
            <p className='intro-text'>Hallo ik ben Ben,
              een tweedejaars student bachelor toegepaste informatica en dit is mijn portfolio.
              Hieronder vinden jullie mijn projecten en CV.
            </p>
          </div>
        </section>
        <section aria-labelledby='projecten-title' id='projecten' className='projecten'>
          <h2 id='projecten-title'>Projecten</h2>
          {projecten.data.map((project, i) => <ProjectPreview key={i} {...project} />)}
        </section>
        <section aria-labelledby='CV-title' id='CV' className='CV'>
          <h2 id='CV-title'>CV</h2>
          <CV />
          <a href="./assets/documenten/BenArtsCV.pdf" download="BenArtsCV">Download CV</a>
        </section>
      </main>
      <footer>
        <aside>
          <ExtLink href='https://github.com/bengeendokter' aria-label="GitHub" ><GithubSVG className='svg-icon' /></ExtLink>
          <ExtLink href='https://linkedin.com' aria-label="LinkedIn" ><LinkedinSVG className='svg-icon' /></ExtLink>
        </aside>
        <small>
          Copyright &copy; {new Date().getFullYear()}, Ben Arts<br/> Alle rechten voorbehouden
        </small>
      </footer>

    </>
  );
}

export default App;
