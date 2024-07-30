import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const FormSection = styled.div`
  width: 60%;
`;

export const AddressForm = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const PaymentForm = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 32%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const OrderSummary = styled.div`
  width: 35%;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const OrderPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  text-align: right;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ffc107;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ffca2c;
  }
`;