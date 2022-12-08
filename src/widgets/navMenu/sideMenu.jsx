import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { MenuContext } from './navState';
import { navigation } from '../../component/data/data';


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

export const MenuLink = styled.li`
    font-size: 24px;
    line-height: 36px;
    color: #070707;
    text-transform: uppercase;
    position: relative;
    display: block;
    text-align: left;
    max-width: 100%;
    padding-top: 0px;
    padding-bottom: 25px;
    padding-left: 75px;
    padding-right: 20px;
    background-position: 88% 50%;
    background-size: 36px;
    background-repeat: no-repeat;
    transition: background-position 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    text-decoration: none;
    transition: all 0.5s;
    @media ${props => props.theme.media.phone} {
        padding-left: 55px;
    }
    :before {
        content: '';
        position: absolute;
        left: 40px;
        top:10px;
        position: absolute;
        width: 10px;
        height: 10px;
        border: 1px solid #000000;
        border-radius: 100%;
        transition: all 0.5s;
        @media ${props => props.theme.media.phone} {
            left: 25px;
        }
    }
    :hover {
        background-position: 90% 50%;
        :before {
            background-color: black;
        }
    }
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
        <MenuLink key={id}>
            <Link to={`${link}`}> {name} </Link>
        </MenuLink>
    )
});

SideMenu.defaultProps = {
    children: (
        <ul>
            {items}
        </ul>
    ),
};
