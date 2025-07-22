import React, { useState } from 'react';
import { maleWeightClasses, femaleWeightClasses} from '../../static/dataitems/weightclasses';
import GetRecordsButton from './GetRecordsButton';


function RecordSelector(props) {
    const [lift, setLift] = useState("");
    const [gender, setGender] = useState("");
    const [weightClass, setWeightClass] = useState("");
    const [equipment, setEquipment] = useState("");
    const [weightClassOptions, setWeightClassOptions] = useState(null);

    function handleGenderChange(genderval, gendervalsetter) {
        gendervalsetter(genderval);
        setWeightClass("");
        if (genderval === "Male"){
            setWeightClassOptions(maleWeightClasses);
        } else if (genderval === "Female"){
            setWeightClassOptions(femaleWeightClasses);
        } else {
            setWeightClassOptions(null);
        }
    }

    let weightClasses
    if (weightClassOptions === null) {
       
    }  else {
        weightClasses = weightClassOptions.map(weightClassOption => {
        return (
            <option value={weightClassOption}>{weightClassOption}</option>
        )
        });
    }

    return (
        <div className="record_selector">
            <label htmlFor='Lift'>Lift :</label>
            <select name="Lift" id="Lift" value={lift} onChange={e => setLift(e.target.value)}>
                <option value="">Select</option>
                <option value="Squat">Squat</option>
                <option value="Bench">Bench</option>
                <option value="Deadlift">Deadlift</option>
                <option value="Total">Total</option>
            </select>
            <label htmlFor='Gender'>Gender :</label>
            <select name="Gender" id="Gender" value={gender} onChange={e => handleGenderChange(e.target.value, setGender)}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <label htmlFor='WeightClass'>Weight Class :</label>
            <select name="WeightClass" id="WeightClass" value={weightClass} onChange={e => setWeightClass(e.target.value)}>
                <option value="">Select</option>
                {weightClasses}
            </select>
            <label htmlFor='Equipment'>Equipment :</label>
            <select name="Equipment" id="Equipment" value={equipment} onChange={e => setEquipment(e.target.value)}>
                <option value="">Select</option>
                <option value="Sleeves">Sleeves</option>
                <option value="Single Ply">Single Ply</option>
            </select>
            <GetRecordsButton lift={lift} gender={gender} weightClass = {weightClass} equipment = {equipment} RecordSetter={props.RecordSetter} />
        </div>
    );
}

export default RecordSelector;
