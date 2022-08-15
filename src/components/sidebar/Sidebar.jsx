import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import User from '@mui/icons-material/PersonOutlineOutlined';
import Orders from '@mui/icons-material/CreditCardRounded';
import Products from '@mui/icons-material/Inventory';
import Delivery from '@mui/icons-material/LocalShipping';
import Stats from '@mui/icons-material/Assessment';
import Notifications from '@mui/icons-material/NotificationsNone';
import SystemHealth from '@mui/icons-material/MedicalInformation';
import Logs from '@mui/icons-material/QueryStats';
import Settings from '@mui/icons-material/Settings';
import Profile from '@mui/icons-material/AccountBox';
import Logout from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">horseadmin</span>
            </Link>
        </div>    
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>

                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <User className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <Products className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <Orders className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <Delivery className="icon"/>
                    <span>Delivery</span>
                </li>

                <p className="title">USEFUL</p>
                <li>
                    <Stats className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <Notifications className="icon"/>
                    <span>Notifications</span>
                </li>

                <p className="title">SERVICE</p>
                <li>
                    <SystemHealth className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <Logs className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <Settings className="icon"/>
                    <span>Settings</span>
                </li>

                <p className="title">USER</p>
                <li>
                    <Profile className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <Logout className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>    
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>    
    </div>
  )
}

export default Sidebar