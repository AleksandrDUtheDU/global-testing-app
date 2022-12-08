import { Link, useMatch } from "react-router-dom";
import styled from 'styled-components';

const Wrapp = styled.li`
    display: block;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`

const Privider = styled.div`
    margin: 0 auto;
    background: ${props => props.color || props.theme.colors.selectColor};
    height: 1.5px;
    width: 21px;
    transition: all 1s ease 0s;

`


const StailedLink = styled(Link)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4A4A4A;
`

const CustomLink = ({ children, id, to, ...props }) => {

    const match = useMatch(to)

    return (
        <Wrapp key={id}>
            <StailedLink
                to={to}
                {...props}
            >
                {children}
            </StailedLink>
            {match ? <Privider /> : ''}
        </Wrapp>
    )
}

export default CustomLink;