import styled from 'styled-components';

export const ServiceContainer = styled.section`
  width: 100%;
  height: 650px;
`;
export const ServiceWrapper = styled.div`
  padding: 20px ;
  position:relative;
  margin-left:  auto ;
  margin-right: auto;
  bottom:-50px ;
  width: 100%;
  max-width: 960px;
  height: 90%;
  align-items: center;
  background-color: #171c27;
  border: 2px solid white;
  display: grid;
  grid-template-rows: 1fr 5fr;

`;
export const ServiceTitle = styled.div`
  display:flex ;
  justify-content: center;
  align-items:center ;
  background-color: #171c27;
  width:100% ;
  height:100% ;
  color:#ebc08b;
  flex-direction: column ;
`;
export const ServiceDescription = styled.div`
  width: 100%;
  height:100% ;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const AboutAbility = styled.div`
  width: 100%;
  height:100% ;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:2rem;
`;
export const AboutDetails = styled.div`
 display:flex;
 flex-direction: column ;
 justify-content: center;
 color:#ebc08b;
 border: 1px solid white;
 border-radius:0.5rem ;
  padding: 1rem ;
  background:rgba(0,0,0,0.25) ;
  text-align: justify;

 p{
   font-size: 2.5rem;
 }
 span{
   font-size: 1.2rem;
 }
`;
export const IconCard = styled.div`
font-size: 2.5rem ;
margin-top:30px ;
`;
