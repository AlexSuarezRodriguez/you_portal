import styled from 'styled-components';

export const HomeContainer = styled.section`
  width: 100%;
  height: 600px;
  background-color: #171c27;
`;
export const HomeWrapper = styled.div`
  padding: 20px ;
  position:relative;
  margin-left:  auto ;
  margin-right: auto;
  width: 100%;
  max-width: 960px;
  height: 90%;
  align-items: center;
  background:rgba(0,0,0,0.25) ;
  border: 0.5px solid white;
  display: flex; 
  border-radius:12px ;
`;
export const ImageWrapper = styled.div`
  width: 55%;
  height: 100%;
  align-items: center;
  
  grid-template-columns: 1fr 4fr;
  display: grid;
`;
export const SocialInformation = styled.div`
  
  width: 100%;
  height: 100%;
  display: grid ;
  flex-direction: column ;
  justify-content: center ;
  align-items: center ;
  font-size: 1.8rem;
  color: #ebc08b;
`;
export const ImageInformation = styled.img`
  width: 80%;
  height: 70%;
  object-fit: fill;
  border-radius: 20% 40% 35% 65%;
  margin:auto ;

`;
export const InformationWrapper = styled.div`
  display: grid;
  width: 45%;
  height: 100%;
  align-items: center;
  background-color: #171c27;
  grid-template-rows: 2fr 1fr 1fr;
  padding-left:2rem ;
  color: #ebc08b;
  border-radius:12px ;
  `;
export const ButtonContact = styled.button`
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 15px 32px;
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
