import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 8%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.div`
  margin-top: 70%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LineContainere = styled.div`
  width: 336px;
  display: flex;
  justify-content: center;
  span {
    width: 60px;
    height: 40px;
    margin-top: -30px;
    text-align: center;
    font-size: 16px;
    line-height: 56px;
    background: white;
    z-index: 1;
    color: rgba(0, 0, 0, 0.38);
  }
  &:after {
    content: '';
    display: flex;
    position: absolute;
    width: 336px;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    height: 40px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  button {
    margin-top: 5px;
    height: 40px;
    background: rgb(255, 0, 85);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;

  a {
    color: black;
    text-decoration: none;
    &:first-child {
      &:after {
        content: '';
        position: absolute;
        right: 50%;
        width: 2px;
        height: 15px;
        background: rgba(0, 0, 0, 0.08);
      }
    }
    &:last-child {
      margin-right: 20px;
    }
  }
`;
