import React from "react"
import { IconAffiliate, IconAtom2, IconBrandChrome, IconBrandTeams, IconChecklist, IconCreditCardRefund, IconGardenCart, IconHelp, IconLayoutGrid, IconPlus, IconPuzzle, IconSettingsPlus } from '@tabler/icons-react';
import LogoSvg from "../assets/images/google-icon.svg"
import { NavLink } from "react-router-dom";


function SidebarItem({icon,path}){
    return(
        <NavLink to={path} className="my-2 w-12 h-12 flex flex-row items-center justify-center text-gray-800 hover:text-sky-500 duration-300 [&.active]:text-sky-600">
           {icon}
           
                  
        </NavLink>
    )
}

export default function SideBar(){
    const SidebarItems=[
        {
            path : "/",
            icon : <img className="w-6 h-6" src={LogoSvg} alt=""/>


        },
        {
            path : "/CreateProfile",
            icon : <IconPlus/>
        },

        {
            path : "Profiles",
            icon : <IconLayoutGrid/>
        },

        {
            path : "/Store",
            icon : <IconGardenCart/>
        },
        {
            path : "/Automation",
            icon : <IconAtom2/>
        },
        {
            path : "/Schedules",
            icon : <IconChecklist/>
        },
        {
            path : "/Synchronizer",
            icon : <IconBrandChrome/>

        },
        {
            path : "/Affiliate",
            icon : <IconAffiliate/>
            
        },
        {
            path : "/Extensions",
            icon : <IconPuzzle/>
            
        },
        {
            path : "/Team members",
            icon : <IconBrandTeams/>
            
        },
        {
            path : "/Billing",
            icon : <IconCreditCardRefund/>
            
        },
        {
            path : "/Settings",
            icon : <IconSettingsPlus/>
            
        },
        {
            path : "/Help & Documents",
            icon : <IconHelp/>
            
        },



    ]
    return(
        <div className="py-6 border-r w-fit h-screen ">
            {
            SidebarItems.map((item,index)=>(
                <SidebarItem icon={item.icon} key={index} path={item.path}/>
            ))
            }
        </div>
    )
    
}
