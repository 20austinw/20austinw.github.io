import { about } from '../../portfolio'
import './Current.css'

const Current = () => {
  const { name, role, description, resume, social } = about
  return (
    <div className='about center'>
      <h2 className='section__title'>Currently Learning</h2>
      <p className='about__desc'>
        <a
          href='http://www.cs.cornell.edu/courses/cs4414/2021fa/'
          className='link link--nav'
        >
          Systems programming
        </a>{' '}
        is constantly challenging me to write clean and efficient code while
        learning C++ in the process. It has been an enjoyable process and I am
        constantly amazed by how much can be expressed through code.
        <br />
        <br />
        Also currently working through different tech stacks that would help me
        in my full stack development endeavors. <br />
        <br />
        Stay tuned for updates on my future projects and adventures!
      </p>
    </div>
  )
}

export default Current
