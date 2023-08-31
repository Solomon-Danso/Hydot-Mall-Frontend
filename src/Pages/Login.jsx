import React, { useEffect, useState } from 'react'
import { LoginPage,LoginWrap,LoginDiv,AppName, SchoolLogo, AppDesc, HDSS_Form, FormInput, HDSS_Label, Button } from '../Designs/Styles/Styles'
import student from "../Designs/Images/background.jpg" 
import { colors } from '../Designs/Colors'
import { useNavigate } from 'react-router-dom'
import { Show } from '../Constants /Alerts'
import { apiServer,LoginEndpoint} from '../Constants /Endpoints'
import { AES, enc } from 'crypto-js';

const Login = () => {

  const navigate = useNavigate();
  const [email, setuserId] = useState("");
  const [password, setuserPassword] = useState("")
  

const handleSubmit = async (event) => {
  event.preventDefault();
    
  Show.showLoading("Processing Data");
    try {

  
      const response = await fetch(apiServer+LoginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      });

      const data = await response.json();
      console.log(data)
  
      if (response.ok) {
        
        Show.hideLoading();

          sessionStorage.setItem("userDataEnc", AES.encrypt(JSON.stringify(data), '$2a$11$3lkLrAOuSzClGFmbuEAYJeueRET0ujZB2TkY9R/E/7J1Rr2u522CK').toString()); 
       
          Show.proceedOrCancel("Are you sure you want to proceed?", (proceed) => {
            if (proceed) {
              Show.Success("Login Successfull");
       
              navigate("/dashboard");
            } else {
              window.location.reload();
            }
          });
          
       
       
        
       
        
      } else {
        Show.Attention("Login Failed");
      }
    } catch (error) {

      Show.Attention(error);
    }

}



  return (
   <LoginPage>

<LoginWrap>

<LoginDiv background={colors.primary} flex={0.55} hide={true}>
      
      <img
        src={student}
        style={{
          width: "100%",
          height: "90%",
          borderRadius: 10,
          marginBottom: 10,
          top:0
        }}
        alt="Introduction"
      />
      <AppName style={{ textAlign: "center", color: "white"}}>
        Hydot School System
        <br />
        <span style={{ fontWeight: "bold" }}>(HDSS)</span><br/>
      </AppName>
    </LoginDiv>



        <LoginDiv background={"white"} flex={0.45} hide={false}>
      
        <SchoolLogo
            src={student}
            alt="icon"
            style={{ width: 65, height: 65 }}
          />
          <AppDesc style={{ color: "black", marginTop: 20, marginBottom: 50 }}>
            Sign in to you account
          </AppDesc>

          <HDSS_Form
          onSubmit={handleSubmit}
          style={{ fontSize: 12 }}
          >
            <HDSS_Label>Email *</HDSS_Label>
           
                <FormInput
                  type="email"
                  required
                  placeholder="XXXXX"
                  onChange={(e) => setuserId(e.target.value)}
                  style={{ marginBottom: 25 }}
                />

          <HDSS_Label>Password *</HDSS_Label>
           
           <FormInput
             type="password"
             required
             placeholder="....."
             onChange={(e) => setuserPassword(e.target.value)}
             style={{ marginBottom: 25 }}
           />

          <div
                  style={{
                    display: "flex",
                    justifyContent: 'flex-end',
                    marginTop: 5,
                    marginBottom: 30,
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                
                  <button
                    onClick={() => navigate("/resetpassword")}
                    style={{
                      fontSize: 11,
                      color: colors.primary,
                      textDecoration: "underline",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    type="button"
                  >
                    Forgot Password?
                  </button>
                </div>

          <Button
          background={colors.primary}
          color="white"
          border={colors.primary}
          style={{ marginTop: 25, width: "100%", }}
          type="submit"
          >

          Sign in
          </Button>

          </HDSS_Form>




          <p style={{ textAlign: "center", fontSize: 10, color: "gray", marginTop:"10vh"}}>
            Hydot Mall System © {new Date().getFullYear()} All rights
            reserved.
          </p>
          <p style={{ textAlign: "center", fontSize: 10, color: "gray" }}>
            v.1.1.1
          </p>


        </LoginDiv>

      

</LoginWrap>





   </LoginPage>
  )
}

export default Login