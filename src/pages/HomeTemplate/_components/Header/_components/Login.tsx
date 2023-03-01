import * as React from 'react';
import ButtonNavlink from '../../../../../components/Button/ButtonNavlink';

export interface ILoginProps {
    theme: string,
}

export function Login(props: ILoginProps) {
    const { theme } = props
    return (
        <div className='d-flex justify-content-end' style={{ minWidth: '400px' }}>
            <button
                className='btn btn-default'
            // onClick={handleDarkTheme}
            >   {
                    theme === 'darkTheme'
                        ? <i style={{ color: 'white' }} className="fa-solid fa-sun" ></i>
                        : <i className="fa-solid fa-moon"></i>
                }
            </button>
            <ButtonNavlink  to='/sign-in' name='Đăng ký' className='btn btn-outline-primary ml-2' />
            <ButtonNavlink  to='/login' name='Đăng nhập' className='btn btn-primary ml-2' />
        </div>
    );
}
