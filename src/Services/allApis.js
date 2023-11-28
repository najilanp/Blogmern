import {BASEURL}from "./baseUrl"
import { commonAPI } from "./commonApi"

//register api
export const registerAPI=async(user)=>{
   return await commonAPI("POST",`${BASEURL}/signup`,user,"")
}
//login
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${BASEURL}/login`,user,"")
 }