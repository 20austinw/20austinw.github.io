const header = {
  homepage: 'https://20austinw.github.io/',
}

const about = {
  name: 'Austin Wu',
  role: '',
  resume:
    'https://drive.google.com/file/d/1v5cBvZgmcIL-BU4cXfoaTowvP7PT4BKN/view?usp=sharing',
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
]

const experiences = [
  {
    name: 'OCaml Data Science Library',
    description:
      'A data science + machine learning library for OCaml that replicates and combines the most commonly used functionality of three famous Python libraries - Numpy, Pandas, Sklearn. Integrates well with the Archimedes library for graphing, and can thus be used for every step of a regular machine learning workflow.',
    stack: ['OCaml', 'Jupyter Notebooks'],
    sourceCode: 'https://github.com/Aryan77/ocaml-data-science-ml',
  },
  {
    name: 'CoursePlan',
    description:
      'A web app that lets Cornell students check what requirements they have satisfied to the completion of their degree and plan future semesters. Currently working on getting high school requirements correctly transferred across multiple colleges and majors, as part of the Cornell DTI project team.',
    stack: ['TypeScript', 'Vue', 'Firebase', ''],
    sourceCode: 'https://github.com/cornell-dti/course-plan',
    livePreview: 'https://courseplan.io/',
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

export { header, about, projects, experiences, skills, contact }
