import Attendance from "../../features/employee module/Attendance/ui/pages/Attendance"
import MyTask from "../../features/employee module/myTask/ui/pages/myTask"
import Profile from "../../features/employee module/Profile/ui/pages/Profile"

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