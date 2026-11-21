import { axiosInstance } from "../../../../config/axiosInstance";

export const createDepartment = async(data)=>
{
  try {
    let res = await axiosInstance.post("/departments/create",data)
    console.log(res);
    return res    
  } catch (error) {
     console.log("Error in department creation",error);   
  }
}