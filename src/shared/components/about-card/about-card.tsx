import React,{ FC, ReactNode } from 'react';
import {Card, Typography} from "antd";
const { Meta } = Card;
const { Text } = Typography;
interface AboutCardProps{
    title: ReactNode
    content: ReactNode
}
export const AboutCard:FC<AboutCardProps> = (props)=>{
    return (
        <div className={'paper'}>
            <Card hoverable bordered={false} style={{minHeight:'12vh'}}>
                <Meta
                    title={props.title}
                    description={<Text>{props.content}</Text>} />
            </Card>
        </div>
    );
};