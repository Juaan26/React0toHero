import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <>
            <TwitterFollowCard formatUserName={ formatUserName } userName="midudev"  >
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={ formatUserName } userName="WanDEVgame" >
                WanDEV
            </TwitterFollowCard >
        </>
    );
}