import Settings from "../../features/settings/ui/pages/Settings";
import Home from "../../features/dashboard/ui/pages/Home"
import Chat from "../../features/chats/ui/pages/Chat";
export let commonRoutes= [{
  path:"",
  element:<Home/>,
},
{
  path:"setting",
  element:<Settings/>
},
{
  path:"chat",
  element:<Chat/>
}]