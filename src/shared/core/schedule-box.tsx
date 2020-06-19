import React, { FC } from 'react';

export enum ScheduleAvailability{
    Free,
    Reserved
}
interface ScheduleBoxProps{
    width: string,
    height: string,
    availability: ScheduleAvailability
}
export const ScheduleBox:FC<ScheduleBoxProps> = (props) => {
    return (
        <div
            style={{
                width:props.width,
                height:props.height,
                backgroundColor: props.availability === ScheduleAvailability.Free ?
                                'white'
                                :
                                '#80c743'
            }}>

        </div>
    )
};