import styled from "styled-components";

function Form() {
  return (
    <Container>
      <NamesInput>
        <Input1>
          <Title>CARDHOLDER NAME</Title>
          <Input placeholder="e.g Jane Appleseed"></Input>
        </Input1>
        <Input2>
          <Title>CARD NUMBER</Title>
          <Input placeholder="e.g. 1234 5678 9123 0000"></Input>
        </Input2>
      </NamesInput>
      <DateInput>
        <Date1>
          <Title>EXP.DATE(MM/YY)</Title>
          <MonthInput placeholder="MM"></MonthInput>
          <MonthInput id="year" placeholder="YY"></MonthInput>
        </Date1>
        <Date2>
          <Title>CVC</Title>
          <CvcInput placeholder="CVC"></CvcInput>
        </Date2>
      </DateInput>
      <Button>Confirm</Button>
    </Container>
  );
}

export default Form;

const CvcInput = styled.input`
  padding: 15px;
  width: 153px;
  border: 1px solid #dfdee0;
`;
const Date1 = styled.div``;
const Date2 = styled.div``;
const MonthInput = styled.input`
  width: 72px;
  padding: 15px;
  border: 1px solid #dfdee0;
  border-radius: 5px;

  &#year {
    margin-left: 10px;
  }
`;

const Container = styled.div`
  transform: translateY(50%);
`;
const NamesInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
const DateInput = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  background: #21092f;
  color: White;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.97px;
  border-style: none;
  width: 327px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 12px;
  font-weight: 500;
  line-height: 15.31px;
  letter-spacing: 2px;
  color: #21092f;
  padding-bottom: 10px;
`;
const Input = styled.input`
  border: 1px solid #dfdee0;
  border-radius: 5px;
  width: 327px;
  padding: 15px;
`;

const Input1 = styled.div``;
const Input2 = styled.div``;
