
/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-02-07 14:45:07
 * @LastEditTime: 2022-02-07 15:27:26
 */
declare namespace API {
    type LoginParams = {
        username: string;
        password: string;
    }
    type UserList = {
        search_data: string;
    }
    type userState = {
        account: string
        password: string
        repeat_password: string
        role: number
        dept: string
        email: string
    }
    type editUserState = {
        id: string
        dept: string
        email: string
    }
    type userId = {
        id: string
    }
    type resetPwdState = {
        id: string
        old_password: string
        new_password: string
        repeat_password: string
    }
}