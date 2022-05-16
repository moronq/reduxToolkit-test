import React, {useEffect} from 'react'
import styles from './Counter.module.scss'
import {useAppDispatch, useAppSelector} from "../../Hook/hook"
import {counterSlice} from "../../store/Reducers/CounterSlice"
import {CommentsAPI} from "../../api/api";
import Comments from "../Comments/Comments";

const Counter = () => {

    const dispatch = useAppDispatch()
    const {counter} = useAppSelector(state => state.counterReducer)
    const {increment, decrement} = counterSlice.actions

    return (
        <>
            <div className = {styles.container}>
                <p>Current Count: {counter}</p>
                <div className = {styles.buttonContainer}>
                    <button onClick={()=>dispatch(increment())}>Increment</button>
                    <button onClick={()=>dispatch(decrement())}>Decrement</button>
                </div>
            </div>
            <Comments/>
        </>

    );
};

export default Counter