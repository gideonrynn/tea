import React, { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
import "./AddNewTea.css"
import TeaAPI from "../../utils/TeaAPI"

const AddNewTea = () => {

    const [newTea, setNewTea] = useState({
        name: "",
        type: "",
        packettype: "",
        timeofday: "",
        rank: "",
        descriptionShort: "",
        descriptionFull: "",
        background: "",
        provider: "",
        website: "",
    });

    console.log(newTea);

    const setTeaObject = (event) => {
        let fieldName = event.target.name
        let fieldValue = event.target.value
        setNewTea({...newTea, [fieldName]: fieldValue})
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log("Submit has been clicked!")
        console.log(event);

        if(newTea.name !== null && newTea.name !== 0 && newTea.name !== "") {
            TeaAPI.addTea({
                name: newTea.name,
                // lastBrewed: newTea.lastBrewed,
                type: newTea.type,
                packetType: newTea.packettype,
                timeOfDay: newTea.timeofday,
                rank: newTea.rank,
                descriptionShort: newTea.descriptionShort,
                descriptionFull: newTea.descriptionFull,
                background: newTea.background,
                provider: newTea.provider,
                website: newTea.website
            }).then(
                setNewTea({
                    name: "",
                    type: "",
                    packettype: "",
                    timeofday: "",
                    rank: "",
                    descriptionShort: "",
                    descriptionFull: "",
                    background: "",
                    provider: "",
                    website: "",
                })
            )
        }

    }


    return (
        <div className="new-tea-container">
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
                        <label> Name:  </label>
                            <input type="text" name="name" value={newTea.name} onChange={setTeaObject}/><br/>
                        <label> Type: </label>
                            <input list="type" name="type" value={newTea.type} onChange={setTeaObject} />
                                <datalist id="type">
                                    <option value="caffeine free"/>
                                    <option value="chai"/>
                                    <option value="black"/>
                                    <option value="green"/>
                                    <option value="herbal"/>
                                    <option value="oolong"/>
                                    <option value="white"/>
                                </datalist><br/>
                        <label> Packet Type: </label>
                            <input list="packettype" name="packettype" value={newTea.packettype} onChange={setTeaObject}/>
                            <datalist id="packettype">
                                <option value="bags"/>
                                <option value="loose leaf"/>
                            </datalist><br/>
                        <label> Time of Day: </label>
                            <input list="timeofday" name="timeofday" value={newTea.timeofday} onChange={setTeaObject}/>
                                <datalist id="timeofday">
                                    <option value="no matter"/>
                                    <option value="morning"/>
                                    <option value="evening"/>
                                    <option value="night"/>
                                </datalist><br/>
                        <label> Rank (out of 5): </label>
                            <input list="rank" name="rank" value={newTea.rank} onChange={setTeaObject}/>
                            <datalist id="rank">
                                <option value="1"/>
                                <option value="2"/>
                                <option value="3"/>
                                <option value="4"/>
                                <option value="5"/>
                            </datalist><br/>
                        <label> Short Description: </label>
                            <textarea name="descriptionShort" rows="2" cols="25" value={newTea.descriptionShort} onChange={setTeaObject}/><br/>
                        <label> Full Description: </label>
                            <textarea name="descriptionFull" rows="6" cols="25" value={newTea.descriptionFull} onChange={setTeaObject}/><br/>
                        <label> Background: </label>
                            <textarea name="background" rows="4" cols="25" value={newTea.background} onChange={setTeaObject}/><br/>
                        <label> Provider: </label>
                            <input list="provider" name="provider" value={newTea.provider} onChange={setTeaObject}/>
                                <datalist id="provider">
                                    <option value="Tea Gschwendner"/>
                                    <option value="Celestial Seasonings"/>
                                    <option value="Spice and Tea Exchange"/>
                                </datalist><br/>
                        <label> Website:  </label>
                            <input type="text" name="website" 
                                value={ newTea.provider === "Celestial Seasonings" ? "http://www.celestialseasonings.com/"
                                        : newTea.provider === "Tea Gschwendner" ? "https://shop.tgtea.com/"
                                        : newTea.provider === "Spice and Tea Exchange" ? "https://spiceandtea.com"
                                        : newTea.provider === "Bigelow" ? "https://www.bigelowtea.com/"
                                        : newTea.website } onChange={setTeaObject}/><br/>
                            <hr/>
                        <input type="submit" value="Submit" onClick={submitForm} />

                        <p className="posted" hidden>Posted!</p>
                    </fieldset>
                </form>
            </div>
            
        </div>
    )
}

export default AddNewTea;
