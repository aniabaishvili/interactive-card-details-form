import styled from 'styled-components'

import FrontCardImage from '../../public/images/bg-card-front.png'
import BackCardImage from '../../public/images/bg-card-back.png'

 export function Cards() {
    return (
        <CardContainer>
            <BackgroundImage>
           <FrontCard><img src={FrontCardImage} /></FrontCard>
           <BackCard> <img src={BackCardImage} /></BackCard>
           </BackgroundImage>
        </CardContainer>
    )
}

const CardContainer = styled.div`
   
   
` 
const BackgroundImage = styled.div`
     /* position: absolute; */
  

`

const FrontCard = styled.div`
   & img{ width:286px;
    height:157px;
   }
   
`
const BackCard = styled.div`
    & img{ width:286px;
    height:157px;
   }
    `


export default Cards ;