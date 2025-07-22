import { useState } from 'react';
import UpdateRecordButton from './UpdateRecordButton';
import { maleWeightClasses, femaleWeightClasses} from '../../static/dataitems/weightclasses';

function RecordUpdater() {
    const [lift, setLift] = useState("");
    const [gender, setGender] = useState("");
    const [weightClass, setWeightClass] = useState("");
    const [equipment, setEquipment] = useState("");
    const [weightClassOptions, setWeightClassOptions] = useState(null);
    const [ageClass, setAgeClass] = useState("");
    const [lifterName, setLifterName] = useState("");
    const [weightLifted, setWeightLifted] = useState("");
    const [recordType, setRecordType] = useState("");
    const [date, setDate] = useState("");
    const [competition, setCompetition] = useState("");

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
            <div className="record_detail">
                <label htmlFor="Name">Name :</label>
                <input type="text" id="Name" value={lifterName} onChange={e => setLifterName(e.target.value)}/>
                <label htmlFor="Lift">Lift :</label>
                <select name="Lift" id="Lift" value={lift} onChange={e => setLift(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Squat">Squat</option>
                    <option value="Bench">Bench</option>
                    <option value="Deadlift">Deadlift</option>
                    <option value="Total">Total</option>
                </select>
                <label htmlFor="AgeClass">Age Class :</label>
                <select name ="AgeClass" id="AgeClass" value={ageClass} onChange={e => setAgeClass(e.target.value)}>
                    <option value="">Select</option>
                    <option value="U16">U16</option>
                    <option value="U18">U18</option>
                    <option value="U23">U23</option>
                    <option value="Open">Open</option>
                    <option value="M1">Masters 1</option>
                    <option value="M2">Masters 2</option>
                    <option value="M3">Masters 3</option>
                    <option value="M4">Masters 4</option>
                </select>
                <label htmlFor="Gender">Gender :</label>
                <select name="Gender" id="Gender" value={gender} onChange={e => handleGenderChange(e.target.value, setGender)}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label htmlFor="WeightClass">Weight Class :</label>
                <select name="WeightClass" id="WeightClass" value={weightClass} onChange={e => setWeightClass(e.target.value)}>
                    <option value="">Select</option>
                    {weightClasses}
                </select>
            </div>
            <div className="record_detail">
                <label htmlFor="WeightLifted">Weight Lifted (kg) :</label>
                <input type="number" id="WeightLifted" value={weightLifted} onChange={e => setWeightLifted(e.target.value)}/>
                <label htmlFor="RecordType">Record Type :</label>
                <select name ="Record Type" id="RecordType" value={recordType} onChange={e => setRecordType(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Full Power">Full Power</option>
                    <option value="Single Lift">Single Lift</option>

                </select>
                <label htmlFor="Date">Date :</label>
                <input type="Date" id="Date" value={date} onChange={e => setDate(e.target.value)} />
                <label htmlFor="Competition">Competition :</label>
                <input type="text" id="Competition" value={competition} onChange={e => setCompetition(e.target.value)} />
                <label htmlFor="Equipment">Equipment :</label>
                <select name="Equipment" id="Equipment" value={equipment} onChange={e => setEquipment(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Sleeves">Sleeves</option>
                    <option value="Single Ply">Single Ply</option>
                </select>
                <div className="record_detail">
                    <UpdateRecordButton lift={lift} gender={gender} weightClass = {weightClass} equipment = {equipment} lifterName= {lifterName} ageClass= {ageClass} weightLifted = {weightLifted} recordType = {recordType} date = {date} competition = {competition}/>
                </div>
                
            </div>
        </div>
    );
}

export default RecordUpdater;