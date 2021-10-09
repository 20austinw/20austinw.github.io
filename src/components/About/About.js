import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>
        &#128075; I am Austin, a sophomore CS student at Cornell University,
        currently working as a full stack developer @{' '}
        <a href='https://www.cornelldti.org/' className='link link--nav'>
          Cornell DTI
        </a>{' '}
        on{' '}
        <a href='https://clubview.netlify.app/' className='link link--nav'>
          ClubView
        </a>{' '}
        and{' '}
        <a
          href='https://www.cornelldti.org/projects/carriage'
          className='link link--nav'
        >
          Carriage
        </a>
        .<br /> <br />I am excited to learn about all things CS and tech
        related. I enjoy nature and absolutely love animals.
        <br /> <br />
        <b>
          {' '}
          I am currently looking for software engineering internships for Summer
          2022! Please reach out to me through my{' '}
          <a href='https://www.cornelldti.org/' className='link link--nav'>
            email
          </a>
          !{' '}
        </b>{' '}
        <br /> <br />
      </p>

      <div className='about__contact center'>
        <a href={resume}>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>

        <a href={social.github}>
          <span type='button' className='btn btn--outline'>
            Github
          </span>
        </a>

        <a href={social.linkedin}>
          <span type='button' className='btn btn--outline'>
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  )
}

export default About
