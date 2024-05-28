import styled from "styled-components";

import FrontCardImage from "../../public/images/bg-card-front.png";
import BackCardImage from "../../public/images/bg-card-back.png";

export function Cards() {
  return (
    <CardContainer>
      <BackgroundImage>
        <FrontCard>
          <img src={FrontCardImage} />
        </FrontCard>
        <BackCard>
          {" "}
          <img src={BackCardImage} />
        </BackCard>
      </BackgroundImage>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
 
`;
const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
 
`;

const FrontCard = styled.div`
  & img {
    width: 286px;
    height: 157px;
  }
  position: absolute;
  top: 64%;
  z-index: 1;
  right: 10%;
`;
const BackCard = styled.div`
  & img {
    width: 286px;
    height: 157px;
  }
  
 
`;

export default Cards;
