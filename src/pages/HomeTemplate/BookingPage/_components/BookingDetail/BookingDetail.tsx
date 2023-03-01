import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store';
import { ButtonC } from '../../../../../components/Button/ButtonC';
import { bookingThunk } from './duck/booking';
import { useNavigate } from 'react-router-dom';

export interface IBookingDetailProps {
    thongTinPhim:any,
    bookingAction:any,
    gheChon:string[],
}

export function BookingDetail (props: IBookingDetailProps) {
    const {thongTinPhim,bookingAction,gheChon} = props
    const dispatch = useDispatch<AppDispatch>()
    const loading = useSelector((state:RootState) => state.bookingRequest.loading)
    const navigate = useNavigate()
  return (
    <div className="col-md-5">
                <div className='border rounded p-4' >
                    <div className='text-center'>
                        <div className="d-flex">
                            <img src={thongTinPhim.hinhAnh} width={70} alt="" />
                            <h2 className='ml-3'>{thongTinPhim.tenPhim}</h2>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h4 className='d-inline-block'>Ngày chiếu</h4>
                        <h4 className='d-inline-block'>{thongTinPhim.ngayChieu}</h4>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h4 className='d-inline-block'>Giờ chiếu</h4>
                        <h4 className='d-inline-block'>{thongTinPhim.gioChieu}</h4>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h4 className='d-inline-block'>Cụm rạp</h4>
                        <h4 className='d-inline-block'>{thongTinPhim.tenCumRap}</h4>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h4 className='d-inline-block'>Rạp:</h4>
                        <h4 className='d-inline-block'>{thongTinPhim.tenRap}</h4>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h4 className='d-inline-block'>Ghế chọn</h4>
                        <h4 className='d-inline-block'>{gheChon?.map((item:any) => {
                            return item + ', '
                        })}</h4>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h4 className='d-inline-block'>Tổng tiền</h4>
                        <h4 className='d-inline-block'>{bookingAction?.danhSachVe?.length !== 0 ? bookingAction?.danhSachVe?.reduce((total:any, obj:any) => {
                            return total + obj.giaVe * 1
                        }, 0) : ''} vnđ</h4>
                    </div>
                    <ButtonC 
                    buttonClass='btn btn-primary' 
                    btnName='Đặt vé ngay' 
                    handleOnclick={() => {
                        // console.log(bookingAction);
                        dispatch(bookingThunk({params:bookingAction,navigate:navigate}))
                        
                    }}
                    isLoading={loading}
                    />
                   
                </div>
            </div>
  );
}
