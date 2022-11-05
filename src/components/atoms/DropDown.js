import styled from "styled-components";
import { css } from "styled-components";

const DropDown = styled.div`
  width: 123px;
  height: 40px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  padding-left: 20px;
  padding-top: 12px;
  ${({ service }) =>
    service &&
    css`
      width: 240px;
      height: 60px;
      padding-top: 22px;
    `};
`;

export default DropDown;
