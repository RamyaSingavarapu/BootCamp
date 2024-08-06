import { v4 as uuid } from "uuid";
import { useState } from "react"

function randomEmoji() {
    const choices = ['😃', '🥰', '😎', '🥳', '🤩', '😤', '😭', '😱', '🙄', '😴', '🥴', '🤠', '👿', '🐷', '🙈', '🐮', '🐣']
    return choices[Math.floor(Math.random() * choices.length)];

}

function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }])
    const addEmoji = () => {
        setEmojis((oldEmoji) => {
            return [...oldEmoji, { id: uuid(), emoji: randomEmoji() }]
        })
    }
    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter((e) => e.id !== id)
        })
    }
    return (
        <>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>add Emoji</button>
        </>
    )
}

export default EmojiClicker;