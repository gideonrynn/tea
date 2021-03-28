import React, { useEffect, useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
import teapo from "../../img/teapo.jpeg"
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
                    <h2>Tea Selection</h2>
                </div>
                <div className="tea-table-sort">  
                    <table>
                        <tbody>
                            <tr>
                                <th>A-Z</th>
                                <th>Tea Type</th>
                                <th>Rank</th>
                                <th>Provider</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
  
                <div className="tea-section">
                    
                    {allTea.map(tea => (
                        <div 
                            className="card"
                            key={tea.id}
                            style={
                                {borderColor: tea.type === 'herbal' ? 'purple'
                                : tea.type === 'caffeine free' ? 'orange'
                                : tea.type === 'black' ? 'darkblue'
                                : tea.type === 'green' ? 'green'
                                : tea.type === 'white' ? 'grey'
                                : tea.type === 'rooibush' ? 'red'
                                : 'white'}}>
                            <div className="tea-image">
                                <img className="tea-image" src={teapo} alt="tea"/>
                            </div>
                            <div className="card-header">
                                {tea.name}
                            </div>
                            <div className="card-content">
                                <p>{tea.type}</p>
                                <p>{tea.packettype}</p>
                                <p>{tea.descriptionShort}</p>
                                {/* <p>{tea.descriptionFull}</p> */}
                                <p>{tea.lastBrewed}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ViewTea;
