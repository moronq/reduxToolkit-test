import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CommentsAPI, GetCommentsType} from "../../api/api";


type InitialStateType = {
    counter: number
    comments: Array<GetCommentsType>
    isLoading: boolean
    error: null | string | undefined
    status: "idle" | "loading" | "succeeded" | "failed" | "firstFetch"
}

const initialState: InitialStateType = {
    counter: 0,
    comments: [],
    isLoading: false,
    error: null,
    status: "idle"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.counter += 1
        },
        decrement: state => {
            state.counter -= 1
        },
        addComments: (state, action)=>{
            state.comments = state.comments.concat(action.payload)
        },
        deleteComments: (state) => {
            state.comments = []
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchComments.pending, (state)=>{
                state.isLoading = true
                state.status = 'loading'
            })
            .addCase(fetchComments.fulfilled, (state, action: any) => {
                state.isLoading = false
                state.status = 'succeeded'
                state.comments = state.comments.concat(action.payload)
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const fetchComments = createAsyncThunk('comments/fetchComments', async (numberPost: number)=>{
    const response = await CommentsAPI.getComments(numberPost)
    return (response)
})

export default counterSlice.reducer