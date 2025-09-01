// import { useState } from "react";

// export default function MoodTracker() {
//     const [mood,setMood] = useState("Happy");
//     const [history,setHistory] = useState([]);
//     const bgColor = {
//         "Happy": "#f3f3cdff",
//         "Sad": "#a6cee0ff",
//         "Stressed": "#e9bee2ff",
//         "Relaxed": "#b7eec5ff"
//     }
//     const setMoodChange = (currentMood) => {
//         setMood(currentMood);
//         setHistory([...history,currentMood]);
//     }
//     const emoji = {
//         "Happy": "😁",
//         "Sad": "😞",
//         "Stressed": "😟",
//         "Relaxed": "😌"
//     }
//     return (
//         <div style={{backgroundColor: bgColor[mood],color: "black", height: "100vh" ,width: "100vw",marginLeft: "0px"}}>
//             <h1>Mood Tracker App</h1>
//             {mood === "Happy" && <span style={{fontSize: 100}}> {emoji[mood]}</span>}
//             {mood === "Sad" && <span style={{fontSize: 100}}>{emoji[mood]}</span> }
//             {mood === "Stressed" && <span style={{fontSize: 100}}>{emoji[mood]}</span> }
//             {mood === "Relaxed" && <span style={{fontSize: 100}}>{emoji[mood]}</span> }
//             <h2>{mood}</h2>
//             <br></br>
//             <button style={{margin: '5px', backgroundColor: '#9e9e9aff', color: 'white'}} onClick={() => {
//                 setMoodChange("Happy")
//             }}>Happy</button>
//             <button style={{margin: '5px', backgroundColor: '#9e9e9aff', color: 'white'}} onClick={() => {
//                 setMoodChange("Sad")
//             }}>Sad</button>
//             <button style={{margin: '5px', backgroundColor: '#9e9e9aff', color: 'white'}} onClick={() => {
//                 setMoodChange("Stressed")
//             }}>Stressed</button>
//             <button style={{margin: '5px', backgroundColor: '#9e9e9aff', color: 'white'}} onClick={() => {
//                 setMoodChange("Relaxed")
//             }}>Relaxed</button>
//             <br></br>
//             <h2>Mood History</h2>
//             <ul style={{listStyleType: 'none', padding: 0, fontSize: '20px'}}>
//                 {history.map((mood,index) => 
//                 <li key={index}>{emoji[mood]} {mood}</li>)}
//             </ul>
//         </div>
//     )
// }
// useEffect(() => {
//         setFade(true);
//         const timer = setTimeout(() => setFade(false), 400);
//         return () => clearTimeout(timer);
//     }, [mood]);

//     const setMoodChange = (currentMood) => {
//         if (currentMood !== mood) {
//             setMood(currentMood);
//             setHistory([...history, currentMood]);
//         }
//     };



// import { useState, useEffect } from "react";


// export default function MoodTracker() {
//     const [mood, setMood] = useState("Happy");
//     const [history, setHistory] = useState([]);
//     const [fade, setFade] = useState(false);
//     const bgColor = {
//         "Happy": "#f3f3cdff",
//         "Sad": "#a6cee0ff",
//         "Stressed": "#e9bee2ff",
//         "Relaxed": "#b7eec5ff"
//     };
//     const emoji = {
//         "Happy": "😁",
//         "Sad": "😞",
//         "Stressed": "😟",
//         "Relaxed": "😌"
//     };
    
//     const setMoodChange = async (currentMood) => {
//         setFade(true);
//         await new Promise(resolve => setTimeout(resolve, 400));
//         setMood(currentMood);
//         setHistory([...history, currentMood]);
//     };

//     return (
//         <div
//             style={{
//                 backgroundColor: bgColor[mood],
//                 color: "black",
//                 height: "100vh",
//                 width: "100vw",
//                 marginLeft: "0px",
//                 transition: "background-color 0.5s ease"
//             }}
//         >
//             <h1>Mood Tracker App</h1>
//             <span
//                 style={{
//                     fontSize: 100,
//                     opacity: fade ? 0 : 1,
//                     transition: "opacity 0.4s ease"
//                 }}
//             >
//                 {emoji[mood]}
//             </span>
//             <h2>{mood}</h2>
//             <br />
//             <button style={{ margin: '5px', backgroundColor: '#9e9e9aff', color: 'white' }} onClick={() => setMoodChange("Happy")}>Happy</button>
//             <button style={{ margin: '5px', backgroundColor: '#9e9e9aff', color: 'white' }} onClick={() => setMoodChange("Sad")}>Sad</button>
//             <button style={{ margin: '5px', backgroundColor: '#9e9e9aff', color: 'white' }} onClick={() => setMoodChange("Stressed")}>Stressed</button>
//             <button style={{ margin: '5px', backgroundColor: '#9e9e9aff', color: 'white' }} onClick={() => setMoodChange("Relaxed")}>Relaxed</button>
//             <br />
//             <h2>Mood History</h2>
//             <ul style={{ listStyleType: 'none', padding: 0, fontSize: '20px' }}>
//                 {history.map((mood, index) => (
//                     <li key={index}>{emoji[mood]} {mood}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

import { useState, useEffect } from "react";


export default function MoodTracker() {
    const [mood, setMood] = useState("Happy");
    const [history, setHistory] = useState([]);
    const [fade, setFade] = useState(false);
    const bgColor = {
        "Happy": "#f3f3cdff",
        "Sad": "#a6cee0ff",
        "Stressed": "#e9bee2ff",
        "Relaxed": "#b7eec5ff"
    };
    const emoji = {
        "Happy": "😁",
        "Sad": "😞",
        "Stressed": "😟",
        "Relaxed": "😌"
    };
    const messages = {
        "Happy" : "Glad!",
        "Sad" : "Sorry to hear that.",
        "Stressed" : "It`s okay to feel stressed sometimes",
        "Relaxed" : "You are feeling relaxed"
    }
    
    const setMoodChange = async (currentMood) => {
        setFade(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        setMood(currentMood);
        setHistory([...history, currentMood]);
        setFade(false);
    };

    return (
        <div
            style={{
                backgroundColor: bgColor[mood],
                color: "black",
                height: "100vh",
                width: "100vw",
                marginLeft: "0px",
                transition: "background-color 0.5s ease"
            }}>
            <h1>Mood Tracker App</h1>
            <span
                style={{
                    fontSize: 100,
                    opacity: fade ? 0 : 1,
                    transition: "opacity 0.4s ease"
                }}>
                {emoji[mood]}
            </span>
            <h2>{mood}</h2>
            <h3>{messages[mood]}</h3>
            <br />
            <button style={{ margin: '5px', backgroundColor: '#9e9e9aff', color: 'white' }} onClick={() => setMoodChange("Happy")}>Happy</button>
            <button style={{ margin: '5px', backgroundColor: '#9e9e9aff', color: 'white' }} onClick={() => setMoodChange("Sad")}>Sad</button>
            <button style={{ margin: '5px', backgroundColor: '#9e9e9aff', color: 'white' }} onClick={() => setMoodChange("Stressed")}>Stressed</button>
            <button style={{ margin: '5px', backgroundColor: '#9e9e9aff', color: 'white' }} onClick={() => setMoodChange("Relaxed")}>Relaxed</button>
            <br />
            <h2>Mood History</h2>
            <ul style={{ listStyleType: 'none', padding: 0, fontSize: '20px' }}>
                {history.map((mood, index) => (
                    <li key={index}>{emoji[mood]} {mood}</li>
                ))}
            </ul>
        </div>
    );
}