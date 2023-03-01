import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import api from "../../../../utils/apiUtils";
import removeVietnameseTones from "../removeVietNameseTones";

const initialState: any = {
    maPhim: 0,
    tenPhim: '',
    biDanh: '',
    trailer: '',
    hinhAnh: undefined,
    moTa: '',
    maNhom: 'GP05',
    ngayKhoiChieu: '',
    danhGia: 0,
    hot: false,
    dangChieu: false,
    sapChieu: false,
}

export const submitNewFilmThunk = createAsyncThunk(
    'submitNewFilmThunk',
    async (formData:FormData) => {
        const response = await api.post(
            '/api/QuanLyPhim/ThemPhimUploadHinh',
            formData,
            {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGFuZ2t5OTkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJkYW5na3k5OUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsImRhbmdreTk5QGdtYWlsLmNvbSIsIkdQMDUiXSwibmJmIjoxNjc1MjQ5MTkxLCJleHAiOjE2NzUyNTI3OTF9.Ko-XRz56ANWF6nIYkp7Y3kBQUXNYYdzA0Bt4DLunP_Q',
                }
            })
        return response.data
    }
)
export const newFilmReducer = createSlice({
    name: 'newFilmReducer',
    initialState,
    reducers: {
        updateState: (state, action) => {
            console.log(action.payload);
            const { name, value } = action.payload
            switch (name) {
                case 'tenPhim':
                    state.biDanh = removeVietnameseTones(value)
                    state.tenPhim = value
                    break;
                case 'danhGia':
                    state.danhGia = parseInt(value);
                    break;
                case 'maPhim':
                    state.maPhim = parseInt(value)
                    break;
                case 'ngayKhoiChieu':
                    state.ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
                    break;
                default:
                    state[action.payload.name] = action.payload.value
                    break;
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(submitNewFilmThunk.pending, (state, action) => {
                console.log('peding');

            })
            .addCase(submitNewFilmThunk.fulfilled, (state, action) => {
                console.log(action);

            })
            .addCase(submitNewFilmThunk.rejected, (state, action) => {
                console.log(action);

            })

    },
})
export const { updateState } = newFilmReducer.actions