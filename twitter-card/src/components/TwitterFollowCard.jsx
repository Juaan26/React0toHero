/* eslint-disable react/prop-types */
import { useState } from 'react'
export function TwitterFollowCard({ formatUserName, userName = 'unknown', children, }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const isFollowingText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }


    return (<article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className="tw-followCard-avatar" src={ `https://unavatar.io/${userName}` } alt="" />
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-headerInfo'>{ children }</strong>

                <span className='tw-followCard-header-infoUserName'>{ formatUserName(userName) }</span>
            </div>
        </header>
        <aside >
            <button onClick={ handleFollow } className={ buttonClassName }>{ isFollowingText }</button>
        </aside>
    </article>)
}