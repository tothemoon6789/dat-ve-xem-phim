import { type } from '@testing-library/user-event/dist/type';
import * as React from 'react';

export type IInputCProps = {
  name: string,
  placeholder: string,
  lable: string,
  regexValid: RegExp,
  messError: string,
  disabled:boolean,
  type?:React.HTMLInputTypeAttribute | undefined,
  handleOnchange: (item: React.ChangeEvent<HTMLInputElement>) => void,
  handleOnBlurSuccess: (event:React.ChangeEvent<HTMLInputElement>) => void,
  htmlFor?:string,
}

export function InputC(props: IInputCProps) {
  const [valid, setValid] = React.useState('')
  const {htmlFor, name, placeholder, lable, handleOnchange, regexValid, messError,handleOnBlurSuccess, disabled,type} = props

  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>{lable}</label>
      <input
        //TODO: gửi dữ liệu qua state
        onChange={(event) => {
          handleOnchange(event)
        }}
        //TODO: Xử lý lỗi
        onBlur={(event) => {
          const value = event.target.value;
          if (value.length === 0) {
            setValid('Không được để trống!')
            return
          }
          let isValid = regexValid.test(value)
          if (!isValid) {
            setValid(messError)
            return
          }
          setValid('')
          handleOnBlurSuccess(event)
        }}
        disabled={disabled}
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder} />
      <p className="text-danger">{valid}</p>
    </div>

  );
}
