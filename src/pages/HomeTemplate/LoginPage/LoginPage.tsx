import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_duck/loginReducer';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { ButtonC } from '../../../components/Button/ButtonC';
import { NotAccount } from './_components/NotAccount';
import { Navigate, useNavigate } from 'react-router-dom';
import { InputC } from '../../../components/Input/InputC';
import { MES_ERROR_ACCOUNT, MES_ERROR_PASSWORD, REGEX_ACCOUNT, REGEX_PASSWORD } from '../../../utils/RegexPattern';
export interface ILoginPage {

}
const LoginPage = (props: ILoginPage) => {
    const isUserLogin = localStorage.getItem('movie-user')
    const user = useSelector((state: RootState) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [login, setLogin] = useState({
        taiKhoan: '',
        matKhau: '',
    })
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value,
        })
    }
    const handleOnsubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (login.taiKhoan==='' || login.matKhau==='') {
            alert('Vui lòng nhập liệu !')
            return
        }
        dispatch(loginUser({ data: login, navigate }))
    }
    if (isUserLogin) return <Navigate replace to='/' />

    return (
        <form onSubmit={(event) => {
            handleOnsubmit(event)
        }}
            className='container'>
            <div className='row justify-content-center '>
                <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 mt-5 border rounded py-5 mb-5 shadow">
                    <i className="fa-solid fa-film" style={{ fontSize: '60px', }} />
                    <h1>MOVIE THEATER</h1>
                    <div className='d-flex justify-content-between'>
                        <div className='ml-5'>
                            <h4 className='mb-4 text-center d-inline'>Đăng nhập</h4><br />
                            <span className='ml-3'>Chào mừng bạn quay lại.</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="from-group">
                            <label htmlFor="taiKhoan">Tài khoản</label>
                            <input className='form-control' type="text" name='taiKhoan' disabled={user.loading} onChange={handleOnchange}/>
                        </div>
                        
                        <div className="from-group">
                            <label htmlFor="matKhau">Mật khẩu</label>
                            <input className='form-control' type="password" name='matKhau' disabled={user.loading} onChange={handleOnchange}/>
                        </div>
                        
                    </div>
                    <ButtonC
                        buttonClass='btn btn-block btn-primary mt-5'
                        btnName='Đăng nhập'
                        type='submit'
                        isLoading={user.loading} />
                    <NotAccount />
                </div>
            </div>
        </form>
    );
};
export default LoginPage;