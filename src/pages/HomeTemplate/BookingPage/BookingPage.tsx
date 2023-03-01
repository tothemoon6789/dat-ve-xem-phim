import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spiner from '../../../components/Loading/Spiner/Spiner';
import { AppDispatch, RootState } from '../../../store';
import { Footer } from '../_components/Footer';
import { bookingThunk, DanhSachGhe } from './duck/bookingReducer';
import { BookingDetail } from './_components/BookingDetail/BookingDetail';
import Seat from './_components/Seat/Seat';
import { Timer } from './_components/Timer';
const BookingPage = () => {

    const [seat, setSeat] = useState<DanhSachGhe[][]>([])
    const param = useParams();
    const thongTinPhim = useSelector((state: RootState) => state.booking.thongTinPhim)
    const danhSachGhe = useSelector((state: RootState) => state.booking.danhSachGhe)
    const dispatch = useDispatch<AppDispatch>()




    const [bookingAction, setBookingAction] = useState<any>(null
    )
    const [gheChon, setGheChon] = useState<any[]>([])
    useEffect(() => {
        setBookingAction({
            ...bookingAction,
            maLichChieu: thongTinPhim.maLichChieu,
        })
    }, [])
    useEffect(() => {
        dispatch(bookingThunk('api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=' + param.id))
        let newArray: DanhSachGhe[] = [];
        let resulArray: DanhSachGhe[][] = [];
        if (danhSachGhe.length > 0) {
            danhSachGhe.map((item, index) => {
                newArray.push(item);
                if (index > 0 && (index + 1) % 16 === 0) {
                    resulArray.push(newArray)
                    newArray = [];
                }
            })
            setSeat(resulArray)
        }
    }, [danhSachGhe])
    const renderSeat = (row: DanhSachGhe[]) => {
        return row.map((seat) => {
            return <Seat seat={seat} handleOnclickSeat={handleOnclickSeat} handleOnRemoveSeat={handleOnRemoveSeat} />
        })
    }
    const renderRow = () => {
        if (seat.length > 0) {
            return seat.map((row: DanhSachGhe[]) => {
                return (
                    <div className='d-flex'>
                        {renderSeat(row)}
                    </div>
                )
            })
        }
    }
    const handleOnclickSeat = (itemClicked: DanhSachGhe) => {
        console.log(itemClicked.tenGhe);
        console.log(gheChon);
        
        
        setGheChon([...gheChon,itemClicked.tenGhe])
        if (bookingAction?.danhSachVe === undefined) {
            setBookingAction({
                maLichChieu: thongTinPhim.maLichChieu,
                danhSachVe: [
                    {
                        maGhe: itemClicked.maGhe,
                        giaVe: itemClicked.giaVe
                    }
                ]
            })
            return
        }
        setBookingAction({
            ...bookingAction,
            danhSachVe: [
                ...bookingAction.danhSachVe,
                {
                    maGhe: itemClicked.maGhe,
                    giaVe: itemClicked.giaVe
                }
            ]
        })
    }

    const handleOnRemoveSeat = (itemClicked: DanhSachGhe) => {
        setBookingAction({
            ...bookingAction,
            danhSachVe: [
                ...bookingAction.danhSachVe.filter((item: any, index: number) => {
                    return item.maGhe !== itemClicked.maGhe
                })
            ]
        })
        setGheChon([...gheChon.filter((item:any) => {
            console.log(item.tenGhe);
            console.log(itemClicked.tenGhe);
            
            return item !== itemClicked.tenGhe?.toString()
        })])
    }
    return (
        <div className='container'>
            <Timer />
            <h3>{thongTinPhim.tenCumRap} {thongTinPhim.tenRap}</h3>
            <div className='row'>

                <div className="col-md-7">
                    {seat?.length > 0
                        ?
                        <div>
                            <div className='mb-4 text-center py-4 text-white' style={{ backgroundColor: "orange", fontSize: '35px' }}>Màn Chiếu</div>
                            {renderRow()}
                        </div>
                        : 
                        <Spiner />}
                </div>

                {seat?.length > 0
                    ? <BookingDetail
                    gheChon={gheChon}
                    bookingAction={bookingAction} thongTinPhim={thongTinPhim} />
                    : <Spiner />}
            </div>
            <Footer />
        </div>
    );
};

export default BookingPage;






