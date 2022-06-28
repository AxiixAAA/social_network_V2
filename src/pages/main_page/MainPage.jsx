import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import PrimarySearchAppBar from "./conponents/main_header/PrimarySearchAppBar";
import MenuListComposition from "./conponents/main_aside/MenuListComposition";
import SimpleContainer from "./conponents/main_container/SimpleContainer";
// import MiniDrawer from "../../components/mini_draver/MiniDrawer";

const MainWrap = styled(Box)`
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const MainHeader = styled(Box)`
    width: 100%;
    margin-bottom: 15px;
`;
const MainAside = styled(Box)`
    width: 20%;
`;
const MainContainer = styled(Box)`
    width: 78%;
`;

const MainPage = () => {
  return (
    <>
      <MainWrap>
        <MainHeader>
          <PrimarySearchAppBar />
          {/* <MiniDrawer /> */}
        </MainHeader>
        <MainAside>
          <MenuListComposition />
        </MainAside>
        <MainContainer>
          <SimpleContainer />
        </MainContainer>
      </MainWrap>
    </>
  );
};

export default React.memo(MainPage);
