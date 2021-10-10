const header = {
  homepage: 'https://20austinw.github.io/',
}

const about = {
  name: 'Austin Wu',
  role: '',
  resume:
    'https://drive.google.com/file/d/1IQRauAdUUVo_nrTOQeb9wuX1r6Xg-BV5/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/austin-wu-299b46201/',
    github: 'https://github.com/20austinw',
  },
}

const projects = [
  {
    name: 'OCaml Data Science Library',
    description:
      'A data science and machine learning library inspired by the functionalities of popular Python libraries, such as Numpy and Sklearn. Focuses on easy accessibility for casual users and provides common algorithms such as polynomial regression and k-means clustering. ',
    stack: ['OCaml', 'Jupyter Notebooks'],
    sourceCode: 'https://github.com/20austinw/ocaml-data-science',
  },
  {
    name: 'Carriage',
    description:
      "Dedicated to making Cornell accessible for all students by working with CULift, Cornell' paratransit service for students with disabilities, to provide mobile and web platforms for easy scheduling and tracking. Deploying soon!",
    stack: ['React', 'TypeScript', 'CSS', 'HTML', 'Firebase'],
    sourceCode: 'https://github.com/cornell-dti/carriage-web',
    livePreview: 'https://www.cornelldti.org/projects/carriage',
  },
  {
    name: 'ClubView',
    description:
      'Aims to improve the student experiences in exploring clubs and keeping track of application due dates. Currently under development... Stay tuned!',
    stack: ['React', 'TypeScript', 'CSS', 'HTML', 'Firebase'],
    livePreview: 'https://clubview.netlify.app/',
  },
  {
    name: 'AI Projects',
    description:
      'A series of projects I did in highschool for my Honours Artificial Intelligence class in Taipei American School',
    stack: ['Java'],
    sourceCode:
      'https://drive.google.com/drive/folders/1_5i0Xz1ZMm0t2OSl6AoUiRI0OIugynqr?usp=sharing',
  },
]

const skills = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'C',
  'OCaml',
  'React',
  'Node.js',
]

const contact = {
  email: 'hw424@cornell.edu',
}

export { header, about, projects, skills, contact }
