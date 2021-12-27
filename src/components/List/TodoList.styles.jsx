import styled from 'styled-components';

//theme
import {COLORS} from '../../../theme';

export const Wrapper = styled.div`

    margin-top:1rem;
    margin-bottom:2rem;

    
    div.action{
        display:flex;
        justify-content:space-between;
        ${'' /* border-bottom:1px solid ${COLORS.tertiary}; */}
        padding:1rem;
        @media(max-width:750px){
            white-space:nowrap;
        }
    }

    div.tasks{
        display:grid;
        grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
        grid-auto-rows: repeat( min-content,max-content);
        gap:1rem;
        padding:1.5rem;
        

    }
`