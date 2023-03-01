import { FC, InputHTMLAttributes } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    name:string,
    lableName:string,
    placeholder: string,
    type:React.HTMLInputTypeAttribute,
    disabled?:boolean,
    onchange:(event:React.ChangeEvent<HTMLInputElement>) => void
}

const Input :FC<IInput> = ({name,lableName,onchange,type, placeholder})=> {
    return (
        <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label text-right">{lableName}</label>
                    <div className="col-sm-10">
                        <input 
                            onChange={(event) => {
                                onchange(event)
                            }}
                            type={type} 
                            name={name}
                            placeholder={placeholder}
                            className="form-control" />
                    </div>
                </div>
    )
}
export default Input