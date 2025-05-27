import { useState } from 'react';
import { maleWeightClasses, femaleWeightClasses} from '../../dataitems/dataitems';

export default function RecordsTypeSwitch({genderType, typeSetter, weightClass, classSetter, equipment, setEquipment}) {
    const [weightClassOptions, setWeightClassOptions] = useState(null);

    function handleGenderChange(genderVal, genderValSetter, weightClassSetter) {
            genderValSetter(genderVal);
            weightClassSetter("");
            if (genderVal === "Male"){
                setWeightClassOptions(maleWeightClasses);
            } else if (genderVal === "Female"){
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
        <div className="Records-Page">
            <p>              
                <label htmlFor='Gender'>Gender :</label>
                <select name="Gender" id="Gender" value={genderType} onChange={e => handleGenderChange(e.target.value, typeSetter, classSetter)}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label htmlFor='WeightClass'>Weight Class :</label>
                <select name="WeightClass" id="WeightClass" value={weightClass} onChange={e => classSetter(e.target.value)}>
                    <option value="">Select</option>
                    {weightClasses}
                </select>
                <label htmlFor='Equipment'>Equipment :</label>
            <select name="Equipment" id="Equipment" value={equipment} onChange={e => setEquipment(e.target.value)}>
                <option value="">Select</option>
                <option value="Sleeves">Classic</option>
                <option value="Single Ply">Equipped</option>
            </select>
            </p>
            
        </div>
    );
}