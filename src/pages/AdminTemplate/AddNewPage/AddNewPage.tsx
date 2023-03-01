import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { useDispatch } from 'react-redux';
import { submitNewFilmThunk, updateState } from './duck/newFilmReducer';
import Input from './components/Input';

const AddNewPage = () => {
    const newFilm = useSelector((state: RootState) => state.adminNewFilm)
    console.log(newFilm);
    const dispatch = useDispatch<AppDispatch>()
    console.log(newFilm);

    const handleOnsubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("tenPhim", newFilm.tenPhim);
        formData.append("biDanh", newFilm.biDanh);
        formData.append("trailer", newFilm.trailer);
        formData.append("hinhAnh", newFilm.hinhAnh);
        formData.append("moTa", newFilm.moTa);
        formData.append("maNhom", "GP05");
        formData.append("ngayKhoiChieu", newFilm.ngayKhoiChieu);
        formData.append("danhGia", newFilm.danhGia);
        formData.append("hot", newFilm.hot);
        formData.append("dangChieu", newFilm.dangChieu);
        formData.append("sapChieu", newFilm.sapChieu);
        dispatch(submitNewFilmThunk(formData))

    }
    return (
        <div className='p-3' style={{ marginTop: '50px' }}>
            <form onSubmit={handleOnsubmit}>
                <Input
                    name='tenPhim'
                    type='text'
                    lableName='Tên phim'
                    placeholder='Nhập tên phim'
                    onchange={(event) => dispatch(updateState({ name: event.target.name, value: event.target.value }))} />
                <Input
                    name='trailer'
                    type='text'
                    lableName='Trailer'
                    placeholder='Nhập trailer'
                    onchange={(event) => dispatch(updateState({ name: event.target.name, value: event.target.value }))} />
                <Input
                    name='moTa'
                    type='text'
                    lableName='Mô tả'
                    placeholder='Nhập mô tả'
                    onchange={(event) => dispatch(updateState({ name: event.target.name, value: event.target.value }))} />
                <Input
                    name='ngayKhoiChieu'
                    type='datetime-local'
                    lableName='Ngày khởi chiếu'
                    placeholder='Nhập ngày khởi chiếu'
                    onchange={(event) => dispatch(updateState({ name: event.target.name, value: event.target.value }))} />
                <Input
                    name='dangChieu'
                    type='checkbox'
                    lableName='Đang chiếu'
                    placeholder='Nhập ngày khởi chiếu'
                    onchange={(event) => dispatch(updateState({ name: event.target.name, value: event.target.checked }))} />
                <Input
                    name='sapChieu'
                    type='checkbox'
                    lableName='Sắp chiếu'
                    placeholder='Nhập ngày sắp chiếu'
                    onchange={(event) => dispatch(updateState({ name: event.target.name, value: event.target.checked }))} />

                <Input
                    name='hot'
                    type='checkbox'
                    lableName='Hot'
                    placeholder='Nhập hot'
                    onchange={(event) => dispatch(updateState({ name: event.target.name, value: event.target.checked }))} />

                <Input
                    name='danhGia'
                    type='number'
                    lableName='Đánh giá'
                    placeholder='Nhập đánh giá'
                    onchange={(event) => dispatch(updateState({ name: event.target.name, value: event.target.value }))} />
                <Input
                    name='hinhAnh'
                    type='file'
                    lableName='Hình ảnh'
                    placeholder='Nhập tên phim'
                    onchange={(event) => {
                        if (!event.target.files) return
                        dispatch(updateState({ name: event.target.name, value: event.target.files[0] }))
                    }} />
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-right"></label>
                    <div className="col-sm-10">
                        <button
                            className="btn btn-primary btn-lg btn-block">Thêm phim</button>
                    </div>
                </div>

            </form>


        </div>
    );

}

export default AddNewPage;