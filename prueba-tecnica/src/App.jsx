import { useEffect, useState } from "react"



export function App() {

    const [fact, setFact] = useState('')
    const [image, setImage] = useState('')
    const [firstWord, setFirstWord] = useState('')
    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => setFact(data.fact))
    }, [])



    useEffect(() => {
        if (fact !== '') {
            const first_word = fact.split(' ')[0]
            fetch(`https://cataas.com/cat/says/${first_word}`)
                .then(response => {
                    console.log("hoola", response.url)
                    setImage(response.url)
                    setFirstWord(first_word)
                }
                )
        }

    }, [fact])
    return (
        <main>
            <h1>APP DE GATITOS</h1>
            <img src={ image } alt="imagen de gato con frase aleatoria" />
            <strong>{ firstWord }</strong>
        </main>
    )
}