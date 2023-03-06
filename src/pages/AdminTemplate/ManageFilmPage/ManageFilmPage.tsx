
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Spiner from "../../../components/Loading/Spiner/Spiner";
import { AppDispatch, RootState } from "../../../store";
import { addSearchKey, manageFilmThunk } from "./duck/manageFilmReducer";
import FilmItem from "./_components/FilmItem";

export interface IManageFilmPage {

}
const ManageFilmPage = (props:IManageFilmPage) => {
    const manageFilm = useSelector((state:RootState) => state.manageFilm)
    const {error,listFilmForSeach,loading} = manageFilm
    
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
       dispatch(manageFilmThunk('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05'))  
       
    },[])
    const renderListFilm = () => {
        if(error!==''){
            alert(error)
            return
        }
        if (loading) {
            return <Spiner/>
        }
        if (listFilmForSeach.length>0) {
            return listFilmForSeach.map((film:any, index:number) => {
                // console.log(film);
                return <FilmItem key= {index} filmItem = {film}/>
            })
        }

    }
    return (
        <div className='container p-3' style={{marginTop:'50px'}}>
            <h1>Quản lý phim</h1>
            <div className="form-group mt-2">
                <input
                onChange={(e) => {
                    dispatch(addSearchKey(e.target.value))
                }}
                type="text" className="form-control" placeholder='Nhập tên phim' />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã phim</th>
                        <th>Hình ảnh</th>
                        <th>Tên phim</th>
                        <th>Mô tả</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                   {renderListFilm()}
                </tbody>
            </table>

        </div>
    );
   
};
export default ManageFilmPage

