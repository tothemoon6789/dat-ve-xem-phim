import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Spiner from "../../../components/Loading/Spiner/Spiner";
import { AppDispatch, RootState } from "../../../store";
import { adminUserThunk, search } from "./duck/adminUserReducer";





const UserPage = () => {
    const adminUser = useSelector((state:RootState) => state.adminUser)
    const {loading} = adminUser
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(adminUserThunk('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05'))
    }, [])
    const renderUserList = () => {
        return adminUser.infoForSearch.map((item,index) => {
            return  <tr key={index}>
            <td>{index+1}</td>
            <td>{item.hoTen}</td>
            <td>{item.taiKhoan}</td>
            <td>{item.matKhau}</td>
            <td>{'phan loai'}</td>

            <td>{item.email}</td>
            <td>{item.soDT}</td>
            <td>Cac nut</td>
        </tr>
        })
    }
    return (
        <div className='p-3' style={{ marginTop: '50px' }}>
            <h1>Quản trị người dùng</h1>
            <div className="form-group">
                <input
                    onChange={(event) => {
                        dispatch(search(event.target.value))
                    }}
                    type="text" className="form-control bg-dark text-white" placeholder='Nhập tên người dùng' />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Phân loại</th>

                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUserList()}
                </tbody>
            </table>
             {loading && <Spiner /> }   
          
        </div>
    );
}


export default UserPage;