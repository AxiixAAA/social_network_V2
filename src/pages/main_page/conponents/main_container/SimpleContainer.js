import { Box } from "@mui/system";
import * as React from "react";
import styled from "styled-components";

const ContainerMUI = styled(Box)`
 border: 1px solid red;
`

export default function SimpleContainer() {
  return (<>
    <ContainerMUI>

    </ContainerMUI>
  </> 
  );
}
