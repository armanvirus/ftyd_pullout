import react from 'react';
import {FaClock} from 'react-icons/fa'
import {MdOutlineHourglassFull} from "react-icons/md"


function Quiz(){
    const indeces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return(
        <div className="quiz">
            <div className="quiz-sec">
            {/* quiz for information for mobile view */}
                <div className="quiz-utils">
                 <div className="user-"><img src={require('../imgs/man.png')}/> <span>Abdurrahman Grena</span></div>
                 <div className="ct">
                 <div>JavaScript</div>
                 <div className="time">
                <MdOutlineHourglassFull/>
                30:00
                </div>
                 </div>
                 <div className="index">
                    {indeces.map((index)=>{
                        return(<button key={index}>{index}</button>)
                    })}
                 </div>
                </div>

                {/* quiz information for desktop view */}
                <div className="quiz-utils-desktop">
                 <div className="user-"><img src={require('../imgs/man.png')}/> <span>Abdurrahman Grena</span></div>
                 <div className="ct">
                 <div>JavaScript</div>
                 <div className="time">
                <MdOutlineHourglassFull/>
                30:00
                </div>
                 </div>
                 <div className="index">
                    {indeces.map((index)=>{
                        return(<button key={index}>{index}</button>)
                    })}
                 </div>
                 <div className="progress-bar">
                   <div className="bar"></div>
                 </div>
                </div>

                <div className="quiz-main">
                    <p>manifest.json provides metadata used when 
                        your web app is installed on a
                        user's mobile device or desktop
                    </p>
                    <div className="options">
                        <button><span>A</span>provides metadata</button>
                        <button><span>B</span>mobile device</button>
                        <button><span>C</span>app is installed</button>
                        <button><span>D</span>on auser's mobile</button>
                    </div>
                    <div className='next'>
                        <button>Continue</button>
                    </div>
                </div>
                <div className="quit">
                    <img src={require('../imgs/power.png')}/> Quit
                </div>
            </div>
        </div>
    )
}

export default Quiz;