import * as React from 'react';

export interface IFooterProps {
}

export function Footer(props: IFooterProps) {
    return (
        <div
            style={{
                marginTop:'10px',
                marginBottom:'10px',
                background: 'linear-gradient(to right, white, yellow)',
                // color:'white',
                padding:'100px',
                borderRadius:'0 0 5px 5px',
            }}
            className="shadow pb-3">
            Liên hệ quản trị viên: 0933 888 999<br/>
            <hr/>
            CTTNHH MTV Movie Theater <br/>
            441 Hai Bà Trưng, Q.1 TP Hồ Chí Minh <br/>
            Sale: 0931876 433
        </div>
    );
}
