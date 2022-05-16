import React from 'react';
import {GetCommentsType} from "../../api/api";

type MessageType = {
    post: GetCommentsType
}

const Message: React.FC<MessageType> = ({post}) => {

    return (
        <div>
            <h2>{post.name}</h2>
            <h3>{post.body}</h3>
        </div>
    );
};

export default Message;