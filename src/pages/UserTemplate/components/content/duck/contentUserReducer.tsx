import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../../utils/apiUtils"

const initialState: any = {
    bookingDetail: {}
}
export const contentUserThunk = createAsyncThunk(
    'contentUserThung',
    async (params: string) => {
        const response = await api.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan',undefined,{
            headers:{
                Authorization:'Bearer '+ params
            }
        })
        return response.data
    }
)
export const contentUserReducer = createSlice({
    name:'contentUserReducer',
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {
        builder
         .addCase(contentUserThunk.pending,(state,action) => {
            console.log(action);
         })
         .addCase(contentUserThunk.fulfilled, (state,action) => {
            state.bookingDetail = action.payload.content.thongTinDatVe
            // console.log(action);
         })
         .addCase(contentUserThunk.rejected, (state,action) => {
            console.log(action);
             
         })
    }
})
export { }