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
                <h2 className="tea-container-header">View Tea</h2>

                <div className="tea-section">
                    {allTea.map(tea => (
                        <div 
                            className="card"
                            key={tea.id}>
                            <div className="card-header">
                                {tea.name}
                            </div>
                            <br/>
                            <p>{tea.type}</p>
                            <p>{tea.packettype}</p>
                            <p>{tea.description}</p>
                            <p>{tea.lastBrewed}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ViewTea;