import * as React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { Item } from './component/Item';
import { contentUserThunk } from './duck/contentUserReducer';

export interface IContentProps {
    bearer:string,
}

export default function Content(props: IContentProps) {
    console.log(props);
    const dispatch = useDispatch<AppDispatch>()
    const historyBooking = useSelector((state:RootState) => state.userContent.bookingDetail)
    console.log(historyBooking);
    
    React.useEffect(() => {
        dispatch(contentUserThunk(props.bearer))
    },[])
    const renderHistoryBooking = () => {
        return historyBooking.length>0 && historyBooking.map((item:any,index:number) => {
            return <Item info={item}/>
        })
    }
    return (
        <div className="shadow mt-3">
            <div className="p-5">
                <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#history" role="tab" aria-controls="home" aria-selected="true">Lịch sử đặt vé</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#promotion" role="tab" aria-controls="profile" aria-selected="false">Khuyến mãi</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="history" role="tabpanel" aria-labelledby="home-tab">
                            {renderHistoryBooking()}
                        </div>
                        <div className="tab-pane fade" id="promotion" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="mt-2">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src="https://cdn.tuoitrethudo.com.vn/stores/news_dataimages/tuoitrethudocomvn/092019/24/12/dcine-cinemas-thuong-hieu-rap-chieu-phim-moi-va-day-tiem-nang-gia-nhap-thi-truong-viet-nam-29-.0228.jpg" alt="Card cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Mã khuyến mãi</h5>
                                        <p className="card-text">Nhận khuyến mãi trước ngày 20/5/2023 để thưởng thức những bộ phim hay !</p>
                                        <a href="" className="btn btn-primary">Nhận ngay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
