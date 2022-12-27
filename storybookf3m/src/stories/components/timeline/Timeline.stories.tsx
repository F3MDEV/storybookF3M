import Timeline from './Timeline';
import TimelineData from '../timeline/assets/data';
import React from 'react';
export default {
    component: Timeline,
    title: 'Timeline'
};
const Template = args => <Timeline {...args} />;
export const Default = Template.bind({});
Default.args = {
    data: TimelineData
};