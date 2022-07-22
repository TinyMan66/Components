import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired');
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

const callbacksProps = {
    setAccordionCollapsed: callback
};

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true
};

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false
};

//This is how it was in an old version:
// export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setAccordionCollapsed={callback}/>;
// export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setAccordionCollapsed={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Menu'} collapsed={value} setAccordionCollapsed={() => setValue(!value)}/>;
};