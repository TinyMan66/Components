import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired');
const onClickCallback = action("some item clicked");

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    setAccordionCollapsed: callback,
    onClick: onClickCallback
};

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items:[]
};

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items:[{title: 'Diana', value: 1}, {title: 'Karina', value: 2}, {title: 'Uliana', value: 3}, {title: 'Lilia', value: 4}]
};

//This is how it was in an old version:
// export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setAccordionCollapsed={callback}/>;
// export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setAccordionCollapsed={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion titleValue={'Menu'}
                      collapsed={value} setAccordionCollapsed={() => setValue(!value)}
                      items={[
                          {title: 'Diana', value: 1},
                          {title: 'Karina', value: 2},
                          {title: 'Uliana', value: 3},
                          {title: 'Lilia', value: 4}
                      ]}
                      onClick={(value) => {alert(`user with id ${value}`)}}/>;
};