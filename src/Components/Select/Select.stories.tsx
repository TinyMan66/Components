import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('2');

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Moscow'},
                    {value: '2', title: 'Stockholm'},
                    {value: '3', title: 'Vena'},
                ]}/>
    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Moscow'},
                    {value: '2', title: 'Stockholm'},
                    {value: '3', title: 'Vena'},
                ]}/>
    </>

}