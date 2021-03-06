import React, {useState, useEffect} from "react";
import "./MainForm.css"

export default function MainForm() {

    const [memesArray, setMemesArray] = useState([]);

    useEffect(() => {
        async function getMemesArray() {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            setMemesArray(data.data.memes);
        }

        getMemesArray();
        
    }, []);

    const [data, setData] = useState(
        {
            topText: "",
            bottomText: "",
            randomImageUrl: "http://i.imgflip.com/1bij.jpg",
        }
    );

    console.log(memesArray);

    
    
    function handleClick() {
        const randomItemNumber = Math.floor ( Math.random() * memesArray.length);
        setData(
            {
                ...data,
                randomImageUrl: memesArray[randomItemNumber].url,
            }
        );
        
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setData(
            prev => ({
                ...prev,
                [name]: value,
            })
        );
    }
    return (
        <main className="main--container">
            <div className="mainForm">
                <div className="mainForm--input-group">
                    <input 
                        className="mainForm--textInput" 
                        type="text" 
                        id="top" 
                        name="topText" 
                        placeholder="Top Text"
                        value={data.topText}
                        onChange={handleChange}/>
                    <input 
                        className="mainForm--textInput" 
                        type="text" 
                        id="bottom" 
                        name="bottomText" 
                        placeholder="Bottom Text"
                        value={data.bottomText}
                        onChange={handleChange}/>
                </div>
                {/* <input type="submit" className="mainForm--submit"></input> */}
                {/* <a href="#" className="mainForm--submit">Get a new meme image ????</a> */}
                <button onClick={handleClick} className="mainForm--submit">Get a new meme image ????</button>
            </div>

            <div className="main--imageContainer">
                <img className="main--memeImg" src={data.randomImageUrl}/>
                <h2 className="main--memeText main--topText">{data.topText}</h2>
                <h2 className="main--memeText main--bottomText">{data.bottomText}</h2>
            </div>

        </main>
    );
}
