import Attendance from "../../features/employee module/Attendance/ui/pages/Attendance"
import Profile from "../../features/employee module/Profile/ui/pages/Profile"
import MyTask from "../../features/employee module/myTask/ui/pages/MyTask.jsx";
export let employeeRoutes = [{
  path:"/home/myTask",
  element:<MyTask/>
},
{
  path:"/home/attendance",
  element:<Attendance/>
},
{
  path:"/home/profile",
  element:<Profile/>
},
]