import React, { FC, Fragment } from "react";
import {Button, Calendar} from "antd";

interface CalendarCardProps{

}

export const CalendarCard:FC<CalendarCardProps> =(props ) =>{
    return (
        <div className={'paper'} style={{height:'40vh'}}>
            <div style={{maxHeight:'40vh',overflow:'auto'}}>
                <Calendar headerRender={()=><Fragment/>}/>
            </div>
            <div style={{marginTop:'10px'}}>
                <Button style={{height:'5vh'}} block>CHECK AVAILABILITY</Button>
            </div>
        </div>
    )
};