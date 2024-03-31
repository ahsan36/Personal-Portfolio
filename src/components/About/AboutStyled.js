import styled from "styled-components";
import _default from "../../themes/default";


export const AboutContainer = styled.div`
  background-color: rgb(10, 25, 47);
  display: flex;
  justify-content: center;
  padding: 80px 30px;
  padding-left: 100px;
  margin-top: 80px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  overflow: hidden:

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const AboutInnerContainer = styled.div`
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
export const AboutLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // align-items: st;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutRightContainer = styled.div`
  width: 100px;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  margin-top: 120px;
  @media (max-width: 960px) {
    width: 5px;
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 80px;
  }

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-top: 600px;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    margin-top: 600px;
  }

`;

export const Img = styled.img`
  position: relative;
  width: 900px;
  height: 400px;
  max-width: 900px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid #64FFDA;
  filter: saturate(80%);
  &:hover {
    filter: saturate(100%);
  }

  @media (max-width: 1200px) {
    max-width: 300px;
    max-height: 400px;
  }

  @media (max-width: 960px) {
    max-width: 300px;
    max-height: 400px;
    margin-right: 120px;
    margin-bottom: 150px;
  }

  @media (max-width: 760px) {
    max-width: 350px;
    max-height: 450px;
    margin-right: 520px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 350px;
    margin-right: 400px;
    margin-bottom: 40px;
  }

  @media (max-width: 450px) {
    max-width: 200px;
    max-height: 250px;
    margin-right: 280px;
    margin-top: 70px;
    margin-bottom: 10px;
  }

`;

export const Title = styled.div`
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #CCD6F6;
  padding-bottom: 70px;
  text-align: center;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 28px;
  }

  @media (max-width: 640px) {
    text-align: center;
    font-size: 28px;
    line-height: 48px;
    margin-bottom: 8px;
    margin-left: 30px;
  }

  @media (max-width: 450px) {
    margin-bottom: 0px;
    margin-top: 30px;
  }
`;

export const SubTitle = styled.div`
  width: 700px;
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 42px;
  color: #8892B0;

  @media (max-width: 1150px) {
    width: 500px;
    text-align: start;
  }

  @media (max-width: 960px) {
    width: 450px;
    text-align: start;
  }

  @media (max-width: 760px) {
    margin-left: 90px;
  }

  @media (max-width: 640px) {
    width: 450px;
    font-size: 16px;
    line-height: 32px;
  }

  @media (max-width: 450px) {
    width: 300px;
    font-size: 14px;
    margin-left: 70px;
  }
`;
