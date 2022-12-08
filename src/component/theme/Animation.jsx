import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { theme } from '../theme/Theme';
import women3 from '../../resources/women3.png'
import icon5 from '../../resources/icons/animate/item5.png'
import icon4 from '../../resources/icons/animate/item4.png'
import icon3 from '../../resources/icons/animate/item3.png'
import icon2 from '../../resources/icons/animate/item2.png'
import icon1 from '../../resources/icons/animate/item1.png'



const BgGigCircle = styled.div`
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background: none;
    border: 2px solid #E8E8E8;
    z-index: 10;
    left: 15%;
    bottom: 151px;
    @media ${props => props.theme.media.notebook} {
        left: 5%;
    }
`

const BgCircle = styled.div`
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: #48B774;
    z-index: 30;
    top: 117px;
    left: 90px;
`


const Item1 = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(${icon1}) no-repeat;
    offset-path: path('M218.5 0.5C218.5 48.5 44 48.5 0.5 48.5');
    offset-rotate: 0deg;
    top: 225px;
    /* transform: rotate(168deg) translateX(223px); */
    animation: 3s goToStartPath 3s linear, 1.6s waited 6s linear, 2.4s one-start-orbit 7.6s linear, 5s orbit 10s linear infinite;

    @keyframes goToStartPath {
        0% {
            offset-distance: 0%;
        }
        100% {
            offset-distance: 100%;
        }
    }
    @keyframes waited {
        0% {
            offset-distance: 100%;
        }
        100% {
            offset-distance: 100%;
        }
    }
    @keyframes one-start-orbit {
        0% { transform: rotate(168deg) translateX(223px) rotate(-168deg); }
        100%   { transform: rotate(360deg) translateX(223px) rotate(-360deg); }
    }
    @keyframes orbit {
        0% { transform: rotate(0deg) translateX(223px) rotate(0deg); }
        100%   { transform: rotate(360deg) translateX(223px) rotate(-360deg); }
    }
`


const Item2 = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    background: url(${icon2}) no-repeat;
    offset-path: path('M197 106.996C131.667 107.329 1 86.3969 1 0');
    offset-rotate: 0deg;
    top: 118px;
    left: 25px;
    /* transform: rotate(-151deg) translateX(223px); */
    animation: 3s goToStartPath 3.4s linear, 1.2s waited 6.4s linear, 1.9s two-start-orbit 7.6s linear , 5s orbit 9.5s linear infinite;
    @keyframes two-start-orbit {
        0% { transform: rotate(-151deg) translateX(223px) rotate(151deg); }
        100%   { transform: rotate(-1deg) translateX(223px) rotate(1deg); }
    }

`

const Item3 = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    background: url(${icon3}) no-repeat;
    offset-path: path('M40 223.5C6.50002 183 -36.4 81.7 60 0.5');
    offset-rotate: 0deg;
    top: 0px;
    left: 190px;
    /* transform: rotate(-84deg) translateX(223px); */
    animation: 3s goToStartPath 3.8s linear, 0.8s waited 6.8s linear, 1.2s three-start-orbit 7.6s linear, 5s orbit 8.8s linear infinite ;
    @keyframes three-start-orbit {
        0% { transform: rotate(-84deg) translateX(223px) rotate(84deg); }
        100%   { transform: rotate(-1deg) translateX(223px) rotate(1deg); }
    }

`

const Item4 = styled.div`
    position: absolute;
    width: 70px;
    height: 70px;
    background: url(${icon4}) no-repeat;
    offset-path: path('M0.5 104.5C0.5 68 50.5 1.00004 199.5 1');
    offset-rotate: 0deg;
    top: 121px;
    left: 222px;
    animation: 3s goToStartPath 4.3s linear, 0.4s waited 7.2s linear, 0.5s four-start-orbit 7.6s linear, 5s orbit 8.1s linear infinite ;
    @keyframes four-start-orbit {
        0% { transform: rotate(-27deg) translateX(223px) rotate(27deg); }
        100%   { transform: rotate(-1deg) translateX(223px) rotate(1deg); }
    }

`

const Item5 = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background: url(${icon5}) no-repeat;
    offset-path: path('M1 22.5C57.1667 -1.49995 179.8 -25.4 221 71');
    offset-rotate: 0deg;
    top: 205px;
    left: 235px;
    transform: translate(-50%, -50%);
    animation: 3s goToStartPath 4.6s linear, 0s waited 7.6s linear, 0s five-start-orbit 7.6s linear, 5s orbit 7.6s linear infinite ;
    @keyframes five-start-orbit {
        0% { transform: rotate(12deg) translateX(223px) rotate(-12deg); }
        100%   { transform: rotate(-1deg) translateX(223px) rotate(1deg); }
    }

`

const ImgWrapp = styled.div`
    position: absolute;
    left: 30%;
    bottom: 0;
    z-index: 100;
    @media ${props => props.theme.media.notebook} {
        left: 22%;
        bottom: -7px;
    }
    @media ${props => props.theme.media.bigTablet} {
        left: 10%;
    }
`

const WomenImg = styled.img.attrs(prop => ({ src: prop.img, alt: prop.img }))`
`



function Animation() {

    const isBigTablet = useMediaQuery({
        query: theme.media.bigTablet
    })

    return (
        <>
            {
                isBigTablet ? '' :
                    <BgGigCircle>
                        <Item1 />
                        <Item2 />
                        <Item3 />
                        <Item4 />
                        <Item5 />
                        <BgCircle />
                    </BgGigCircle>
            }
            <ImgWrapp>
                <WomenImg img={women3} alt='women' />
            </ImgWrapp>
        </>
    )
}

export default Animation;
