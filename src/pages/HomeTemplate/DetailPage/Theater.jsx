
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Theater = (props) => {
    const {theater}= props
    return (
        <>
            <div className='d-flex'>
                <div>
                    <img width={50} height={50} src={theater.hinhAnh} alt='...' />
                </div>
                <div className='ml-2'>
                    <h6>{theater.tenCumRap}</h6>
                    <address>{theater.diaChi}</address>
                </div>
            </div>
          
            <div className='d-flex'>
                <span className=''>Lịch chiếu</span>
                <div className='ml-2'>
                    {/* {theater.lichChieuPhim?.map((item) => {
                        return <button onClick={() => {
                            console.log(item.maLichChieu);
                        }} 
                        // to='/booking'
                        ><span className='font-weight-bold text-primary ml-2'>{moment(item.ngayChieuGioChieu).format('DD/MM/YYYY')}</span></button>
                    })} */}
                    {theater.lichChieuPhim?.map((item) => {
                        return <Link 
                        to={'/booking/'+item.maLichChieu}
                        ><span className='font-weight-bold text-primary ml-2'>{moment(item.ngayChieuGioChieu).format('DD/MM/YYYY')}</span></Link>
                    })}
                </div>
            </div>
        </>
    );
};
export default Theater;