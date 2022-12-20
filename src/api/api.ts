import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '6e9ef89c-7a08-41f5-b578-f795ea2f7a26'}
})

export const usersAPI = {
    getUsersAPI (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUserInfoAPI () {
        return instance.get(`auth/me`).then(response => response.data)
    },
    unFollowUserAPI (id: number) {
        return instance.delete(`follow/${id}`).then(response => response)
    },
    followUserAPI (id: number) {
        return instance.post(`follow/${id}`).then(response => response)
    }
}
