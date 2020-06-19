import React,{ FC } from "react";
import {Col, Row} from "antd";
import {AboutCard} from "../../shared/components/about-card/about-card";
import {VideoCard} from "../../shared/components/video-card/video-card";
import {UserCard} from "../../shared/components/user-card/user-card";
import {FeedbackListCard} from "../../shared/components/feedback-list-card/feedback-list-card";
import {CalendarCard} from "../../shared/components/calandar-card/calendar-card";
import {DummyData} from "../../_infrastructure/constants/dummy-data";

export const UserProfilePage:FC = ()=>{
    return (
        <Row justify={'center'} className={'padding-top-5'}>
            <Col sm={{span:23}} md={22} lg={{span:14}}>
                <div>
                <Row justify={'center'} gutter={{lg:8,md:4,sm:0,xs:0}}>
                    <Col xs={24} sm={24} md={12} lg={{span:12}}>
                        <div className={'margin-bottom-10'} >
                            <VideoCard videoUrl={DummyData.VIDEO_URL}/>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={{span:12}}>
                        <div className={'margin-bottom-10'}>
                            <UserCard user={DummyData.USER_DATA}/>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className={'margin-bottom-10'}>
                            <AboutCard title={'About'} content={DummyData.PARAGRAPH}/>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={10}>
                        <div style={{maxHeight:'45vh',overflowY:'auto'}}  className={'paper margin-bottom-10'}>
                            <FeedbackListCard/>
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={14}>
                        <div style={{minHeight:'45vh'}} className={'paper padding-10 margin-bottom-10'}>
                            <CalendarCard/>
                        </div>
                    </Col>

                </Row>
                </div>
            </Col>
        </Row>
    )
};