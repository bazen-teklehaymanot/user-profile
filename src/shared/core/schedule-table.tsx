import React, {FC} from 'react';
import {Typography} from "antd";
import {DummyData} from "../../_infrastructure/constants/dummy-data";
import {DateTime} from "../../_infrastructure/models/date-time";
import {ScheduleAvailability, ScheduleBox} from "./schedule-box";
import {isScheduleFree} from "../util/schedule";

const {Text} = Typography;




export const ScheduleTable: FC = () =>{
    return (
        <div style={{overflowX:'hidden'}}>
            <table width={'99%'}>
                <thead>
                    <tr>
                        <th style={{border:'none'}}/>
                        { DummyData.DATES.map((value:DateTime,key)=>
                            <th key={key}>
                                <Text type={'secondary'}>{ value.daySubstring }</Text><br/>
                                <Text type={'secondary'}>{ value.date }</Text>
                            </th>
                        ) }
                    </tr>
                </thead>
                <tbody>
                { DummyData.HOUR_RANGE.map((value,key)=>
                    <tr key={key}>
                        <td>{ value }</td>
                        <td>
                            <ScheduleBox
                                width={'100%'}
                                height={'55px'}
                                availability={isScheduleFree()? ScheduleAvailability.Free:ScheduleAvailability.Reserved}/>
                        </td>
                        <td>
                            <ScheduleBox
                                width={'100%'}
                                height={'55px'}
                                availability={isScheduleFree()? ScheduleAvailability.Free:ScheduleAvailability.Reserved}/>
                        </td>

                        <td>
                            <ScheduleBox
                                width={'100%'}
                                height={'55px'}
                                availability={isScheduleFree()? ScheduleAvailability.Free:ScheduleAvailability.Reserved}/>
                        </td>
                        <td>
                            <ScheduleBox
                                width={'100%'}
                                height={'55px'}
                                availability={isScheduleFree()? ScheduleAvailability.Free:ScheduleAvailability.Reserved}/>
                        </td>
                        <td>
                            <ScheduleBox
                                width={'100%'}
                                height={'55px'}
                                availability={isScheduleFree()? ScheduleAvailability.Free:ScheduleAvailability.Reserved}/>
                        </td>
                        <td>
                            <ScheduleBox
                                width={'100%'}
                                height={'55px'}
                                availability={isScheduleFree()? ScheduleAvailability.Free:ScheduleAvailability.Reserved}/>
                        </td>
                        <td>
                            <ScheduleBox
                                width={'100%'}
                                height={'55px'}
                                availability={isScheduleFree()? ScheduleAvailability.Free:ScheduleAvailability.Reserved}/>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
};