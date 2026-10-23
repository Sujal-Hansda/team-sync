import { axiosInstance } from "../../../../config/axiosInstance"

export let getAllEmployee =  async({
  page=1,
  limit=20,
  role='',
  status='',
  department='',
  search=""
})=>
{
  try {
    let res = await axiosInstance.get(`/employee?page=${page}&limit=${limit}&role=${role}&department=${department}&status=${status}&search=${search}`)
    return res.data.data;
  } catch (error) {
    console.log("error in all employee API",error);
       
  }
}
// getAllEmployee();

export let createEmployee = async(data)=>
{
  try {
    let res = await axiosInstance.post('/employee/create',data)
    console.log("Create Employee Response->",res);
    return res.data.data;
  } catch (error) {
    console.log("Error in create Employee API",error);
  }
} 
