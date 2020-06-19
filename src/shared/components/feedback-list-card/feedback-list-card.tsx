import React,{ FC } from "react";
import {FeedbackCard} from "../feedback-card/feedback-card";
import {DummyData} from "../../../_infrastructure/constants/dummy-data";

interface FeedbackListCardProps{

}

export const FeedbackListCard:FC<FeedbackListCardProps> = (props) =>{
    return (
        <div className={'paper padding-10'} style={{maxHeight:'45vh',overflowY:'auto'}}>
            {[1,2,4].map((value,key)=>
                <div className={'margin-10 paper'} key={key}>
                    <FeedbackCard feedback={DummyData.FEEDBACK}/>
                </div>)}
        </div>
    )
};