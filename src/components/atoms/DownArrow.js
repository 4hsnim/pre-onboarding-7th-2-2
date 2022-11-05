import styled, { css } from "styled-components";

const DownArrow = styled.img`
  width: 12px;
  height: 7.4px;
  float: right;
  position: relative;

  ${({ service }) => css`
    margin-right: 26px;
    bottom: 10px;
  `}
`;

export default DownArrow;
