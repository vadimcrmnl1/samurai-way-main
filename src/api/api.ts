import axios from "axios";
import {UserProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '6e9ef89c-7a08-41f5-b578-f795ea2f7a26'}
})


export const usersAPI = {
    getUsersAPI(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unFollowUserAPI(id: number) {
        return instance.delete(`follow/${id}`).then(response => response)
    },
    followUserAPI(id: number) {
        return instance.post(`follow/${id}`).then(response => response)
    },

}
export const profileAPI = {
    getProfile(userId: string | undefined) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string | undefined) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(userStatus: string) {
        return instance.put(`profile/status`, {status: userStatus})
    },
    updatePhoto(file: {}) {
        const formData: any = new FormData()
        formData.append('image', file)
        return instance.put<UpdatePhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(data: EditProfileRequestType) {
        return instance.put(`profile`, data)
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
    },
}

export const loginAPI = {
    login(email: string, password: string, rememberMe: boolean, captcha?: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}
export type UpdatePhotoResponseType = {
    data: {
        small: string
        large: string
    }
    resultCode: number
    messages: string[]
}
export type EditProfileRequestType = {
    userId: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
export type EditProfileResponseType = {
    resultCode: number
    messages: string[]
    data: UserProfileType
}