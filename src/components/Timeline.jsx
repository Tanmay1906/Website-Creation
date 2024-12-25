/* eslint-disable no-unused-vars */
// src/components/Timeline.jsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2024 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Started Internship Program</h3>
                <h4 className="vertical-timeline-element-subtitle">New Delhi, India</h4>
                <p> Initiated a comprehensive internship program to foster talent. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2024 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Started Internship Program</h3>
                <h4 className="vertical-timeline-element-subtitle">New Delhi, India</h4>
                <p> Initiated a comprehensive internship program to foster talent. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2024 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Started Internship Program</h3>
                <h4 className="vertical-timeline-element-subtitle">New Delhi, India</h4>
                <p> Initiated a comprehensive internship program to foster talent. </p>
            </VerticalTimelineElement>
            {/* Add more timeline elements here */}
        </VerticalTimeline>
    );
};

export default Timeline;
