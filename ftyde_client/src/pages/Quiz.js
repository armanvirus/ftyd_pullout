import react from 'react';
import {FaClock} from 'react-icons/fa'
import {MdOutlineHourglassFull} from "react-icons/md"

function Quiz(){
    return(
        <div className="quiz">
            <div className="quiz-sec">
                <div className="quiz-utils">
                <div className="time">
                <FaClock/>
                <MdOutlineHourglassFull/>
                30:00
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
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz;