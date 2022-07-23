import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const color = {
  black: "#151515",
  white: "#FFFFFF",
  main: "#FF6A9F",
  light_gray: "#D9D9D9",
  yellow: "#FEE500",
  green: "#1EC800",
  deepBlue: "#1C2C80",
};

const size = {
  medium: "15px",
};

export const theme = {
  color,
  size,
};
