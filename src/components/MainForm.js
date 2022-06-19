import React from "react";
import memes from "../data/memeData"

/* Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

export default function MainForm() {
    const [data, setData] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImageUrl: "http://i.imgflip.com/1bij.jpg",
        }
    );

    const [allMemeImages, setAllMemeImages] = React.useState(memes);
    
    function handleMouseUp() {
        const randomItemNumber = Math.floor ( Math.random() * allMemeImages.data.memes.length);
        setData(
            {
                ...data,
                randomImageUrl: allMemeImages.data.memes[randomItemNumber].url,
            }
        );
        
    }
    return (
        <main className="main--container">
            <div className="mainForm">
                <div className="mainForm--input-group">
                    <input className="mainForm--textInput" type="text" id="top" name="top" placeholder="shut up"></input>
                    <input className="mainForm--textInput" type="text" id="bottom" name="bottom" placeholder="and take my money"></input>
                </div>
                {/* <input type="submit" className="mainForm--submit"></input> */}
                {/* <a href="#" className="mainForm--submit">Get a new meme image 🖼</a> */}
                <button onMouseUp={handleMouseUp} className="mainForm--submit">Get a new meme image 🖼</button>
            </div>

            <div className="main--imageContainer">
                <img className="main--memeImg" src={data.randomImageUrl}/>
            </div>

        </main>
    );
}