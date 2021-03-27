import React, { useEffect, useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
import "./ViewTea.css"
import TeaAPI from "../../utils/TeaAPI"

const ViewTea = () => {

    const [allTea, setAllTea] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        TeaAPI.getTeas()
            .then(res => {
                setAllTea(res.data)
            })
            .then(setLoading(false))
    }, [])

    console.log(allTea)
    if(loading) { return <p>Getting teas</p> }

    return (
        <>
            <div className="tea-container">

                <div className="tea-container-header">
                    <h2 >View Tea</h2>
                </div>

                <div className="tea-section">
                    {allTea.map(tea => (
                        <div 
                            className="card"
                            key={tea.id}
                            style={
                                {borderColor: tea.type === 'herbal' ? 'purple'
                                : tea.type === 'caffeine free' ? 'yellow'
                                : tea.type === 'black' ? 'blue'
                                : tea.type === 'green' ? 'green'
                                : tea.type === 'white' ? 'white'
                                : tea.type === 'rooibush' ? 'red'
                                : 'white'}}>
                            <div className="card-header">
                                {tea.name}
                            </div>
                            <br/>
                            <p>{tea.type}</p>
                            <p>{tea.packettype}</p>
                            <p>{tea.descriptionShort}</p>
                            <p>{tea.descriptionFull}</p>
                            <p>{tea.lastBrewed}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ViewTea;
