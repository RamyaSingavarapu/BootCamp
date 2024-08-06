import { useState } from "react"

function EmojiClicker() {
    const [emojis, setEmojis] = useState(['😭'])
    function addEmoji() {
        setEmojis((oldEmoji) => {
            return [...oldEmoji, '🥵']
        })
    }
    return (
        <>
            {emojis.map((e) => (
                <span style={{ fontSize: "4rem" }}>{e}</span>
            ))}
            <button onClick={addEmoji}>add Emoji</button>

        </>
    )
}

export default EmojiClicker;