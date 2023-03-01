import React from 'react';
import { ButtonC } from './ButtonC';

const DashboardPage = () => {
    return (
        <div className='p-3' style={{ marginTop: '50px' }}>

            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="https://ednagrandmercure.vn/wp-content/uploads/2021/08/gia-bap-va-nuoc-o-cgv-3.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Khuyến mãi</h5>
                    <p className="card-text">Combo bắp nước liền tay xem hay !</p>
                    <a href="#" className="btn btn-primary">Nhận ngay !</a>
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;