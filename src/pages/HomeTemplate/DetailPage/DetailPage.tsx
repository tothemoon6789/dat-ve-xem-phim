import { data } from 'jquery';
import moment from 'moment';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Week from './Week';
import { AppDispatch, RootState } from '../../../store';
import { filmDetailThunk } from './duck/detailReducer';
import { useSelector } from 'react-redux';
import TheaterOnDetail from './TheaterOnDetail';
import Theater from './Theater';
const DetailPage = () => {
    const [i, setI] = useState(0)
    const dispatch = useDispatch<AppDispatch>()
    const filmDetail = useSelector((state: RootState) => state.filmDetail.film)
    const param = useParams();
    useEffect(() => {
        const url = '/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=' + param.id
        dispatch(filmDetailThunk(url))
    }, [])
    const renderTheaterDetail = () => {
        if (filmDetail.heThongRapChieu.length>0) {
            return filmDetail.heThongRapChieu[i].cumRapChieu.map((item, index) => {
                return <Theater key={index} theater={item} />
            })
        }
    }
    const handleOnclickCumRap = (index: number) => {
        setI(index)
    }
    const renderTheater = () => {
        
        if (filmDetail.heThongRapChieu.length>0) {
            return filmDetail.heThongRapChieu.map((theater, index) => {
                return (
                    <div key={index} className="col-2 col-md-12 p-0">
                        <TheaterOnDetail theater={theater} index={index} handleOnclickCumRap={handleOnclickCumRap} />
                    </div>
                )
            })
        }
    }
    return (
        <>
            <div className='container'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/' >Trang chủ</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Chi tiết</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-md-4">
                        <img className='img-fluid' src={filmDetail.hinhAnh} alt='...' />
                    </div>
                    <div className="col-md-8">
                        <h2>{filmDetail.tenPhim}</h2>
                        <p>{filmDetail.moTa}</p>
                        <table >
                            <tbody>
                                <tr>
                                    <td className='border-bottom p-2'>Đánh giá</td>
                                    <td className='border-bottom p-2'>{filmDetail.danhGia}</td>
                                </tr>
                                <tr>
                                    <td className='border-bottom p-2'>Độ hot</td>
                                    <td className='border-bottom p-2'>Rất hot</td>
                                </tr>
                                <tr>
                                    <td className='border-bottom p-2'>Ngày khởi chiếu</td>
                                    <td className='border-bottom p-2'>{moment(filmDetail.ngayKhoiChieu).format('DD/MM/YYYY')}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href={filmDetail.trailer}>
                                            <button
                                                className='btn btn-primary mt-2'>XEM TRAILER</button>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-2 d-flex d-md-block">
                        {/* loading ripple
                        {theater.loading ? <div className='d-flex justify-content-center'><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> : ''} */}
                        {renderTheater()}
                    </div>
                    <div className="col-md-10">
                        <div className='justify-content-between d-flex'>
                            <Week />
                        </div>

                        {renderTheaterDetail()}

                    </div>
                </div>
            </div>
        </>
    );
}
export default DetailPage