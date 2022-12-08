import styled from 'styled-components';

export const BackgroundColor = styled.div`
    min-height: 757px;
    background: ${props => props.color || props.theme.colors.bgColor};
`

export const Container = styled.div`
    padding-top: 30px;
    max-width: 1120px;
    margin: 0 auto;
    @media ${props => props.theme.media.notebook} {
        padding: 20px 10px 0 10px;
    }

`
