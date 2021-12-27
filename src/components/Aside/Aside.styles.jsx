import styled from 'styled-components';
import {COLORS} from '../../../theme';

export const Wrapper = styled.div`
    ${'' /* flex-basis:300px;
    max-width:300px; */}
    max-width: ${props => props.showMenu ? "300px" : "80px"};
    flex-basis:${props => props.showMenu ? "300px" : "80px"};
    background-color:${COLORS.junior};
    height:100vh;
    transition:all .5s;

    @media(max-width:750px){
        max-width: ${props => props.showMenu ? "100%" : "60px"};
        flex-basis:${props => props.showMenu ? "100%" : "60px"};
    }

    p{
        padding:0rem 2rem;
        font-size:1.5rem;
        line-height:0;

        @media(max-width:750px){
            padding:0rem 1rem;
        }
    }

    ul{
        padding: 5em 0;
        font-size:1.2rem;
        white-space:nowrap;

        @media(max-width:750px){
            padding: 2em 0;
        }

        li a{
            padding:1.5rem 2rem;
            display:flex;
            align-items:center;
            text-decoration:none;

            @media(max-width:750px){
                padding:1.5rem 1em ;
            }
 
            i{
                margin-right:2rem;
                color:${COLORS.primaryText};
            }

            &.active{
                background-color:${COLORS.secondary};
                font-weight:bold;
            }
            &:hover{
                background-color:${COLORS.primary};

            }
        }
    }

`;