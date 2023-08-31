import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardContainer } from '../Designs/Styles/Styles';
import { AES, enc } from 'crypto-js';
import { DateNTime, HomeDetailsGrouper, HomeGrouper, HomeLogo, HomePage, HomePageBanner, HomeSchoolName, HomeUserName, HomeUserPic, HomeUserSpecificRole, MenuButtonOptionLink, ProfileButtonOptionLink, ProfileDetails, ProfileNDate,  } from '../Designs/Styles/Styles'
import pic1 from "../Designs/Images/download.png"
import { useNavigate } from 'react-router-dom'
import AnimateHeight from 'react-animate-height';
import { apiServer } from '../Constants /Endpoints';
import HeadernSearch from '../Components/Headers/HeadernSearch';
import Home from '../Components/Home/Home';



const Dashboard = () => {
  

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const encryptedData = sessionStorage.getItem("userDataEnc");
    const encryptionKey = '$2a$11$3lkLrAOuSzClGFmbuEAYJeueRET0ujZB2TkY9R/E/7J1Rr2u522CK';
    const decryptedData = AES.decrypt(encryptedData, encryptionKey);
    const decryptedString = decryptedData.toString(enc.Utf8);
    const parsedData = JSON.parse(decryptedString);
      setUserInfo(parsedData);
  }, []);
  const profilePic = apiServer+userInfo.profilePicture

  
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState); 
  };

  const navigate = useNavigate();
  function formatDate(date) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);
    const weekday = weekdays[date.getDay()];
    const month = months[date.getMonth()];
   
   
  

   
  
    const formattedDate = `${weekday}, ${day}${daySuffix} ${month}`;
  
    return formattedDate;
  }
  
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  
const [sysDate, setSysDate] = useState("")

  
  useEffect(()=>{
 const date = new Date();
 setSysDate(formatDate(date))
  },[])
  







  const [toggle, setToggle] = useState(true)
  const [search, setSearch] = useState("")
  const toggler = () => {
      setToggle((prevState) => !prevState); 
    };



  return (
   <DashboardContainer>


<>
<HeadernSearch pic={profilePic} name={userInfo.fullName} toggle={toggle} toggler={toggler}/>

<ProfileNDate  onClick={()=>toggler()}>
<DateNTime>
  {sysDate}
</DateNTime>

<ProfileDetails>

<AnimateHeight height={dropdownOpen?"auto":0} duration={500}>    
<ProfileButtonOptionLink onClick={() => { navigate("/admin/viewProfile"); toggleDropdown() }}>View Profile </ProfileButtonOptionLink>
<ProfileButtonOptionLink onClick={() => { navigate("/admin/test"); toggleDropdown() }}>Edit Profile </ProfileButtonOptionLink>
<ProfileButtonOptionLink onClick={() => { navigate("/admin/test"); toggleDropdown() }}>Notifications </ProfileButtonOptionLink>
<ProfileButtonOptionLink onClick={() => { navigate("/admin/test"); toggleDropdown() }}>Chats </ProfileButtonOptionLink>

</AnimateHeight>

 </ProfileDetails>

</ProfileNDate>

    </>

    


    <Routes>
          
    <Route path="/" element={<Home />} />

          
          {
            /*
            
                <Route path="/" element={<Home />} />
                  <Route path="viewProfile" element={<Profile/>} />
                  
          
          
                    {
                       specificRole==="SuperiorUser"||specificRole==="HeadTeacher" ? (
                       <>
                        <Route path="test" element={<Test />} />  
                       </>
                       ):(
                       <>
                        <Route path="*" element={<PermissionDenied />} />
                       </>
                       )
                    }
            
            
            */
          }              
                    
                    
          
              </Routes>
          


    
    </DashboardContainer>

 
  )
}

export default Dashboard