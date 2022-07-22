import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledRaiting} from "./UncontrolledRaiting";

export default {
    title: 'UncontrolledRaiting',
    component: UncontrolledRaiting,
};

const callback = action("rating changed inside component")

export const EmptyRating = () => <UncontrolledRaiting defaultValue={0} onChange={callback}/>;
export const Rating1 = () => <UncontrolledRaiting defaultValue={1} onChange={callback}/>;
export const Rating2 = () => <UncontrolledRaiting defaultValue={2} onChange={callback}/>;
export const Rating3 = () => <UncontrolledRaiting defaultValue={3} onChange={callback}/>;
export const Rating4 = () => <UncontrolledRaiting defaultValue={4} onChange={callback}/>;
export const Rating5 = () => <UncontrolledRaiting defaultValue={5} onChange={callback}/>;