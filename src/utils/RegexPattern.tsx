export const REGEX_ACCOUNT = /^[a-zA-Z0-9]{6,}$/
export const MES_ERROR_ACCOUNT = '* Vui lòng nhập 6 ký tự trở lên, không bao gồm ký tự đặc biệt!'
export const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
export const MES_ERROR_PASSWORD = '* Vui lòng nhập 6 ký tự trở lên, bao gồm ít nhất 1 in hoa, 1 in thường'
export const REGEX_EMAIL= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const MES_ERROR_EMAIL = '* Email không hợp lệ!'
export const REGEX_PHONE= /(84|0[3|5|7|8|9])+([0-9]{8})\b/
export const MES_ERROR_PHONE = '* Số điện thoại không hợp lệ!'
export const REGEX_NAME_VIETNAMESE = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/
export const MES_ERROR_NAME_VIETNAMESE = '* Số điện thoại không hợp lệ!'