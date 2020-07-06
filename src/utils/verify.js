// 手机号验证
export const isMobilePhone = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);