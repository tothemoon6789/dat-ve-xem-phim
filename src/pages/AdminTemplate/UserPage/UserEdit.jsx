import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiEditUser, apiSingIn } from '../../../service/apiAdmin';
import { useEffect } from 'react';
import { apiLogin } from '../../../service/apiHome';

const UserEdit = (props) => {
    const navigate = useNavigate()
    const modalRef = useRef()


    const [singIn, setSingIn] = useState({
        taiKhoan: '',
        matKhau: "",
        nhapLaiMatKhau: '',
        email: "",
        soDt: "",
        maNhom: "GP05",
        hoTen: "",
        maLoaiNguoiDung: 'KhachHang'
    })
    const [error, setError] = useState({
        taiKhoan: '',
        matKhau: '',
        nhapLaiMatKhau: '',
        email: '',
        soDt: '',
        hoTen: '',
    })
    const [valid, setValid] = useState({
        taiKhoanValid: false,
        matKhauValid: false,
        nhapLaiMatKhauValid: false,
        emailValid: false,
        soDtValid: false,
        hoTenValid: false,
    })
    const [onPage, setOnPage] = useState({
        fullFilled: '',
        spiner: false,
        theme: 'darkTheme',
        disable: false,
    })
    const { users, handleResetState } = props
    useEffect(() => {
        setSingIn({
            // ...users,
            taiKhoan: users.taiKhoan,
            matKhau: users.matKhau,
            nhapLaiMatKhau: users.matKhau,
            email: users.email,
            soDt: users.soDt,
            maNhom: "GP05",
            hoTen: users.hoTen,
            maLoaiNguoiDung: users.maLoaiNguoiDung,
        })
        setError({
            taiKhoan: '',
            matKhau: '',
            nhapLaiMatKhau: '',
            email: '',
            soDt: '',
            hoTen: '',
        })
        setValid({
            taiKhoanValid: true,
            matKhauValid: true,
            nhapLaiMatKhauValid: true,
            emailValid: true,
            soDtValid: true,
            hoTenValid: true,
        })
        setOnPage({
            ...onPage,
            fullFilled: '',
            spiner: false,
            disable:false,

        })
    }, [users])
    const handleOnChange = (event) => {
        const { name, value } = event.target
        setSingIn({
            ...singIn,
            [name]: value,
        })
    }
    const handleOnError = (event) => { //! onBlur
        const { name, value } = event.target
        let mess = value.trim() === '' ? "* Kh??ng ???????c ????? tr???ng!" : ''
        let { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = valid
        let { matKhau, nhapLaiMatKhau } = singIn
        switch (name) {
            case 'taiKhoan':
                taiKhoanValid = mess === '' ? true : false
                const regexUsername = /^[a-zA-Z0-9]{6,}$/
                if (value && !regexUsername.test(value)) {
                    mess = '* Vui l??ng nh???p 6 k?? t??? tr??? l??n, kh??ng bao g???m k?? t??? ?????c bi???t!'
                }
                break;
            case 'matKhau':
                matKhauValid = mess === '' ? true : false
                const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
                if (value && !regex.test(value)) {
                    mess = '* Vui l??ng nh???p 6 k?? t??? tr??? l??n, bao g???m ??t nh???t 1 in hoa, 1 in th?????ng'
                }
                break;
            case 'nhapLaiMatKhau':
                nhapLaiMatKhauValid = mess === '' ? true : false
                if (value && matKhau && matKhau !== nhapLaiMatKhau) {
                    mess = '* M???t kh???u kh??ng tr??ng!'
                }
                break;
            case 'email':
                emailValid = mess === '' ? true : false
                const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (value && !regexEmail.test(value)) {
                    mess = '* Email kh??ng h???p l???!'
                }
                break;
            case 'soDt':
                soDtValid = mess === '' ? true : false
                const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
                if (value && !regexPhone.test(value)) {
                    mess = '* S??? ??i???n tho???i kh??ng h???p l???!'
                }
                break;
            case 'hoTen':
                hoTenValid = mess === '' ? true : false
                const regexName = /^[a-zA-Z_????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\s]+$/
                if (value && !regexName.test(value)) {
                    mess = '* T??n kh??ng h???p l???!'
                }
                break;
            default:

                break;
        }
        setError({
            ...error,
            [name]: mess
        })
        setValid({
            ...valid,
            taiKhoanValid,
            matKhauValid,
            nhapLaiMatKhauValid,
            emailValid,
            soDtValid,
            hoTenValid,
        })
    }
    const handelOnSubmit = (event) => {

        event.preventDefault()
        // handleOnError(event)
        const { taiKhoanValid, matKhauValid, emailValid, soDtValid, hoTenValid, nhapLaiMatKhauValid } = valid
        if (taiKhoanValid && matKhauValid && emailValid && soDtValid && hoTenValid && nhapLaiMatKhauValid) {
            setOnPage({
                ...onPage,
                fullFilled: '',
                spiner: true,
                disable:true,
            })
            const userEdited = {
                email: singIn.email,
                hoTen: singIn.hoTen,
                maLoaiNguoiDung: singIn.maLoaiNguoiDung,
                maNhom: singIn.maNhom,
                soDT: singIn.soDt,
                taiKhoan: singIn.taiKhoan,
                matKhau: singIn.matKhau,
            }
            const data = {
                taiKhoan: singIn.taiKhoan,
                matKhau: singIn.matKhau,
            }

            apiLogin(data)
                .then((res) => {
                    apiEditUser(userEdited, res.data.content.accessToken)
                        .then((res) => {
                            alert("C???p nh???t th??nh c??ng!")
                            modalRef.current.click()
                            handleResetState()
                        })
                        .catch((error) => {
                            alert('C???p nh???t th???t b???i!')
                        })

                })
                .catch((error) => {
                })

        } else {
            setOnPage({
                ...onPage,
                fullFilled: '* Vui l??ng nh???p li???u',
                disable:false,
            })
        }
    }
    
    return (
        <div ref={modalRef} className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ch???nh s???a</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">??</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handelOnSubmit}>
                            <div className="form-group justify-content-center">
                                <input disabled={onPage.disable} value={singIn.taiKhoan} name='taiKhoan' onChange={(e) => {
                                    handleOnChange(e);
                                    handleOnError(e);
                                }} onBlur={handleOnError} className='form-control mt-2' placeholder="T??i kho???n" type="text" />
                                <div   className='text-danger'>{error.taiKhoan}</div>
                                <input disabled={onPage.disable} value={singIn.matKhau} name='matKhau' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="M???t kh???u" type="password" />
                                <div className='text-danger'>{error.matKhau}</div>
                                <input disabled={onPage.disable} value={singIn.nhapLaiMatKhau} name='nhapLaiMatKhau' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Nh???p l???i m???t kh???u" type="password" />
                                <div className='text-danger'>{error.nhapLaiMatKhau}</div>
                                <input disabled={onPage.disable} value={singIn.email} name='email' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="Email" type="email" />
                                <div className='text-danger'>{error.email}</div>
                                <input disabled={onPage.disable} value={singIn.soDt} name='soDt' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="S??? ??i???n tho???i" type="number" />
                                <div className='text-danger'>{error.soDt}</div>
                                <input disabled={onPage.disable} value={singIn.hoTen} name='hoTen' onChange={handleOnChange} onBlur={handleOnError} className='form-control mt-2' placeholder="H??? t??n" type="text" />
                                <div className='text-danger'>{error.hoTen}</div>
                                <select
                                disabled={onPage.disable}
                                    value={singIn.maLoaiNguoiDung}
                                    onChange={(e) => {
                                        setSingIn({
                                            ...singIn,
                                            maLoaiNguoiDung: e.target.value,
                                        })
                                    }}
                                    className="form-control mt-2">
                                    <option value="KhachHang">Kh??ch h??ng</option>
                                    <option value='QuanTri'>Qu???n tr???</option>
                                </select>

                                <div className="text-danger">{onPage.fullFilled}</div>
                                <div className='d-flex justify-content-end mt-5'>
                                    <button
                                    disabled={onPage.disable}
                                        type='submit' className="btn btn-primary ml-2">
                                        L??u
                                    </button>

                                </div>
                                {onPage.spiner ?
                                    <div className="d-flex justify-content-center">
                                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>


                                    </div> : ''
                                }


                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default UserEdit;