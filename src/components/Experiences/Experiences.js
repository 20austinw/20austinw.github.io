import uniqid from 'uniqid'
import './Experiences.css'

const Experiences = () => (
  <section id='experience' className='section__experience'>
    <h2 className='section__title'>experiences</h2>
    <div className='history-tl-container'>
      <ul className='tl'>
        <li className='tl-item' ng-repeat='item in retailer_history'>
          <div className='timestamp'>
            <b>Oct 2021 - Present</b>
            <br />
            Ithaca, New York
            <br />
          </div>
          <div className='item-title'>
            <a href='https://www.cornelldti.org/' className='link link--nav'>
              Cornell Design & Tech Initiative
            </a>
            <br />
            -- Full Stack Developer --
          </div>
          <div className='item-detail'>
            <br />- Currently working on{' '}
            <a
              href='https://www.cornelldti.org/projects/carriage'
              className='link link--nav'
            >
              Carriage
            </a>{' '}
            and{' '}
            <a href='https://clubview.netlify.app/' className='link link--nav'>
              ClubView
            </a>
          </div>
        </li>
        <li className='tl-item' ng-repeat='item in retailer_history'>
          <div className='timestamp'>
            <b>Aug 2021 - Present</b>
            <br />
            Ithaca, NY
            <br />
          </div>
          <div className='item-title'>
            <a
              href='https://classes.cornell.edu/browse/roster/FA21/class/CS/2800'
              className='link link--nav'
            >
              Cornell University
            </a>
            <br /> -- Discrete Structures Teaching Assistant (CS 2800) --
          </div>
          <div className='item-detail'>
            <br />
            - Worked with a class of 430+ students
            <br />
            - Led discussions that help students better understand the material
            <br />- Developed skills in teaching through office hours and
            additional help throughout the semester
            <br />
          </div>
        </li>
        <li className='tl-item' ng-repeat='item in retailer_history'>
          <div className='timestamp'>
            <b>Dec 2020 - Mar 2021</b>
            <br />
            Taipei, Taiwan
            <br />
          </div>
          <div className='item-title'>
            <a href='https://pelith.com/en/' className='link link--nav'>
              Pelith
            </a>
            <br /> -- Full Stack Development Intern --
          </div>
          <div className='item-detail'>
            <br />- Worked on developing the prototype of{' '}
            <a href='https://hakka.finance/' className='link link--nav'>
              Hakka Finance
            </a>
            <br />- Developed skills in React and Typescript for the frontend
            and Python for backend
            <br />- Learned about blockchain technology and wrote basic
            contracts
            <br />- Gained experience in working in a startup environment
          </div>
        </li>
      </ul>
    </div>
  </section>
)

export default Experiences
