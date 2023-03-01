import * as React from 'react';

export interface IButtonCProps {
  btnName?:string,
  isLoading?: boolean,
  messError?: string,
  type?:"button" | "submit" | "reset" | undefined,
  buttonClass:string|undefined,
  handleOnclick?: () => void
}

export function ButtonC(props: IButtonCProps) {
  const {btnName, isLoading, handleOnclick, messError,buttonClass, type} = props
  return (
  <>
    <p className='text-danger'>{messError}</p>
    <button
      onClick={() => handleOnclick && handleOnclick()}
      type={type}
      disabled={isLoading}
      className={buttonClass}>
      {isLoading ? <span className="spinner-grow spinner-grow-sm"></span> : ''}
      {btnName}
    </button>
  </>
  );
}
