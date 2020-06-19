import React,{FC} from "react";

interface ImageAvatarProps{
    src: string
    width: string
}
export const ImageAvatar:FC<ImageAvatarProps>=(props)=>{
    return (
        <img
            className={'padding-10'}
            style={{ borderRadius:'50%',width:props.width}}
            src={props.src}
            alt={'profile'}/>
    )
};