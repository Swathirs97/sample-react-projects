import { useState } from "react";
export default function MoodTracker() {
    const [mood,setMood] = useState("Happy");
    const bgColor = {
        "Happy": "#f3f3cdff",
        "Sad": "#a6cee0ff",
        "Stressed": "#e9bee2ff",
        "Relaxed": "#b7eec5ff"
    }
    const setMoodChange = (currentMood) => {
        setMood(currentMood);
    }
    const emoji = {
        "Happy": "😁",
        "Sad": "😞",
        "Stressed": "😟",
        "Relaxed": "😌"
    }
    return (
        <div style={{backgroundColor: bgColor[mood],color: "black", height: "100vh" ,width: "100vw",marginLeft: "0px"}}>
            <h1>Mood Tracker App</h1>
            {mood === "Happy" && <span style={{fontSize: 100}}> {emoji[mood]}</span>}
            {mood === "Sad" && <span style={{fontSize: 100}}>{emoji[mood]}</span> }
            {mood === "Stressed" && <span style={{fontSize: 100}}>{emoji[mood]}</span> }
            {mood === "Relaxed" && <span style={{fontSize: 100}}>{emoji[mood]}</span> }
             <h2>{mood}</h2>
             <br></br>
             <button style={{margin: '5px', backgroundColor: '#9e9e9aff', color: 'white'}} onClick={() => {
                 setMoodChange("Happy")
             }}>Happy</button>
             <button style={{margin: '5px', backgroundColor: '#9e9e9aff', color: 'white'}} onClick={() => {
                 setMoodChange("Sad")
             }}>Sad</button>
             <button style={{margin: '5px', backgroundColor: '#9e9e9aff', color: 'white'}} onClick={() => {
                 setMoodChange("Stressed")
             }}>Stressed</button>
            <button style={{margin: '5px', backgroundColor: '#9e9e9aff', color: 'white'}} onClick={() => {
                setMoodChange("Relaxed")
            }}>Relaxed</button>
            <br></br>
            
         </div>
     )
 }