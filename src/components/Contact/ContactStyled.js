import styled from "styled-components";
import _default from "../../themes/default";


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-top: 100px;
@media (max-width: 960px) {
    padding: 0px;
}
`

export const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
color: #CCD6F6;
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;

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
    padding-top: 15px;
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }

    @media (max-width: 450px) {
        font-size: 14px;
    }
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
`