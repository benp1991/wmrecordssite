import Squat from '../../static/images/FlipboxImages/Squat.png'
import Bench from '../../static/images/FlipboxImages/Bench.png'
import Deadlift from '../../static/images/FlipboxImages/Deadlift.png'

export default function WhatIsPowerlifting() {
    
    return (
        <div className="HomePage-WhatIsPL">
            <div className="HomePage-WhatIsPL-Inner">
                <div>
                    What is <strong>Powerlifting</strong>
                </div>
                <div className="FlipboxSection">
                    <div className="FlipboxContainer">
                        <div className="FlipboxFront">
                            <div>
                                <img className="FlipboxImage" src={Squat}></img>
                            </div>
                            <div>Squat</div>
                        </div>
                        <div className="FlipboxBack">
                            
                        </div>
                    </div>
                    <div className="FlipboxContainer">
                        <div className="FlipboxFront">
                            <div>
                                <img className="FlipboxImage" src={Bench}></img>
                            </div>
                            <div>Bench</div>
                        </div>
                        <div className="FlipboxBack">
                            
                        </div>
                    </div>
                    <div className="FlipboxContainer">
                        <div>
                                <img className="FlipboxImage" src={Deadlift}></img>
                            </div>
                            <div>Deadlift</div>
                        <div className="FlipboxBack">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}