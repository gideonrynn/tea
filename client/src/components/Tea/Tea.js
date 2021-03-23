import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Tea.css"
import TeaAPI from "../../utils/TeaAPI"

const Tea = () => {

    const [newTea, setNewTea] = useState();
    // function addNewTea() {
    //     console.log("Plus was clicked");
    // }

    // function removeTea() {
    //     console.log("Minus was clicked");
    // }

    console.log(newTea);

    const setTeaObject = (event) => {
        let fieldName = event.target.name
        let fieldValue = event.target.value
        setNewTea({...newTea, [fieldName]: fieldValue})
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log("This has been clicked!")
        console.log(event);

        TeaAPI.addTea({
            name: newTea.name,
            // lastBrewed: newTea.lastBrewed,
            type: newTea.type,
            packetType: newTea.packettype,
            timeOfDay: newTea.timeofday,
            rank: newTea.rank,
            description: newTea.description
        })

    }


    return (
        <div>
            {/* <h1>Tea</h1> */}
            {/* <div>
                <FaPlus 
                className="plusSign" 
                onClick={addNewTea} />
            </div> */}
            {/* <div>
            <FaMinus 
                className="plusSign" 
                onClick={removeTea} />
            </div> */}
            <div>
                <form>
                    <fieldset>  
                        <legend> Add New Tea: </legend>
                        <label> Name: </label>
                            <input type="text" name="name" onChange={setTeaObject}/><br/>
                        <label> Type: </label>
                        <input list="type" name="type" onChange={setTeaObject} />
                            <datalist id="type">
                                <option value="chai"/>
                                <option value="black"/>
                                <option value="green"/>
                                <option value="herbal"/>
                                <option value="oolong"/>
                                <option value="white"/>
                            </datalist><br/>
                        <label> Packet Type: </label>
                            <select type="text" name="packettype" onChange={setTeaObject}>
                                <option value="bags">bags</option>
                                <option value="looseleaf">loose leaf</option>
                            </select><br/>
                        <label> Time of Day: </label>
                            <select type="text" name="timeofday" onChange={setTeaObject}>
                                <option value="nomatter">no matter</option>
                                <option value="morning">morning</option>
                                <option value="evening">evening</option>
                                <option value="night">night</option>
                            </select><br/>
                        <label> Rank: </label>
                            <select type="text" name="rank" onChange={setTeaObject}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select><br/>
                        <label> Description: </label>
                            <textarea name="description" rows="10" cols="25" onChange={setTeaObject}/><br/>
                        <input type="submit" value="Submit" onClick={submitForm} />
                    </fieldset>
                </form>
            </div>
            
        </div>
    )
}

export default Tea;
