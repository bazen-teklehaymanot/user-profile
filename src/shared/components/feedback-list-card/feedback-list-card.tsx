import React,{ FC } from "react";
import {FeedbackCard} from "../feedback-card/feedback-card";
import {DummyData} from "../../../_infrastructure/constants/dummy-data";

interface FeedbackListCardProps{

}

export const FeedbackListCard:FC<FeedbackListCardProps> = (props) =>{
    return (
        <div className={'paper padding-10'}>
            {[1,2,3,4,5,6,7].map((value,key)=>
                <div className={'margin-10 paper'} key={key}>
                    <FeedbackCard feedback={DummyData.FEEDBACK}/>
                </div>)}
        </div>
    )
};