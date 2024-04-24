const imageUrl = 'https://miro.medium.com/v2/resize:fit:720/1*W35QUSvGpcLuxPo3SRTH4w.png'

const ChannelAvatar = ({url}) =>{
    return(
        <div className="channels-avatar-containers">
            <img src={url ? url : imageUrl}  width='100%' alt='Profile Photo'/>
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) =>{
    const handleNavigate = () =>{
        navigateToChannelHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green': 'red'}}>
                {isOnline ? 'Online': 'Offline'}
            </span>
        </div>
    )
}