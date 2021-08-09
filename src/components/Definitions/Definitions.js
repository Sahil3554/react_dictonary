import React from 'react'
import "./Definitions.css"
const Definitions = ({word,category,meanings}) => {
    return (
        <div className="meanings">
            {
                word && meanings[0] && category==="en_US" && (

                    <audio src={meanings[0].phonetics[0].audio} style={{backgroundColor: "white",borderRadius: "10px",width: "100%"}} controls>
                        Your Browser Doesn't Support Audio
                    </audio>
                )
            }
            {word===""?(<span className="subtitle">Start by Typing Something</span>):(
                meanings.map((mean)=>(
                    // console.log(mean.meaning)
                    mean.meanings.map((item)=>item.definitions.map((def)=>(
                    <div className="singleMean" style={{backgroundColor: "white",color: "black"}}>
                        <b>{def.definition}</b>
                        <hr style={{backgroundColor: "white",width: "100%"}}/>
                        
                        {def.example && (
                            <span><b> Example </b>{def.example}</span>
                            
                        )}
                        {def.synonyms.length>=1 && (
                            <span><b> Synonms </b>{def.synonyms.map((syn)=>`${syn},`)}</span>
                            
                        )}
                        {def.antonyms.length>=1 && (
                            <span><b> Antnonms </b>{def.antonyms.map((syn)=>`${syn},`)}</span>
                            
                        )}
                        
                        </div>
                    )))
                    ))
            
            )}      
        </div>
    )
}

export default Definitions
