import { Wrapper } from "./components";
import HorizontalLine from "../HorizontalLine";
import { GlobalStyle } from "../../style/GlobalStyle";

const Root = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <HorizontalLine />
      <HorizontalLine />
      <HorizontalLine />
      <HorizontalLine />
    </Wrapper>
  );
};

export default Root;
