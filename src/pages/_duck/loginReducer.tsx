import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { apiLogin } from "../../service/apiHome";

export const loginUser = createAsyncThunk(
    'user/login',
    async (content: { data: { taiKhoan: string, matKhau: string }, navigate: NavigateFunction }) => {
        const response = await apiLogin(content.data)
        return response.data
    }
)

export interface User {
    userInfo: {},
    adminInfo: {}
    loading: boolean,
    error: string,
}
const initialState: User = {
    userInfo: {},
    adminInfo: {},
    loading: false,
    error: 'Không có lỗi!'
}
export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserInfomation: (state, action: PayloadAction<{}>) => {
            state.userInfo = action.payload
        },
        logOutUser: (state) => {
            localStorage.removeItem('movie-user')
            state.userInfo = {}
            window.alert('Đăng xuất thành công.')
            
        },
        logOutAdmin: (state) => {
            localStorage.removeItem('movie-admin')
            state.adminInfo = {}
            window.alert('Đăng xuất thành công.')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const userInfoString = JSON.stringify(action.payload.content)
                if (action.payload.content.maLoaiNguoiDung === 'KhachHang') {
                    state.userInfo = action.payload
                    localStorage.setItem('movie-user', userInfoString)
                    action.meta.arg.navigate('/')
                    alert('Đăng nhập thành công! Chuyển hướng về trang chủ.')
                } else {
                    state.adminInfo = action.payload
                    localStorage.setItem('movie-admin', userInfoString)
                    action.meta.arg.navigate('/admin')
                    alert('Đăng nhập thành công! Chuyển hướng về trang Admin.')
                }
                state.loading = false

            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = 'Không tồn tại tải khoản này!'
                alert('Tài khoản không tồn tại !')
            })
    }
})
export const { addUserInfomation, logOutUser, logOutAdmin } = loginSlice.actions
export default loginSlice.reducer 