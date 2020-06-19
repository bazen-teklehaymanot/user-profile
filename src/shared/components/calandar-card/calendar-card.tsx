import React, { FC } from "react";
import {Button} from "antd";
import {ScheduleTable} from "../../core/schedule-table";

interface CalendarCardProps{

}

export const CalendarCard:FC<CalendarCardProps> =(props ) =>{
    return (
        <div>
            <ScheduleTable/>
            <Button style={{marginTop:'15px',height:'5vh'}} block>CHECK AVAILABILITY</Button>
        </div>
    )
};