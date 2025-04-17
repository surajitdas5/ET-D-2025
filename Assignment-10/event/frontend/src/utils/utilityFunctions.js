import { jwtDecode } from "jwt-decode";
export function getUserFromToken(){
    const token = localStorage.getItem("eventToken")
    if(!token) return null

    try {
        let decoded = jwtDecode(token)
        return decoded.id
    } catch (error) {
        return null
    }
}

export function fomrmatDate(dateString){
    return dateString.split("T")[0]
}