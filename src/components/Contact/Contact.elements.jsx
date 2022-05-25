import styled from 'styled-components';

export const ContactContainer = styled.section`
  width: 100%;
  height: 650px;
  background-color: #171c27;
`;
export const ContactWrapper = styled.div`
  padding: 20px ;
  position:relative;
  margin-left:  auto ;
  margin-right: auto;
  bottom:-50px ;
  width: 100%;
  max-width: 960px;
  height: 90%;
  align-items: center;
  border: 2px solid white;
  display: grid;
  grid-template-rows: 1fr 5fr;
  border-radius: 12px ;
`;
export const ContactTitle = styled.div`
  display:flex ;
  justify-content: center;
  align-items:center ;

  width:100% ;
  height:100% ;
  color:#ebc08b;
  flex-direction: column ;
`;

export const ContactTaget = styled.div`
  width: 100%;
  height:100% ;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap:1rem;
`;

export const ContactInformation = styled.div`
  display: grid ;
  grid-template-rows:repeat(5, 1fr);
  color:#ebc08b;
  border: 1px solid white;
  border-radius:0.5rem ;
  padding: 1rem ;
  background:rgba(0,0,0,0.25) ;
`;

export const ContactEmail = styled.div`
  color:#ebc08b;
  border: 1px solid white;
  border-radius:0.5rem ;
  padding: 0.5rem ;
  background:rgba(0,0,0,0.25) ;
  text-align: justify;
`;
export const IconCard = styled.div`
font-size: 2.2rem ;;
`;
export const ContactDescription = styled.div`
  display:grid ;
  grid-template-columns: 1fr 5fr;
  align-items:center ;
`;
export const TextContact = styled.div`
font-size:0.8rem ;
`;
