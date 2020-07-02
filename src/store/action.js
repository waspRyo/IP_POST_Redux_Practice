import {ADDITION, SUBTRACTION} from './actionTypes';

// despatchによって発送される状態更新の指示をActionと呼ぶ
// Actionに求められる条件はtypeというプロパティをもっているプレインオブジェクト
// typeはどういった種類の更新なのかを指定するもの
// typeプロパティによって指定される値をAction typeと呼ぶ
export const addition = () => ({
  type: ADDITION
})

export const subtraction = () => ({
  type: SUBTRACTION
})
