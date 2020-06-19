import React,{ FC } from "react";
interface VideoCardProps{
    videoUrl: string
}

export const VideoCard: FC<VideoCardProps> = (props) => {
    return (
        <div className={'paper padding-5'} style={{height:'42vh',maxHeight:'42vh'}}>
            <iframe
                title={'Sample video'}
                style={{border:'none',width:'100%', minHeight:'40vh'}}
                src={props.videoUrl}>
            </iframe>
        </div>
    )
};