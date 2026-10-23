import { Building, ChartArea, Files, LayoutDashboardIcon, List, PersonStanding, Settings } from "lucide-react";
export let adminNavigation = [{
  path:"/home",
  title:"Dashboard",
  icon:<LayoutDashboardIcon/>
},
{
  path:"/home/task",
  title:"Task",
  icon:<List/>
},
{
  path:"/home/chat",
  title:"Chats",
  icon:<ChartArea/>
},
{
  path:"/home/employee",
  title:"Employee",
  icon:<PersonStanding/>
},
{
  path:"/home/documents",
  title:"Documents",
  icon:<Files/>
},
{
  path:"/home/department",
  title:"Department",
  icon:<Building/>
},
{
  path:"/home/setting",
  title:"Settings",
  icon:<Settings />
}
]  