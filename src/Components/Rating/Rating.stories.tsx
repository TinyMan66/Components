import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
};

export const EmptyRating = () => <Rating value={0} setRaitingValue={x => x}/>;
export const Rating1 = () => <Rating value={1} setRaitingValue={x => x}/>;
export const Rating2 = () => <Rating value={2} setRaitingValue={x => x}/>;
export const Rating3 = () => <Rating value={3} setRaitingValue={x => x}/>;
export const Rating4 = () => <Rating value={4} setRaitingValue={x => x}/>;
export const Rating5 = () => <Rating value={5} setRaitingValue={x => x}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3);
    return <Rating value={rating} setRaitingValue={setRating}/>;
};