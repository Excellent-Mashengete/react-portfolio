import { Container } from 'react-bootstrap';
import { DiJavascript1, DiNodejs, DiMongodb, DiGit, DiDjango, DiPostgresql } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiAngular, SiNestjs, SiTypescript, SiCplusplus, SiExpress} from "react-icons/si";
import pythonIcon from "../../assets/python-icon.svg";
import './skills.css';

function Skills() {
    return (
        <Container fluid className="mb-5 skills">
            <h3 className="flex justify-center project-heading mb-4">
                Professional Skillset &  Languages 
            </h3> 
            <div className="flex justify-center"> 
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-8">
                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                        <SiCplusplus style={{color: "blue"}} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiDjango style={{color: "rgb(0, 90, 48)"}} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiNodejs style={{color: "rgb(0, 90, 48)"}} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <SiExpress style={{color: "black"}} /> <DiJavascript1 style={{color: "black", background: "yellow"}} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiJavascript1 style={{color: "black", background: "yellow"}} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <SiNestjs style={{color: "red" }} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <SiTypescript style={{color: "blue" }}  />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <SiAngular style={{color: "red" }} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiGit style={{color: "red" }} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiPostgresql style={{color: "white", fill:"blue" }}/>
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiMongodb style={{color: "green" }} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                        <img src={pythonIcon} className="img-fluid -ml-8 mt-1" alt="avatar" />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <AiFillHtml5 style={{color: "orange" }} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <IoLogoCss3 style={{color: "blue" }} />
                    </div>
                </div>
            </div>  
        </Container>
    );
}

export default Skills;