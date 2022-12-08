import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import useOnClickOutside from './hooks/onClickOutside';
import { MenuContext } from './navState';
import HamburgerButton from './hamdurgerButton';
import { SideMenu } from './sideMenu';
import CustomLink from '../../component/theme/CustomLink';
import { theme } from '../../component/theme/Theme';
import Logo from '../../component/theme/Logo';
import { Button } from '../../component/theme/Button';
import { navigation } from '../../component/data/data';


const NavbarWrapp = styled.header`
    min-height: 42px;
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 210;
    width: 100%;
    position: relative;
`;

const HeadMenuLinkWrapp = styled.ul`
    max-width: 365px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Bloked = styled.div`
    position: fixed;
    visibility: visible; 
    z-index: 200; 
    top: 0px; 
    left: 0px; 
    width: 100%; 
    height: 100%; 
    background-color: #ccc; 
    opacity: 0.5; 
`;


const MainMenu = () => {

    const isPhone = useMediaQuery({
        query: theme.media.phone
    })

    const node = useRef();

    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    const items = navigation.map(item => {
        const { id, name, link } = item;
        return (
            <CustomLink key={id} to={`${link}`}> {name} </CustomLink>
        )
    })


    return (
        <>
            <NavbarWrapp ref={node}>
                <Navbar>
                    <Logo />
                    {isPhone ?
                        <HamburgerButton />
                        :
                        <>
                            <HeadMenuLinkWrapp>{items}</HeadMenuLinkWrapp>
                            <Button>Sign Up</Button>
                        </>
                    }
                </Navbar>
                <SideMenu />
            </NavbarWrapp>
            {isMenuOpen ? <Bloked /> : ''}
        </>
    );
};

export default MainMenu;