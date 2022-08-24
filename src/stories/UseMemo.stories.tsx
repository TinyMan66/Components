import React, {useMemo, useState} from "react";
import {Select} from "../Components/Select/Select";

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    // let resultA = 1;
    let resultB = 1;

     const resultA = useMemo(() => {
         let tempResultA = 1;
         for (let i = 1; i <= a; i++) {
             let fake = 0
             while (fake <100000000) {
                 fake++;
                 const fakeValue = Math.random();
             }
             tempResultA *= i;
         }
         return tempResultA;
     }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS SECRET')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret);

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Diana', 'Karina', 'Uliana','Lilia', 'Victor']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Rika' + new Date().getTime()];
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}


//task 18lesson (not finished)
const cities = [
    {countryID: 1, population: 20, title: 'Moscow'},
    {countryID: 1, population: 5, title: 'Kaliningrad'},
    {countryID: 1, population: 15, title: 'St-Petersburg'},
    {countryID: 2, population: 10, title: 'Stockholm'},
    {countryID: 2, population: 5, title: 'Vetlanda'},
    {countryID: 2, population: 4, title: 'Sundviken'},
    {countryID: 3, population: 12, title: 'Lisbon'},
    {countryID: 3, population: 14, title: 'Porto'},
    {countryID: 3, population: 7, title: 'Lagos'},
]

const SelectMemo = React.memo(Select);

export const HelpExample = () => {
    console.log('HelpExample')
    const [number, setNumber] = useState<number>(0);

    // const citiesWithLetterM = cities.filter(c => c.title.toLowerCase().indexOf('m') > -1);
    // const citiesRussian = cities.filter(c => c.countryID === 1);
    // const citiesPopulation = cities.filter(c => c.population > 10);
    const citiesWithLetterM = useMemo(() => {
        return cities.filter(c => c.title.toLowerCase().indexOf('l') === 0)
    }, [cities]);

    const citiesRussian = useMemo(() => {
        return cities.filter(c => c.countryID === 1)
    }, [cities])

    const citiesPopulation = useMemo(() => {
        return cities.filter(c => c.population > 10)
    }, [cities])


    return <>
        <div>
            <button onClick={() => {setNumber(number + 1)}}>+</button>
            {number}
        </div>
        <SelectMemo onChange={() => {}} items={citiesWithLetterM}/>
        <SelectMemo onChange={() => {}} items={citiesRussian}/>
        <SelectMemo onChange={() => {}} items={citiesPopulation}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS','HTML']);

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()];
            setBooks(newBooks);
        }
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret);