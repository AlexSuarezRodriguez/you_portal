import styled from 'styled-components';

export const HomeContainer = styled.section`
  width: 100%;
  height: 600px;
  
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
  background-color: #171c27;
  border: 2px solid white;
  display: flex;
`;
export const ImageWrapper = styled.div`
  width: 55%;
  height: 100%;
  align-items: center;
  background-color: #171c27;
  grid-template-columns: 1fr 4fr;
  display: grid;
`;
export const SocialInformation = styled.div`
  background-color: #171c27;
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
  `;
export const ButtonContact = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    cursor: pointer ;

  &:hover{
    color: #1883ba;
    background-color: #ffffff;
  }
`;
