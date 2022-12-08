import styled from 'styled-components';


export const Button = styled.button`
    padding: 9px 23px;
    background: ${props => props.color || props.theme.colors.btnColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    height: 46px;
    cursor: pointer;
`
