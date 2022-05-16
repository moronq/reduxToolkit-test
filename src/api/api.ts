import {AxiosResponse} from "axios";

const axios = require('axios').default

export type GetCommentsType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export const CommentsAPI = {
    getComments: (numberPost: number = 1)=> {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${numberPost}/comments`)
            .then((response:AxiosResponse<Array<GetCommentsType>>) => response.data)
    }
}
