import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Animation from './Animation';
import TitleColumn from './TitleColumn';
import { theme } from '../theme/Theme';


const MainWrapp = styled.section`
    display: flex;
    min-height: 687px;
    flex-direction: row;
        @media ${props => props.theme.media.bigTablet} {
        flex-direction: column;
        }

`
const TitleWrappColumn = styled.div`
    width: 597px;
    @media ${props => props.theme.media.notebook} {
        width: 48%;
        }
    @media ${props => props.theme.media.bigTablet} {
        width: 100%;
        }
`

const AnimateWrappColumn = styled.div`
    position: relative;
    width: 30%;
    @media ${props => props.theme.media.bigTablet} {
        left: 15%;
        top: 687px;
        width: 100%;
        }

`


function Main() {

    const isPhone = useMediaQuery({
        query: theme.media.phone
    })



    return (
        <MainWrapp>

            <TitleWrappColumn>
                <TitleColumn />
            </TitleWrappColumn>
            {isPhone ?
                ""
                :
                <AnimateWrappColumn>
                    <Animation />
                </AnimateWrappColumn>
            }
        </MainWrapp>
    )
}

export default Main;
