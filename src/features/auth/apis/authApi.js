import {axiosInstance} from "../../../config/axiosInstance" 
export const logoutApi= async()=>
{
  try {
    let res= await axiosInstance.post("/auth/logout")
    return res
  } catch (error) {
    console.log("Error in loggin out.",error);    
  }
}