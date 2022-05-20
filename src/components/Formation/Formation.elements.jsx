import styled from 'styled-components';

export const ContactContainer = styled.section`
  width: 100%;
  height: 650px;
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
  background-color: #171c27;
  border: 2px solid white;
  display: grid;
  grid-template-rows: 1fr 1fr 5fr;

`;
export const ContactTitle = styled.div`
  display:flex ;
  justify-content: center;
  align-items:center ;
  background-color: #171c27;
  width:100% ;
  color:#ebc08b;
  flex-direction: column ;
`;

export const ContactTaget = styled.div`
  width: 100%;
  display: flex;
  gap:1rem;
  border: 1px solid white ;
  border-radius:15px ;
  justify-content: center;
  background: rgba(0,0,0,0.15) ;
`;
