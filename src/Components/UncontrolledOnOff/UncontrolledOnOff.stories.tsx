import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action('on or off clicked');

export const OnMode = () => <UncontrolledOnOff defaultOn={true} changeOn={callback}/>;
export const OffMode = () => <UncontrolledOnOff changeOn={callback}/>;
