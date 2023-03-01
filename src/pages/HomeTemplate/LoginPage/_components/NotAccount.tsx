import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INotAccountProps {
}

export function NotAccount (props: INotAccountProps) {
  return (
    <div className='text-center mt-2 font-italic'><span>Bạn không có tài khoản ? </span><Link to='/sign-in'>Đăng ký</Link></div>
  );
}
