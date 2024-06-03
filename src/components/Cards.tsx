import styled from "styled-components";

import FrontCardImage from "../../public/images/bg-card-front.png";
import BackCardImage from "../../public/images/bg-card-back.png";
import circle from '../../public/images/card-logo.svg'

export function Cards() {
  return (
    <CardContainer>
      <BackgroundImage>
        <BackCard>
          {" "}
          <img src={BackCardImage} />
        </BackCard>
        <FrontCard>
          <img src={FrontCardImage} />
          <img src={circle} className="circle"/>
        </FrontCard>
      </BackgroundImage>
    </CardContainer>
  );
}



const CardContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; */

`;
const BackgroundImage = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const FrontCard = styled.div`
  & img {
    width: 286px;
    height: 157px;
  }

  & .circle{
    width:50px;
    height:50px;
   transform: translateY(-150px);
   margin-left:10px;
   @media screen and (min-width:768px){
   transform: translate(-410px, -150px);
   width:70px;
   height:70px;
   }
  }
  position: absolute;
  top: 64%;
  z-index: 1;
  right: 10%;

  @media screen and (min-width: 768px) {
    img {
      width: 447px;
      height: 245px;
    }

    position: relative;
  }
`;
const BackCard = styled.div`
  & img {
    width: 286px;
    height: 157px;
  }


  @media screen and (min-width: 768px) {
    img {
      width: 447px;
      height: 245px;
      margin-left:30px;
    }
    padding-top:20px;
  }
`;

export default Cards;
