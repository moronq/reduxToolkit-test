import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Hook/hook";
import {counterSlice, fetchComments} from "../../store/Reducers/CounterSlice";
import Message from "./Message";

const Comments = () => {

    const dispatch = useAppDispatch()
    const { comments, status, error } = useAppSelector(state => state.counterReducer)
    const { deleteComments } = counterSlice.actions

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchComments(5))
        }
        return ()=>{
            dispatch(deleteComments())
        }
    },[status])

    let content

    if (status === 'succeeded'){
        content = comments.map((el, index)=><Message key={index} post={el}/>)
    } else if (status === 'loading') {
        content = <p>Загрузка...</p>
    } else if (status === 'failed')
        content = <p>{error}</p>

    return (
        <div>
           <p>Comments:</p>
            {content}
        </div>
    );
};

export default Comments;