import styled from 'styled-components';

export const BackgroundColor = styled.div`
    height: 757px;
    background: ${props => props.color || props.theme.colors.bgColor};
    @media ${props => props.theme.media.bigTablet} {
        height: 1250px;
    }
    @media ${props => props.theme.media.phone} {
        height: 737px;
    }

`

export const Container = styled.div`
    padding-top: 30px;
    max-width: 1120px;
    margin: 0 auto;
    @media ${props => props.theme.media.notebook} {
        padding: 20px 10px 0 10px;
    }

`
