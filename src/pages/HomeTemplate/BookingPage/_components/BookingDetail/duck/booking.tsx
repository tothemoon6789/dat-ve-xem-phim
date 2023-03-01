import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { parseJSON } from "jquery"
import { NavigateFunction } from "react-router-dom"
import api from "../../../../../../utils/apiUtils"

const localToken = window.localStorage.getItem('movie-user')
// if(localToken ===null) return
const userInfo = localToken && parseJSON(localToken)

export const bookingThunk = createAsyncThunk(
    'boookingThunk',
   async (data:{params:any, navigate:NavigateFunction}) => {
        const response = await api.post(
            '/api/QuanLyDatVe/DatVe',
            data.params,
            {
                headers:{
                    Authorization: 'Bearer ' + userInfo.accessToken
                    // Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicGhhbW5nb2NsaW5oIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicG5saW5oNjc4OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsInBubGluaDY3ODlAZ21haWwuY29tIiwiR1AwNSJdLCJuYmYiOjE2NzczOTcyNjAsImV4cCI6MTY3NzQwMDg2MH0.fqSUltClPA6ZZE-2PRYdbByT7eNCscW-r_jPvm12ve0'
                }
            }
        )
        return response.data
   }
)
const initialState = {
    loading:false,
}
export const bookingSlice = createSlice({
    name:'bookingSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(bookingThunk.pending, (state,action) => {
             state.loading=true
             console.log(action);
             console.log(userInfo.accessToken);
             
             
            })
            .addCase(bookingThunk.fulfilled,(state,action) => {
                state.loading=false
                alert('Đặt vé thành công!') 
                action.meta.arg.navigate('/user')
                console.log(action);
                console.log(userInfo.accessToken);
            })
            .addCase(bookingThunk.rejected,(state,action) => {
                state.loading=false 
                console.log(action);
                console.log(userInfo.accessToken);
                alert('Chọn ghế trước khi đặt vé!')
                
            })
    }
})
export {}