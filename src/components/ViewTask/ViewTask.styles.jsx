import styled from 'styled-components';

//theme
import {COLORS} from '../../../theme';

export const Wrapper = styled.div`

    width:100%;
    height:calc(100vh - 4rem);
    padding:1rem;

    display:flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    
    form{
        flex: 1 0 50%;
        max-width: 50%;
        box-sizing: border-box;

        @media(max-width:750px){
            flex: 1 0 100%;
            max-width: 100%;
            white-space: nowrap;
        }

        &>div{
            width:100%;

            :not(:last-of-type){
                margin-bottom:2rem;
            }

            &.form_action button{
                font-size: 1.2rem;
                padding: .8rem 1rem;
                border:0px;
                cursor:pointer;

                @media(max-width:750px){
                    padding: 8px 10px;
                }

                :nth-of-type(1){
                    background-color: ${COLORS.tertiary};
                    color: ${COLORS.junior};
                    margin-right:2rem;

                    @media(max-width:750px){
                        margin-right:1rem;
                    }
                    
                }
                :nth-of-type(2){
                    background-color: ${COLORS.secondary};
                    ${'' /* margin-right:2rem; */}
                }
            }
        }

        label{
            display:block;
            margin-bottom:1rem;
        }

        input{
            width:100%;
            padding: 1rem;
            background-color: ${COLORS.junior};
            border:1px solid ${COLORS.tertiary};
            box-sizing: border-box;

            

        }

        textarea{
            width:100%;
            background-color: ${COLORS.junior};
            border:1px solid ${COLORS.tertiary};
            box-sizing: border-box;
            padding: 1rem;

        }

        
    }
`