import styled from 'styled-components';


const LogoWrapp = styled.div`
    max-width: 131px;
    display: flex;
`

const Circle = styled.div`
    width: 40px;
    height: 40px;
    border: 5px solid #F9A779;
    border-radius: 50%;

`

const Letter = styled.div`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 28px;
    line-height: 30px;
    color: ${props => props.color || props.theme.colors.btnColor};
    text-align: center;
`

const LogoText = styled.h1`
    margin-left: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 40px;
    color: #2D2D2D;
`


function Logo() {
    return (
        <LogoWrapp>
            <Circle>
                <Letter>G</Letter>
            </Circle>
            <LogoText>Global</LogoText>
        </LogoWrapp>
    )
}

export default Logo;