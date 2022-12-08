import styled from 'styled-components';
import { useState, useEffect } from 'react';

// import { getData } from '../../services/ajax';
import { Button } from '../theme/Button';
import Search from '../theme/SearchInput';
import Animation from './Animation';
import people1 from '../../resources/icons/people/1.svg'
import people2 from '../../resources/icons/people/2.svg'
import people3 from '../../resources/icons/people/3.svg'


const MainWrapp = styled.section`
    display: flex;
    height: 687px;
`
const TitleWrappColumn = styled.div`
    width: 56%;
    @media ${props => props.theme.media.bigTablet} {
        width: 70%;
        }
`

const Title = styled.h2`
    margin-top: 117px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    color: #2D2D2D;
    span {
        color:${props => props.color || props.theme.colors.selectColor};
    }
    @media ${props => props.theme.media.bigTablet} {
        margin-top: 60px;
    }

`

const TitleDescr = styled.p`
    margin-top: 20px;
    max-width: 444px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    color: #7C7C7C;
    transition: 3s all ;
    span {
        color:${props => props.color || props.theme.colors.selectColor};
    }
`

const ButtonMain = styled(Button)`
    margin-top: 30px;
    margin-bottom: 50px;
`
const UserWrapp = styled.div`
    display: flex;
    height: 38px;
    margin-top: 12px;
    max-width: 362px;
    justify-content: space-between;
`


const UserIconsWrapp = styled.div` // нуждается в оптимизации, через map например
    position: relative;
    min-width: 101px;
`

const UserIconItem1 = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 38px;
    height: 38px;
    z-index: 40;
    border-radius: 50%;
    background: url(${people1});
`

const UserIconItem2 = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    width: 38px;
    height: 38px;
    z-index: 30;
    border-radius: 50%;
    background: url(${people2});
`

const UserIconItem3 = styled.div`
    position: absolute;
    top: 0;
    left: 42px;
    width: 38px;
    height: 38px;
    z-index: 20;
    border-radius: 50%;
    background: url(${people3});
`

const UserIconItemLast = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 62px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: ${props => props.color || props.theme.colors.selectColor};
    border: 3px solid #FFFFFF;
    &:before
    {
        content: '';
        position: absolute;
        width: 12px;
        height: 2px;        
        background: white;
        top: 50%; 
        left: 50%;
	-webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);    
    };
    &:after
    {
        content: '';
        position: absolute;
        width: 2px;
        height: 12px;        
        background: white;
        top: 50%; 
        left: 50%;
	-webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);    
    };
`

const UserDescr = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 38px;
    color: #707070;
    a {
        color: #FD905A;
    }
`


const AnimateWrappColumn = styled.div`
    position: relative;
    width: 50%;
`


function Main() {

    const [descr, setDescr] = useState('We Make international calling simple, relible, and cheap basedon your unique calling behavior.')
    // const description = descr.substring(0, 143) + '...'

    async function getData(url) {
        const response = await fetch(url)

        const result = await response.json();

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        const description = result[0].substring(0, 143) + '...'

        console.log(description)
        setDescr(description)

        return result;
    }


    useEffect(() => {
        getData('https://baconipsum.com/api/?type=lucky')
    }, [descr]);


    return (
        <MainWrapp>
            <TitleWrappColumn>
                <Title>
                    Now Buy Your
                    <br />
                    PIN or <span>Top Up</span>
                    <br />
                    With Bank Transfer
                </Title>
                <TitleDescr>
                    {descr}
                </TitleDescr>
                <ButtonMain>Get Started</ButtonMain>
                <Search />
                <UserWrapp>
                    <UserIconsWrapp>
                        <UserIconItem1 />
                        <UserIconItem2 />
                        <UserIconItem3 />
                        <UserIconItemLast />
                    </UserIconsWrapp>
                    <UserDescr>45k+ Regular User. <a href='#'>View Price Plan</a></UserDescr>
                </UserWrapp>
            </TitleWrappColumn>
            <AnimateWrappColumn>
                <Animation />
            </AnimateWrappColumn>
        </MainWrapp>
    )
}

export default Main;
