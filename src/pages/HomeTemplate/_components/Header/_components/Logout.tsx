import * as React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppDispatch } from '../../../../../store';
import { logOutUser } from '../../../../_duck/loginReducer';

export interface ISinginProps {
  theme: string,
}

export function LogOut(props: ISinginProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { theme } = props

  return (
    <div>
      <button
        className='btn btn-default'
      // onClick={handleDarkTheme}
      >{theme === 'darkTheme' ? <i style={{ color: 'white' }} className="fa-solid fa-sun" ></i> : <i className="fa-solid fa-moon"></i>}
      </button>
      <NavLink to='/user'> <img className='rounded-circle img-fluid ml-2' src="./images/img_avatar.png" width='50px' height='50px' alt="..." /></NavLink>
      <button onClick={() => {
        dispatch(logOutUser())
      }} className='btn btn-danger ml-2' >Đăng xuất</button>
    </div>
  );
}
