import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Confetti from 'react-confetti'
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { logOutUser } from '../../_duck/loginReducer';

export interface IHeaderProps {
    userInfo: any
}
export function Header(props: IHeaderProps) {
    const { userInfo } = props
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    return (
        <div
            style={{
                marginTop: '10px'
            }}
            className="shadow pb-3">
            <div className=' bg-danger rounded-top position-relative' style={{ height: '25vh', background: 'linear-gradient(to right, white, yellow)' }}>
                <div
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '20px',
                        zIndex: 999,
                    }}
                >
                    <Link to='/'>
                        <Button type="primary" icon={<HomeIcon />}></Button>
                    </Link>
                    <Button
                    onClick={() => {
                        dispatch(logOutUser())
                        navigate('/')
                    }}
                    style={{marginLeft:'10px'}} type="primary" icon={<PoweroffOutlined />} danger />
                </div>
                <img className='rounded-circle position-absolute' style={{ bottom: 0, left: '50px', transform: 'translateY(50%)', zIndex: '1', border: '5px solid white' }} src="./images/img_avatar.png" width={130} height={130} alt="..." />
            </div>
            <div className='px-5' style={{ marginTop: '70px', position: 'relative' }}>
                <h3 className='mt-2'>{userInfo.hoTen}</h3>
                <div className='ml-4'>

                    <span className='d-block'><CallIcon /> {userInfo.soDT}</span>
                    <span className='d-block'><MailIcon /> {userInfo.email}</span>
                </div>
                <div className="p-3">
                    <button type="button" className="btn btn-default border" data-toggle="modal" data-target="#modelId">Chỉnh sửa</button>
                    <Link to='/showing'>  <button type="button" className="btn btn-primary ml-2 animate__animated animate__bounce">Mua vé  <i className="fa-solid fa-ticket"></i></button></Link>
                </div>
                <div style={{
                    display: 'inline-block',
                    padding: '20px',
                    border: '2px dashed gray',
                    borderRadius: '10px',
                    position: 'absolute',
                    right: '20px',
                    bottom: '90px',
                }}>
                    <Confetti
                        width={220}
                        height={200} />CHÚC MỪNG! <br />Quý khách được tặng 8 bắp,<br /> 2 nước trong tháng này </div>

            </div>
        </div>
    );
}
