import React, { FC } from "react";
import {Button} from "antd";
import {ScheduleTable} from "../../core/schedule-table";

interface CalendarCardProps{

}

export const CalendarCard:FC<CalendarCardProps> =( ) =>{
    return (
        <div>
            <ScheduleTable/>
            <Button style={{ width:'99%',marginTop:'15px',marginBottom:'5px',height:'5vh'}} >CHECK AVAILABILITY</Button>
        </div>
    )
};