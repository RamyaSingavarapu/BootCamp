import { v4 as uuid } from "uuid";
import { useState } from "react"

function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '😭' }])
    function addEmoji() {
        setEmojis((oldEmoji) => {
            return [...oldEmoji, { id: uuid(), emoji: '😱' }]
        })
    }
    return (
        <>
            {emojis.map((e) => (
                <span key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>add Emoji</button>
        </>
    )
}

export default EmojiClicker;