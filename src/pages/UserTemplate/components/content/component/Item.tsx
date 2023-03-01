import moment from 'moment';
import * as React from 'react';

export interface IItemProps {
    info: any
}

export function Item(props: IItemProps) {
    console.log(props.info);
    
    return (
        <div className="card mt-3">
            <div className="card-body">
                <blockquote className="blockquote">
                    <p>{props.info.tenPhim}</p>
                    <footer className="card-blockquote">Ngày đặt: <cite title="Source title">{ moment(props.info.ngayDat).format('DD/MM/YYYY')}, Rạp chiếu: {props.info?.danhSachGhe[0].tenCumRap}, Mã ghế: {props.info.danhSachGhe.map((item:any) => {
                        return item.tenGhe +', '
                    })}</cite></footer>
                </blockquote>
            </div>
        </div>

    );
}
