import { Outlet } from 'react-router-dom';

import NavState from '../../widgets/navMenu/navState';
import MainMenu from '../../widgets/navMenu/mainMenu';

import { Container, BackgroundColor } from '../theme/Container';

function Layout() {
    return (
        <BackgroundColor>
            <Container>
                <NavState>
                    <MainMenu />
                </NavState>
                <Outlet />
            </Container>
        </BackgroundColor>
    )
}

export default Layout;