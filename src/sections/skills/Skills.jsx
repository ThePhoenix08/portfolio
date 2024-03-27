import React from 'react'
import SkillBox from '../../components/SkillBox/SkillBox'
import { FaHtml5, FaCss3Alt, FaSass, FaNodeJs, FaPython, FaGitAlt, FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import PythonLogo from '../../components/python-logo/PythonLogo';
import JsLogo from '../../components/jsLogo/JsLogo';
import './skills.scss';

const Skills = () => {
  return (
    <section id="skills">
      <p>Explore My</p>
      <p className="heading">Skills</p>
      <div className="container">
        <div className="skillGroup">
          <p className='skillGrp-title'>Web Development</p>
          <div className='skill-flex'>
            <SkillBox color="#f06529" component={<FaHtml5/>} title='HTML' status='Experienced'/>
            <SkillBox color="#2965f1" component={<FaCss3Alt/>} title='CSS' status='Experienced'/>
            <SkillBox color="#cc6699" component={<FaSass />} title='SASS' status='Basic'/>
            <SkillBox color="#f0db4f" component={<JsLogo />} title='Javascript' status='Experienced'/>
            <SkillBox color="#3c873a" component={<FaNodeJs />} title='Node JS' status='Basic'/>
            <SkillBox color="#61DBFB" component={<FaReact />} title='React' status='Experienced'/>
          </div>
        </div>
        <div className="skillGroup">
          <p className='skillGrp-title'>Other Skills</p>
          <div className='skill-flex'>
            <SkillBox color="#044F88" component={<SiCplusplus/>} title='C++' status='Intermediate'/>
            <SkillBox color="#306998" component={<PythonLogo/>} title='Python' status='Intermediate'/>
            <SkillBox color="#f34f29" component={<FaGitAlt/>} title='Git' status='Basic'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills