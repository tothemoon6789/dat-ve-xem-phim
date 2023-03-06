import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/apiUtils"

type UserInfo = {
    email: string,
    hoTen: string,
    maLoaiNguoiDung: string,
    matKhau: string,
    soDT: string,
    taiKhoan: string,
}

type User = {
    loading: boolean,
    info: UserInfo[],
    infoForSearch: UserInfo[],
    error: string,
}
const initialState: User = {
    loading: false,
    info: [],
    infoForSearch: [],
    error: '',
}
export const adminUserThunk = createAsyncThunk(
    'admin/userManager',
    async (data: string) => {
        const response = await api.get(data)
        return response.data
    }
)
export const adminUserReducer = createSlice({
    name: 'admin/slice',
    initialState,
    reducers: {
        search : (state,action) => {
            const key = action.payload
            state.infoForSearch = state.info.filter((item) => {
                return item.hoTen.trim().toLowerCase().search(key) !== -1
            })

        }
    },
    extraReducers(builder) {
        builder
            .addCase(adminUserThunk.pending, (state, action) => {
                state.loading = true

            })
            .addCase(adminUserThunk.fulfilled, (state, action) => {
                state.loading = false
                state.info = action.payload.content
                state.infoForSearch = action.payload.content

            })
            .addCase(adminUserThunk.rejected, (state, action) => {
                state.loading = false
                state.error = 'Đã có lỗi xảy ra!'
            })
    },
})
export const {search} = adminUserReducer.actions