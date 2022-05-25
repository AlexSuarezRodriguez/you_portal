import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  height: 650px;
  font-family:'Poppins' ;
  background-color: #171c27;
`;
export const AboutWrapper = styled.div`
  padding: 20px ;
  position:relative;
  margin-left:  auto ;
  margin-right: auto;
  bottom:-50px ;
  width: 100%;
  max-width: 960px;
  height: 90%;
  align-items: center;
  background:rgba(0,0,0,0.25) ;
  border: 2px solid white;
  display: grid;
  grid-template-rows: 1fr 5fr;
  border-radius: 12px ;
`;
export const AboutTitle = styled.div`
  display:flex ;
  justify-content: center;
  align-items:center ;
  width:100% ;
  height:100% ;
  color:#ebc08b;
  flex-direction: column ;
`;
export const AboutDescription = styled.div`
  width:100% ;
  height:100% ;
  display: grid ;
  grid-template-columns: 4fr 5fr;
`;
export const AboutImage = styled.img`
  width: 80%;
  height: 70%;
  object-fit: fill;
  border-radius: 10%;
  margin:auto ;
`;
export const AboutInformation = styled.div`
  width:100% ;
  height:100% ;
  grid-template-rows: 2fr 1fr 1fr;
  display:grid ;
`;
export const AboutAbility = styled.div`
  width: 100%;
  height:100% ;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const ButtonContact = styled.button`
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 1rem 12px;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    cursor: pointer ;
    border-radius:12px ;

  &:hover{
    color: #1883ba;
    background-color: #ffffff;
  }
`;
export const AboutDetails = styled.div`
 display:flex;
 flex-direction: column ;
 justify-content: center;
 color:#ebc08b;

 p{
   margin:0 auto ;
   font-size: 2rem;
 }
 span{
   margin:0 auto ;
   font-size: 1rem;
 }
`;
