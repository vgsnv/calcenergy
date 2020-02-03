import styled from "styled-components/native";

export const Page = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const BodyContainer = styled.View`
  flex: 1 0 auto;
  align-items: center;
`;

export const PageTitleContainer = styled.View`
  /* background-color: #ccc; */
  height: 60px;
  padding-top: 37px;
`;
export const PageTitleContainerText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.32;
`;

export const CaptionContainer = styled.View`
  height: 55px;
  padding-top: 10px;
`;

export const CaptionContainerText = styled.Text`
  font-size: 13px;
  font-weight: 400;
  color: #494949;
  line-height: 22px;
  letter-spacing: 0.31;
`;
