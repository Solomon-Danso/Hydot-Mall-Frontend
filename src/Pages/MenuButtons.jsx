import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContainer,MenuButtonOptionLink, menuInfo, SchoolDashboardLogo, SchoolNameNMotto, SchoolName, MenuInfo, } from '../Designs/Styles/Styles'
import DropList from "./DropList"
import InnerDroplist from "./InnerDroplist"
import { AES, enc } from 'crypto-js';
import { GiTeacher } from "react-icons/gi";
import { RiAdminFill,RiBarChartGroupedFill,RiComputerFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { FaLayerGroup,FaCity } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { BsGraphUpArrow,BsPersonCheck,BsPersonFillAdd} from "react-icons/bs";
import { MdAttachMoney,MdOutlineSportsSoccer,MdLocalLibrary,MdCastForEducation,MdPerson,MdOutlineHealthAndSafety } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { FcDepartment,FcPlanner } from "react-icons/fc";
import { LiaChalkboardSolid } from "react-icons/lia";



const MenuButtons = () => {
  const navigate = useNavigate();

  

  



  return (
<MenuContainer>

<MenuInfo onClick={() => { navigate("/admin") }}>
Hydot Mall Enterprise limited
</MenuInfo>
<br/>

   {/*
   
   
   {
  specificRole==="SuperiorUser"||specificRole==="HeadTeacher" ? (
  <>
  <DropList logo={<HiUserGroup/>} title="Students">
    <MenuButtonOptionLink onClick={() => { navigate("/admin/students") }}>Admit Student</MenuButtonOptionLink>
      
    </DropList>
  </>
  ):(
  <></>
  )
} 
   
   */} 
   
  <DropList logo={<HiUserGroup/>} title="Students">
    <MenuButtonOptionLink onClick={() => { navigate("/admin/students") }}>Admit Student</MenuButtonOptionLink>
      
  </DropList>
         
  <DropList logo={<RiAdminFill/>} title="Admin">
      
      <InnerDroplist title="Superior User">
      <MenuButtonOptionLink onClick={() => { navigate("/admin/pass") }}>Profile Picture </MenuButtonOptionLink>
      <MenuButtonOptionLink onClick={() => { navigate("/admin/test") }}>Update Details</MenuButtonOptionLink>
        </InnerDroplist>
      
  </DropList>


    
</MenuContainer>

  )
}

export default MenuButtons