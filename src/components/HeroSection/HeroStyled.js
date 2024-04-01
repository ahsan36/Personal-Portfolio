import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background-color: rgb(10, 25, 47);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroRightContainer = styled.div`
  width: 400px;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
  color: #64FFDA;

  @media (max-width: 960px) {
    font-size: 13px;
  }

  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 40px;
  display: flex;
  gap: 12px;
  color: #8892B0;
  line-height: 68px;

  @media (max-width: 960px) {
    font-size: 40px;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 25px;
    line-height: 48px;
  }
`;

export const Span = styled.span`
  font-weight: 400;
  color: #64FFDA;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  width: 500px;
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  font-size: 18px;
  margin: 50px 80px 70px 0px;
  color: #8892B0;

  @media (max-width: 960px) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
  }

  @media (max-width: 640px) {
    width: 350px;
    font-size: 16px;
    margin-left: 50px;
    margin-bottom: 5px;
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

    &:hover {
      background: rgb(10, 30, 47);
    }
    
`

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;