import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    margin-top: 200px;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
font-size: 42px;
text-align: center;
font-weight: 700;
margin-top: 20px;
color: #CCD6F6;

  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #8892B0;

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
    display: flex;
    border: 1px solid rgb(100, 255, 218);
    color: #8892B0;
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: rgba(23, 190, 5, 0.15);
    `
    }
    &:hover {
        background: rgba(23, 120, 20, 0.15);
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`

export const Divider = styled.div`
    width: 1.5px;
    background: rgb(100, 255, 218);
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;


export const ResumeButton =styled.a`
    color: rgb(100, 255, 218);
    background-color: transparent;
    border: 1px solid rgb(100, 255, 218);
    border-radius: 3px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    margin-top: 50px;

    &:hover {
        background: rgb(10, 30, 47);
    }
`