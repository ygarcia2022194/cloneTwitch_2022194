import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner";

export const Stream = ({streamUrl}) => {
    return(
        <div className="channel-video-container">
            <ReactFlvPlayer width='100%' heigth='100%' url={streamUrl}/>
        </div>
    )
}

export const ChannelView = ({getChannels}) => {
    const { isFetching, getChannelsDetails, channelDetails } = useChannelDetails();

    const { id } = useParams()
    console.log(channelDetails)
    useEffect(() => {
        getChannelsDetails(id)
    }, [])

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="channel-container">
            <div className="channel-video-description-section">
                {channelDetails.data.isOnline ? (
                    <Stream streamUrl={channelDetails.data.streamUrl}/>
                ) : (
                    <div className="channel-offline-placeholder">
                        <span>Channel is offline !!! 😒</span>
                    </div>
                )}
                <ChannelDescription
                    channelId={channelDetails.data.id}
                    title={channelDetails.data.title}
                    description={channelDetails.data.description}
                    username={channelDetails.data.username}
                    getChannels={getChannels}
                />
            </div>
        </div>
    )
}
