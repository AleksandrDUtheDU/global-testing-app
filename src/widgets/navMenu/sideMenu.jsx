import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { MenuContext } from './navState';
import { navigation } from '../../component/data/data';
import { SideMenuCustomLink } from '../../component/theme/CustomLink';


const Menu = styled.nav`
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 293;
    display: block;
    width: 345px;
    margin-top: 0px;
    padding-top: 100px;
    padding-right: 0px;
    align-items: stretch;
    background-color: #F6F6F6;
    transform: translateX(-100%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    @media ${props => props.theme.media.phone} {
        max-width: 260px;
    }
    ${props =>
        props.open &&
        css`
        transform: translateX(0);
        `}
`;


export const SideMenu = ({ children }) => {
    const { isMenuOpen } = useContext(MenuContext);

    return (
        <>
            <Menu open={isMenuOpen}>{children}</Menu>
        </>
    )
};



SideMenu.propTypes = {
    children: PropTypes.node,
};


const items = navigation.map(item => {


    const { id, name, link } = item;

    return (
        <SideMenuCustomLink key={id} to={`${link}`}> {name} </SideMenuCustomLink>
    )
});

SideMenu.defaultProps = {
    children: (
        <ul>
            {items}
        </ul>
    ),
};
