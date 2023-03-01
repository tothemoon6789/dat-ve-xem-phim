import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/apiUtils"
type FilmDetail = {
    biDanh: string,
    dangChieu: boolean,
    danhGia: number,
    hinhAnh: string,
    hot: boolean,
    maNhom: string,
    maPhim: number,
    moTa: string,
    ngayKhoiChieu: string,
    sapChieu: boolean,
    tenPhim: string,
    trailer: string,
}
type Film = {
    listFilm: FilmDetail[],
    listFilmForSeach: FilmDetail[]
    loading: boolean,
    error: string,
    searchKey:string,

}
const initialState: Film = {
    listFilm: [],
    listFilmForSeach: [],
    loading: false,
    error: '',
    searchKey:''
}

// Action thunk
export const manageFilmThunk = createAsyncThunk(
    'admin/listFilm',
    async (data: string) => {
        const response = await api.get(data)
        return response.data
    }
)
export const manageFilmReducer = createSlice({
    name: 'admin/manageFilmReducer',
    initialState,
    reducers: {
        addSearchKey: (state,action) => {
            state.searchKey = action.payload 
            const key = action.payload
            if (state.listFilm.length>0) {
                state.listFilmForSeach = state.listFilm.filter((item) => {
                    return item.tenPhim.toLowerCase().search(key) !== -1
                })
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(manageFilmThunk.pending, (state, action) => {
                state.loading = true  
            })
            .addCase(manageFilmThunk.fulfilled, (state, action) => {
                state.loading = false
                state.listFilm = action.payload.content
                state.listFilmForSeach = action.payload.content

            })
            .addCase(manageFilmThunk.rejected, (state, action) => {
                state.loading = false
                state.error = 'Đã phát sinh lỗi! Liên hệ quản trị viên!'
            })
    }
})
export const {addSearchKey} = manageFilmReducer.actions
export { }