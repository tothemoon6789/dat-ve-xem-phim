import React from 'react';
import { useEffect } from 'react';


// type TTheaterOnDetail = {
//     index:number,

// }

const TheaterOnDetail = (props) => {
    const { theater, handleOnclickCumRap,index } = props
    // console.log(theater);
    useEffect(() => {
    //    handleOnclickCumRap(theater.cumRapChieu) 
    },[])
    return (
        <>
            <button
            style={{width:'100%'}}
            onClick={() => {
                handleOnclickCumRap(index)
            }}
            className='btn btn-default'>
                <img width={"100%"} className='rounded-circle img-thumbnail' src={theater.logo} alt='...' />
            </button>
        </>
    );

};

export default TheaterOnDetail;