import * as React from 'react';

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <div className="container-fluid py-4">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h4>GÓC ĐIỆN ẢNH</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item' style={{ background: 'none' }}><a href="">THỂ LOẠI PHIM</a></li>
                    <li className='list-group-item' style={{ background: 'none' }}><a href="">BÌNH LUẬN PHIM</a></li>
                    <li className='list-group-item' style={{ background: 'none' }}><a href="">BLOG ĐIỆN ẢNH</a></li>
                    <li className='list-group-item' style={{ background: 'none' }}><a href="">PHIM HAY THÁNG</a></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h4>HỖ TRỢ</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item' style={{ background: 'none' }}><a href="">GÓP Ý</a></li>
                    <li className='list-group-item' style={{ background: 'none' }}><a href="">SALE &amp; SERVICES</a></li>
                    <li className='list-group-item' style={{ background: 'none' }}><a href="">RẠP</a></li>
                    <li className='list-group-item' style={{ background: 'none' }}><a href="">GIÁ VÉ TUYỂN DỤNG</a></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h4>KẾT NỐI</h4>
                <button className='btn'>
                    <img src="https://static.chotot.com/storage/default/facebook.svg" alt="Facebook" />
                </button>
                <button className='btn'>
                    <img src="https://static.chotot.com/storage/default/youtube.svg" alt="Youtube" />
                </button>
                <button className='btn'>
                    <img src="https://static.chotot.com/storage/default/linkedin.svg" alt="LinkedIn" />
                </button>
                <h4 className='mt-3'>Dowload APP</h4>
                <div className="d-flex">

                    <div>
                        <img width={100} height={100} src="https://static.chotot.com/storage/default/group-qr.jpeg" alt="Download App" />
                    </div>
                    <div className='d-flex flex-column'>
                        <button className='btn'>
                            <img src="https://static.chotot.com/storage/default/ios.svg" alt="App Store" />
                        </button>
                        <button className='btn ml-2'>
                            <img src="https://static.chotot.com/storage/default/android.svg" alt="Play Store" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr className='bg-white' style={{ opacity: '0.2' }} />
        <div>
            <i className="fa-solid fa-film text-primary" style={{ fontSize: '100px', }} />
            <h4>CÔNG TY TNHH MTV BBM MOVIE THEATER</h4>
            <address>
                ĐỊA CHỈ: 442 Nguyễn Thị Minh Khai, P.3, Hồ Chí Minh <br />
                Tel: <a href="tel:028990999">028.990.999</a><br/>
                <span>Designed by: <a href="#">Linh Pham</a></span>
            </address>
        </div>
    </div>
</div>
  );
}
