import { Container } from 'react-bootstrap';
import { DiJavascript1, DiNodejs, DiMongodb, DiGit, DiDjango, DiPostgresql } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiAngular, SiNestjs, SiTypescript, SiExpress, SiMysql, SiPython} from "react-icons/si";
import './skills.css';

function Skills() {
   return (
      <Container fluid className=" skills">
         <h3 className="flex justify-center project-heading mb-4">
            Professional Skillset &  Languages 
         </h3> 
         <div className="flex justify-center"> 
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">  
                
               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><DiNodejs style={{color: "rgb(0, 90, 48)"}} /></h2>
                     <p>NodeJs</p>
                  </div>
               </div>   

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><SiExpress style={{color: "black"}} /><DiJavascript1 style={{color: "black", background: "yellow"}} /></h2>
                     <p>ExpressJs</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><DiDjango style={{color: "rgb(0, 90, 48)"}} /></h2>
                     <p>Django</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><SiPython style={{color: "rgb(75, 139, 190) rgb(255, 232, 115)"}} /></h2>
                     <p>Python</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><SiNestjs style={{color: "red" }} /></h2>
                     <p>NestJs</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><AiFillHtml5 style={{color: "orange" }} /></h2>
                     <p>HTML</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><IoLogoCss3 style={{color: "blue" }} /></h2>
                     <p>CSS</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><DiJavascript1 style={{color: "black", background: "yellow"}} /></h2>
                     <p>JavaScript</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><SiAngular style={{color: "red" }} /></h2>
                     <p>Angular 2</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><SiTypescript style={{color: "blue" }}  /></h2>
                     <p>Typecript</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><DiPostgresql style={{color: "white", fill:"blue" }}/></h2>
                     <p>PostgreSQL</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><SiMysql style={{color: "#00758f#f29111"}} /></h2>
                     <p>MySQL</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><DiMongodb style={{color: "green" }} /></h2>
                     <p>MongoDB</p>
                  </div>
               </div> 

               <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                  <div className="card-body items-center text-center">
                     <h2 className='tech-icons'><DiGit style={{color: "red" }} /></h2>
                     <p>Git</p>
                  </div>
               </div> 
            </div>
         </div>  
      </Container>
   );
}

export default Skills;
