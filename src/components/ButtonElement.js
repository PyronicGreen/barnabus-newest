import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    margin: 20px;
    background: ${({primary}) => (primary ? '#7851a9' : '#7851a9')};
    white-space: nowrap;
    style={{textDecoration: 'none' }}
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px;')};
    color: ${({ dark }) => (dark ? '#fff' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border:  none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#F8A318' : '#F8A318')};
        color: ${({ dark }) => (dark ? '#010606' : '#010606')};
    }
`;