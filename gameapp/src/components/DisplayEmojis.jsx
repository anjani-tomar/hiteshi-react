import React, { useState, useRef } from 'react';
import './DisplayEmoji.css';

const DisplayEmojis = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [emojiBlocks, setEmojiBlocks] = useState([
        { top: "", right: "", bottom: "", left: "" },
        { top: "", right: "", bottom: "", left: "" },
        { top: "", right: "", bottom: "", left: "" },
        { top: "", right: "", bottom: "", left: "" },
        { top: "", right: "", bottom: "", left: "" },
        { top: "", right: "", bottom: "", left: "" },
        { top: "", right: "", bottom: "", left: "" }
    ]);

    const intervalRef = useRef(null);

    const handleEmojiClick = (emoji) => {
        if (isPlaying) {
            const newBlocks = [...emojiBlocks];
            let index = 0;
            intervalRef.current = setInterval(() => {
                while (index < newBlocks.length) {
                    const block = newBlocks[index];
                    if ((block.top.length - 1) < 52) {
                        block.top += emoji.target.innerText;
                        break;
                    } else if (block.right.length < 28) {
                        block.right += emoji.target.innerText;
                        break;
                    } else if (block.bottom.length < 52) {
                        block.bottom += emoji.target.innerText;
                        break;
                    } else if (block.left.length < 28) {
                        block.left += emoji.target.innerText;
                        break;
                    }
                    index++;
                }

                if (index === newBlocks.length) {
                    alert("All blocks are filled!");
                    clearInterval(intervalRef.current);
                    setIsPlaying(false);
                } else {
                    setEmojiBlocks(newBlocks);
                }
            }, 1000);
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            clearInterval(intervalRef.current);
        }
        setIsPlaying(prevState => !prevState);
    };

    return (
        <>
            <section className='full-screen'>
                {emojiBlocks.map((block, index) => (
                    <div key={index} className='blocks'>
                        <div className='block' id="top-div">{block.top}</div>
                        <div className='block' id="left-div">{block.right}</div>
                        <div className='block' id="bottom-div">{block.bottom}</div>
                        <div className='block' id="right-div">{block.left}</div>
                    </div>
                ))}
            </section>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button className='PlayPause' onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button className='emojis' onClick={handleEmojiClick} >😎</button>
                <button className='emojis' onClick={handleEmojiClick} >😁</button>
                <button className='emojis' onClick={handleEmojiClick} >😍</button>
                <button className='emojis' onClick={handleEmojiClick} >😂</button>
            </div>
        </>
    );
};

export default DisplayEmojis;
