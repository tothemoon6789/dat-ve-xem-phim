import * as React from 'react';

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <div className='d-flex p-3'>
    <div className='d-flex align-items-center ml-2'>
        <div style={{ width: "10px", height: "10px", background: "gray" }}></div>
        <span className='ml-2'>Đã đặt</span>
    </div>
    <div className='d-flex align-items-center ml-2'>
        <div style={{ width: "10px", height: "10px", background: "green" }}></div>
        <span className='ml-2'>Ghế thường</span>
    </div>
    <div className='d-flex align-items-center ml-2'>
        <div style={{ width: "10px", height: "10px", background: "orange" }}></div>
        <span className='ml-2'>Ghế VIP</span>
    </div>
    <div className='d-flex align-items-center ml-2'>
        <div style={{ width: "10px", height: "10px", background: "red" }}></div>
        <span className='ml-2'>Đang chọn</span>
    </div>
</div>
  );
}
