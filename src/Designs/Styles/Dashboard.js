import styled from "styled-components";
import { colors } from "../Colors";

export const HeadernSearchBanner = styled.div`

display:flex;
flex-direction: row;
height: 7vh;
background-color:${colors.card};
align-items: center;
justify-content: space-between;
`;

export const SearchBanner = styled.div`
align-items: center;
height:100%;
background-color: ${colors.card};
border:none;
display:flex;
flex-direction: row;

`;

export const Icon = styled.div`
display: flex;
color: ${colors.icon};
align-items: center;
justify-content: center;
padding-left:1.5rem;
font-size: 1.8rem;
`;
export const HText = styled.div`
display: flex;
color: ${colors.htext};
align-items: center;
justify-content: center;
padding-left:0.5rem;
font-size: 1.4rem;

`;

export const HImage = styled.img`
width:3vw;
height:5vh;
border-radius:50%;
padding:1.5rem;

`;
export const Breaker = styled.div`
display: flex;
flex-direction: row;
gap: 2rem;
align-items: center;
justify-content: center;

`;

export const NotificationIcon = styled.div`
  position: relative;
  display: inline-block;
  color: ${colors.icon};
align-items: center;
justify-content: center;

font-size: 2rem;
`;

export const NotificationBadge = styled.div`
  position: absolute;
  top: -5px;
  left: 20px;
  background-color: ${colors.red};
  color: white; /* Customize the badge text color */
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;




export const HeaderBanner = styled.div`
align-items: center;
height:100%;
background-color: ${colors.card};
border:none;
display:flex;




`; 

export const Searcher = styled.input`
width:100%;
height:5.5vh;
border-color:${colors.body};
border-radius: 0.5rem;
border-style: solid, 0.5rem;
color: ${colors.htext};
background-color: ${colors.card};
font-size: 1.3rem;
align-items: center;
padding: 0.3rem;
`;

export const CardRow = styled.div`
display:flex;
flex-direction:row;
gap:2rem;
flex-wrap: wrap;
`;



export const MediumCard = styled.div`
background: ${colors.card};
border: 1px solid ${colors.card};
width: 30vw;
height: 30vh;
opacity: 1;
display:flex;
flex-direction: row;
gap:1rem;
@media (max-width: 1600px) {
    width:100%;
  }
`;

export const CardTextDiv = styled.div`
width: 50%;
padding:1rem;
gap:0.5rem;
font-family: OpenSans
`;

export const CardImageDiv = styled.img`
width: 50%;
height:83%;
padding:1rem;

`;

export const LargeCard = styled.div`
background: ${colors.card};
border: 1px solid ${colors.card};
width: 52vw;
height: 30vh;
opacity: 1;
display:flex;
flex-direction: column;
gap:2rem;

@media (max-width: 1600px) {
    width:100%;
    height:auto;
    justify-content: space-between;
  }

`;


export const CText = styled.span`
color: ${colors.ctext};
font-size: 1.2rem;

`;

export const CTextLarge = styled.span`
font-size: 1.2rem;
padding:2rem;

`;


export const StatCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  gap: 1rem;
  align-items: center;
`;

export const StatIcon = styled.div`
  background: ${({ background }) => background};
   color: ${({ color }) => color};
  font-size: 1.0rem;
border-radius:50%;
padding:1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

export const StatText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StatBigText = styled.div`
  font-size: 1.4rem;
`;

export const StatSmallText = styled.div`
  font-size: 1.2rem;
`;
