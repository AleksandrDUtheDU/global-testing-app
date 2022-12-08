import { Link, useMatch } from "react-router-dom";
import styled from 'styled-components';

const Wrapp = styled.li`
    display: block;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: ani 2.5s forwards;
    @keyframes ani {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
`

const Privider = styled.div`
    margin: 0 auto;
    background: ${props => props.color || props.theme.colors.selectColor};
    height: 1.5px;
    width: 21px;
`

const HeaderMenuLink = styled(Link)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4A4A4A;
`

const SideMenuLink = styled(Link)`
margin-top: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #4A4A4A;
`

export const HeaderMenuCustomLink = ({ children, id, to, ...props }) => {

    const match = useMatch(to)

    return (
        <Wrapp key={id}>
            <HeaderMenuLink
                to={to}
                {...props}
            >
                {children}
            </HeaderMenuLink>
            {match ? <Privider /> : ''}
        </Wrapp>
    )
}

export const SideMenuCustomLink = ({ children, id, to, ...props }) => {

    const match = useMatch(to)

    return (
        <Wrapp key={id}>
            <SideMenuLink
                to={to}
                {...props}
            >
                {children}
            </SideMenuLink>
            {match ? <Privider /> : ''}
        </Wrapp>
    )
}
