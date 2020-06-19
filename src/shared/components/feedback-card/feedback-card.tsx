import React,{ FC } from "react";
import {Feedback} from "../../../_infrastructure/models/feedback";
import {Col, Row, Typography} from "antd";
import {ImageAvatar} from "../../core/image-avatar";
const { Text } = Typography;
interface FeedbackCardProps{
    feedback: Feedback
}

export const FeedbackCard:FC<FeedbackCardProps> =(props) =>{
    return (
        <div className={'padding-10'} style={{margin:'20px'}}>
            <Row gutter={2}>
                <Col lg={24}>
                    <Text> {props.feedback.content}</Text>
                </Col>
               <Col lg={5}>
                   <ImageAvatar
                       src={props.feedback.userImg}
                       width={'100%'}/>
               </Col>
                <Col lg={18}>
                    <br/>
                    <Text strong>{props.feedback.userName}</Text><br/>
                    <Text >{props.feedback.numberOfLessons} Lessons</Text>
                    <div style={{textAlign:'end'}}><Text style={{textAlign:'end'}}>{props.feedback.date}</Text></div>
                </Col>
            </Row>
        </div>
    )
};