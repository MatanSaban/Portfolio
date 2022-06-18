import './experience.css'
import ExpDetail from './ExpDetail';
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
    return ( 
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container experience__container'>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'HTML'} state={'Experienced'}/>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'CSS'} state={'Experienced'}/>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'Bootstrap'} state={'Experienced'}/>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'Javascript'} state={'Experienced'}/>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'React'} state={'Experienced'}/>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'PHP'} state={'Experienced'}/>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'Python'} state={'Experienced'}/>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'Nodejs'} state={'Experienced'}/>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'MongoDB'} state={'Experienced'}/>
                        <ExpDetail icon={<BsPatchCheckFill/>} title={'MySQL'} state={'Experienced'}/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Experience;