import Collaboration from './collaboration/collaboration.tsx';
import Development from './development/development.tsx';
import './skills.css';

function Skills() {
  return (
    <>
        <h3 className='title-skills'>Mes compétences</h3>
        <Development />
        <Collaboration />
    </>
  );
}

export default Skills;