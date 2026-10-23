import { Building, ChartArea, LayoutDashboard, List, PersonStanding, PersonStandingIcon, Presentation, Settings } from "lucide-react";

export let employeeNavigation = [{
  path:"/home",
  title:"Dashboard",
  icon:<LayoutDashboard/>
},
{
  path:"/home/myTask",
  title:"My-Task",
  icon:<List/>
},
{
  path:"/home/chat",
  title:"Chats",
  icon:<ChartArea/>
},
{
  path:"/home/attendance",
  title:"Attendace",
  icon:<Presentation/>
},
{
  path:"/home/profile",
  title:"Profile",
  icon:<PersonStandingIcon/>
},
{
  path:"/home/setting",
  title:"Setting",
  icon:<Settings/>
},]  