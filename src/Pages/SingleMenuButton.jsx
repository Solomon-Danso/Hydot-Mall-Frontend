import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuButtonDiv,MenuButtonIcon,MenuButtonLink,MenuContainer,MenuButtonOptionLink, MenuButtonMain, MenuButtonOption, MenuButtonIconAgain, SingleButtonDiv } from '../Designs/Styles/Styles'
import AnimateHeight from 'react-animate-height';
import {MdKeyboardArrowRight} from "react-icons/md";


const SingleMenuButtons = ({logo, title, path}) => {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState); // Toggle the value of dropdownOpen
  };





  return (

        <SingleButtonDiv onClick={()=>navigate(path)}> 

          <MenuButtonMain>
            <div style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
          <MenuButtonIcon onClick={toggleDropdown}>{logo}</MenuButtonIcon>
          <MenuButtonLink onClick={toggleDropdown}>{title} </MenuButtonLink>
          </div>
         
          </MenuButtonMain>

        </SingleButtonDiv>



  )
}

export default SingleMenuButtons