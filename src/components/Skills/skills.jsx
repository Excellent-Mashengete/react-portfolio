import { Container } from 'react-bootstrap';
import { skillsData } from '../../Data/skills';
import { skillsImage } from '../../Data/skillsImage';
import './skills.css';

function Skills() {
   return (
      <Container fluid className=" skills">
         <h3 className="flex justify-center project-heading mb-4">
            Professional Skillset &  Languages 
         </h3> 
         <div className="flex justify-center"> 
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">  
            {skillsData.map((skill, id) => (
               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" key={id} >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'>        
                        <img className='tech-icons' src={skillsImage(skill)} alt={skill} />
                     </h2>
                     <p>{skill}</p>
                  </div>
               </div>   
            ))}
            </div>
         </div>  
      </Container>
   );
}

export default Skills;

