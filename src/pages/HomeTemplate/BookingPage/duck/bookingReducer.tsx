import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { type } from "@testing-library/user-event/dist/type"
import api from "../../../../utils/apiUtils"

export type DanhSachGhe = {
    maGhe: number,
    tenGhe: string | undefined,
    maRap: number | undefined,
    loaiGhe: string | undefined,
    stt: number | undefined,
    giaVe: number ,
    daDat: boolean,
    taiKhoanNguoiDat: null | undefined
}
type ThongTinPhim = {
    maLichChieu: number | undefined,
    tenCumRap: string | undefined,
    tenRap: string | undefined,
    diaChi: string | undefined,
    tenPhim: string | undefined,
    hinhAnh: string | undefined,
    ngayChieu: string | undefined,
    gioChieu: string | undefined,
}
type Booking = {
    thongTinPhim: ThongTinPhim,
    danhSachGhe: DanhSachGhe[]
}
type Info = {
    booking: Booking
}


export const initialState = {
    thongTinPhim: {
        maLichChieu: 0,
        tenCumRap: undefined,
        tenRap: undefined,
        diaChi: undefined,
        tenPhim: undefined,
        hinhAnh: undefined,
        ngayChieu: undefined,
        gioChieu: undefined,
    },
    danhSachGhe: [
        {
            maGhe: 0,
            tenGhe: undefined,
            maRap: undefined,
            loaiGhe: undefined,
            stt: undefined,
            giaVe: 0,
            daDat: false,
            taiKhoanNguoiDat: undefined,
        }
    ]
}
export const bookingThunk = createAsyncThunk(
    'booking',
    async (lichChieu: string) => {
        const response = await api.get(lichChieu)
        return response.data
    }
)
export const bookingSlicer = createSlice({

    name: 'bookingSlicer',
    initialState,
    reducers: {
        addSeat: (state,action) => {
            if (state.danhSachGhe.length>0) {
                const itemClicked = state.danhSachGhe.findIndex((item) => {
                    
                    return item.maGhe === action.payload.maGhe
                })
                // console.log(itemClicked);
                if (itemClicked!==-1) {
                    state.danhSachGhe[itemClicked].daDat = true
                }
                
            }
        },
        removeSeat:(state,action) => {
             
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(bookingThunk.pending, (state, action) => {
                // console.log(action);

            })
            .addCase(bookingThunk.fulfilled, (state, action) => {
                // console.log(action);
                state.thongTinPhim = action.payload.content.thongTinPhim
                state.danhSachGhe = action.payload.content.danhSachGhe

            })
            .addCase(bookingThunk.rejected, (state, action) => {
                // console.log(action);

            })
    }
}
)

export const {addSeat} = bookingSlicer.actions