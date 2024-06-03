import styled from "styled-components";

function Form(){
    return(
        <Container>
            <NamesInput>
                <Title>CARDHOLDER NAME</Title>
                <Input></Input>
                <Title>CARD NUMBER</Title>
                <Input></Input>
            </NamesInput>
            <DateInput></DateInput>
            <Button></Button>
        </Container>
    )
}

export default Form;

const Container = styled.div`

   
`
const NamesInput = styled.div`
    
`
const DateInput = styled.div`

`

const Button = styled.button``

const Title = styled.h3``
const Input = styled.input``
