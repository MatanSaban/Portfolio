import './skills.css'
import SkillDetail from './SkillDetail';
import {BsPatchCheckFill} from 'react-icons/bs'
import { useRef } from 'react';
import {useInViewport} from 'react-in-viewport'


const Skills = (props) => {

    const myRef = useRef();
    const {inViewport} = useInViewport(myRef);

    return ( 
        <section id='skills' ref={myRef}>
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>
            <div className='container skills__container'>
                <div className="skills__frontend">
                    <h3>Frontend Development</h3>
                    <div className="skills__content">
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'HTML'} />
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'CSS'} />
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'Bootstrap'} />
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'Javascript'} />
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'React'} />
                    </div>
                </div>
                <div className="skills__backend">
                    <h3>Backend Development</h3>
                    <div className='skills__content'>
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'PHP'} />
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'Python'} />
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'Nodejs'} />
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'MongoDB'} />
                        <SkillDetail icon={<BsPatchCheckFill/>} title={'MySQL'} />
                    </div>
                </div>
            </div>
            {inViewport && props.checkNav('skills')}
        </section>
     );
}
 
export default Skills;