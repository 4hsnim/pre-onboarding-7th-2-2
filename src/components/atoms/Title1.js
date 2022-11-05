import styled from "styled-components";

const Title1 = styled.p`
  ${({ theme }) => theme.fontStyles.title1};
  margin: ${({ service }) => (service ? "53px 0px 13px 20px" : 0)};
`;

export default Title1;
