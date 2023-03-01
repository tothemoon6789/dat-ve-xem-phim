import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../../../utils/apiUtils"


export const filmDetailThunk = createAsyncThunk(
    'filmDetailThungk',
    async (data: string) => {
        const response = await api.get(data)
        return response.data
    }
)

type LichChieuPhim = {
    giaVe: number | string,
    maLichChieu: string,
    maRap: string,
    ngayChieuGioChieu: string,
    tenRap: string,
    thoiLuong: number|undefined|string,
}
type CumRapChieu = {
    diaChi: string,
    hinhAnh: string,
    lichChieuPhim: LichChieuPhim[],
    maCumRap: string,
    tenCumRap: string,
}
type HeThongRapChieu = {
    cumRapChieu: CumRapChieu[],
    logo: string,
    maHeThongRap: string,
    tenHeThongRap: string,
}
export interface Detail {
    film: {
        biDanh: string | undefined,
        dangChieu: boolean | string | undefined,
        danhGia: number | string | undefined,
        hinhAnh: string | undefined,
        hot: boolean | string | undefined,
        maNhom: string | undefined,
        maPhim: number | string | undefined,
        moTa: string | undefined,
        ngayKhoiChieu: string | undefined,
        sapChieu: boolean | string | undefined,
        tenPhim: string | undefined,
        trailer: string | undefined,
        heThongRapChieu: HeThongRapChieu[]
    },
    loading: boolean,
}
const initialState: Detail = {
    film: {
        biDanh: '',
        dangChieu: '',
        danhGia: '',
        hinhAnh: '',
        hot: '',
        maNhom: '',
        maPhim: '',
        moTa: '',
        ngayKhoiChieu: '',
        sapChieu: '',
        tenPhim: '',
        trailer: '',
        heThongRapChieu: [{
            cumRapChieu: [{
                diaChi: '',
                hinhAnh: '',
                lichChieuPhim: [{
                    giaVe: 'number',
                    maLichChieu: '',
                    maRap: '',
                    ngayChieuGioChieu: '',
                    tenRap: '',
                    thoiLuong: '',
                }],
                maCumRap: '',
                tenCumRap: '',
            }],
            logo: '',
            maHeThongRap: '',
            tenHeThongRap: '',
        }]
    },
    loading: false,
}
export const detailFilmSlicer = createSlice({
    name: 'detailFilm',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(filmDetailThunk.pending, (state, action) => {
                state.loading = true
            })
            .addCase(filmDetailThunk.fulfilled, (state, action) => {

                state.film = action.payload.content
                state.loading = false
            })
            .addCase(filmDetailThunk.rejected, (state, action) => {
                window.alert('Đã xảy ra lỗi!')
            })
    }
})