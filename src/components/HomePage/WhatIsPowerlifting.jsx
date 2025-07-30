import SquatImg from '../../static/images/FlipboxImages/Squat.png'
import BenchImg from '../../static/images/FlipboxImages/Bench.png'
import DeadliftImg from '../../static/images/FlipboxImages/Deadlift.png'
import FlipboxCard from './FlipboxCard';

export default function WhatIsPowerlifting() {
    const squatText = "Lifters get 3 attempts to lift the heaviest weight possible. The barbell is placed on the upper back, and the lifter must lower their body until their hips are below their knees before standing back up.";
    const benchText = "Lifters get 3 attempts to lift the heaviest weight possible. The barbell is lowered to the chest and then pressed back up until the arms are fully extended.";   
    const deadliftText = "Lifters get 3 attempts to lift the heaviest weight possible. The barbell is placed on the floor, and the lifter must lift it to a standing position with their hips and knees fully extended.";

    return (
        <div className="HomePage-WhatIsPL">
            <div className="HomePage-WhatIsPL-Inner">
                <div>
                    What is <strong>Powerlifting</strong>
                </div>
                <div className="FlipboxSection">
                    <FlipboxCard cardImage={SquatImg} cardText={squatText} cardTitle='Squat' flipOnHover='true' />
                    <FlipboxCard cardImage={BenchImg} cardText={benchText} cardTitle='Bench' flipOnHover='true' />  
                    <FlipboxCard cardImage={DeadliftImg} cardText={deadliftText} cardTitle='Deadlift' flipOnHover='true' />
                </div>
            </div>
        </div>
    );
}