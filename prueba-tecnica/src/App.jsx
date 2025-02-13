
import { useCatFact } from './hooks/useCatFacts';


export function App() {
    const { fact, image, } = useCatFact();

    return (
        <main>
            <h1>APP DE GATITOS</h1>
            <img src={ image } alt="imagen de gato con frase aleatoria" />
            <strong>{ fact }</strong>
        </main>
    )
}