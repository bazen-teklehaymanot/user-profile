import React, { FC, Fragment } from 'react';
import {User} from "../../../_infrastructure/models/user";
import {Button, Col, Row, Typography} from "antd";
import {ImageAvatar} from "../../core/image-avatar";
import { StarFilled,HeartOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface UserCardProps{
    user: User
}

export const UserCard: FC<UserCardProps>= (props)=>{
    return (
        <div style={{minHeight:'42vh'}} className={'paper padding-5 padding-bottom-10'}>
            <Row gutter={{lg:2,md:2,sm:0,xs:0}}>
                <Col xs={24} sm={24} md={12} lg={{span:12}}>
                    <Title style={{textAlign:'center'}} level={3}>{props.user.name}</Title>
                    <div>
                        <ImageAvatar
                            src={props.user.profileImgUrl}
                            width={'100%'}/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Text type={'secondary'}>{props.user.isOnline? 'Online' : 'Offline'}</Text><br/>
                        { !props.user.isOnline && <Fragment><Text type={'secondary'}>{props.user.lastOnline}</Text><br/></Fragment> }
                        <Text  type={'secondary'}>TEACHES : <span>{props.user.teachSubjects.map((val, key)=><Text key={key} strong>{val}</Text>)}</span></Text><br/>
                        <Text  type={'secondary'}>&nbsp;SPEAKS &nbsp;&nbsp;: <span>{props.user.speakLanguages.map((val, key)=><Text key={key} strong>{val}</Text>)}</span></Text><br/>
                    </div>
                </Col>


                <Col xs={24} sm={24} md={12} lg={{span:12}}>
                    <div style={{height:'27vh',marginTop:'7vh'}}>
                        <div style={{textAlign:'end',width:'70%',margin:'auto'}}>
                            <HeartOutlined style={{fontSize:'35px',marginRight:'20px'}} />
                            <MinusCircleOutlined style={{fontSize:'35px'}}/>
                        </div>
                        <br/>
                        <div style={{textAlign:'end',width:'70%',margin:'auto'}}>
                            <Title style={{color:'#FFDF00'}} level={4}>
                                <StarFilled style={{color:'#FFDF00'}}/>
                                <StarFilled style={{color:'#FFDF00'}}/>
                                <StarFilled style={{color:'#FFDF00'}}/>
                                <StarFilled style={{color:'#FFDF00'}}/>
                                <StarFilled style={{color:'#FFDF00'}}/>
                                &nbsp;&nbsp;5.0
                            </Title>
                            <Text strong>3 LESSONS</Text><br/>
                            <Text strong>2 STUDENTS</Text><br/>
                            <Title level={4}>$8.00/hr</Title><br/>
                        </div>
                    </div>
                    <div style={{width:'75%',margin:'auto'}}>
                        <Button type={'primary'} size={'large'} danger block >Book</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
};