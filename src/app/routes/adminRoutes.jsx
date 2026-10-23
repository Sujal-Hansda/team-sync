import { Children } from "react";
import Department from "../../features/admin module/departments/ui/pages/Department";
import Document from "../../features/admin module/documents/ui/pages/Document";
import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Task from "../../features/admin module/tasks/ui/pages/Task";
import AddEmployee from "../../features/admin module/employees/ui/pages/AddEmployee";

export let adminRoutes = [{
  path:"/home/employee",
  element:<Employee/>,
},
{
  path:"/home/add-employee",
  element:<AddEmployee/>
},
{
  path:"/home/department",
  element:<Department/>
},
{
  path:"/home/task",
  element:<Task/>
},
{
  path:"/home/documents",
  element:<Document/>  
},
] 