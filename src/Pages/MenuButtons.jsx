import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContainer,MenuButtonOptionLink, menuInfo, SchoolDashboardLogo, SchoolNameNMotto, SchoolName, MenuInfo, CompanyLogo, } from '../Designs/Styles/Styles'
import DropList from "./DropList"
import InnerDroplist from "./InnerDroplist"
import { AES, enc } from 'crypto-js';
import { HiOutlineClipboardCheck } from "react-icons/hi";
import {RxDashboard} from "react-icons/rx";
import {MdOutlineAddShoppingCart,MdOutlineLocalPolice,MdOutlineSecurity} from "react-icons/md"
import SingleMenuButtons from './SingleMenuButton'
import {TbBuildingWarehouse} from "react-icons/tb";
import {GiMoneyStack,GiSurferVan} from "react-icons/gi";
import {GrGroup,GrUserWorker} from "react-icons/gr";
import {RiGroupLine} from "react-icons/ri";
import {TiGroupOutline} from "react-icons/ti";
import {AiOutlineSetting} from "react-icons/ai";
import student from "../Designs/Images/background.jpg" 
import { Company, apiServer } from '../Constants /Endpoints'

const MenuButtons = () => {
  const navigate = useNavigate();

  
const [company, setCompany] = useState([])

useEffect(() => {
  fetch(apiServer + Company)
    .then(res => res.json())
    .then(data => setCompany(data));
}, []);


  return (
<MenuContainer>

{
  company.map((cmp)=>(
    <>
<MenuInfo onClick={() => { navigate("/dashboard") }}>
<CompanyLogo src={apiServer + cmp.logo} />
{cmp.companyName}
</MenuInfo>
</>
  ))
}

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
   
   <DropList logo={<RxDashboard/>} title="Dashboard">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard") }}>Home</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/profile") }}>Profile</MenuButtonOptionLink> 
  </DropList>


  <DropList logo={<MdOutlineAddShoppingCart/>} title="Products">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addProduct") }}>Add Product</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/editProduct") }}>Update Product</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/viewProduct") }}>View Product</MenuButtonOptionLink>
  </DropList>

  <DropList logo={<TbBuildingWarehouse/>} title="Warehouse">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addWarehouse") }}>Add Warehouse</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/editWarehouse") }}>Update Warehouse</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/viewWarehouse") }}>View Warehouse</MenuButtonOptionLink>
  </DropList>

  <DropList logo={<MdOutlineLocalPolice/>} title="Quality">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addQuality") }}>Add Quality</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/editQuality") }}>Update Quality</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/viewQuality") }}>View Quality</MenuButtonOptionLink>
  </DropList>

  <DropList logo={<GiMoneyStack/>} title="Account">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addAccount") }}>Add Account</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/editAccount") }}>Update Account</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/viewAccount") }}>View Account</MenuButtonOptionLink>
  </DropList>

  <DropList logo={<MdOutlineSecurity/>} title="Security">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addSecurity") }}>Add Security</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/editSecurity") }}>Update Security</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/viewSecurity") }}>View Security</MenuButtonOptionLink>
  </DropList>

  <DropList logo={<GiSurferVan/>} title="Delivery">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addDelivery") }}>Assign Delivery</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/editDelivery") }}>Update Delivery</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/viewDelivery") }}>View Delivery</MenuButtonOptionLink>
  </DropList>

  <DropList logo={<RiGroupLine/>} title="Staff">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addStaff") }}>Assign Staff</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addStaff") }}>Add Staff</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/editStaff") }}>Update Staff</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/viewStaff") }}>View Staff</MenuButtonOptionLink>
  </DropList>

  <DropList logo={<AiOutlineSetting/>} title="Settings">
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addStaff") }}>Manage Reviews</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/addStaff") }}>Manage Comments</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/editStaff") }}>Customer Reports</MenuButtonOptionLink>
    <MenuButtonOptionLink onClick={() => { navigate("/dashboard/viewStaff") }}>Invoices</MenuButtonOptionLink>
  </DropList>


<SingleMenuButtons logo={<HiOutlineClipboardCheck/>} title="Orders" path="/dashboard/Orders" /> <br/>


<SingleMenuButtons logo={<TiGroupOutline/>} title="Customers" path="/dashboard/Customers" /> <br/>


    
</MenuContainer>

  )
}

export default MenuButtons