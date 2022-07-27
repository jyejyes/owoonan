import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

type PropType = {
  prop: string;
};
const MenuButton = ({ prop }: PropType) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const path = window.location.pathname;

  useEffect(() => {
    if (path.slice(1) === prop || (path === "/" && prop === "exercise")) {
      setColor("#1C2C80");
    } else {
      setColor("#CCCCCC");
    }
  }, [path]);

  useEffect(() => {
    switch (prop) {
      case "exercise":
        setTitle("운동");
        break;
      case "record":
        setTitle("기록");
        break;
      case "statistic":
        setTitle("통계");
        break;
      case "setting":
        setTitle("설정");
        break;
      default:
        throw new Error(`버튼 타입 오류: ${prop}`);
        break;
    }
  }, [prop]);
  return (
    <StyledBtn>
      <Link to={`/${prop}`}>
        <Icon color={color} title={prop} />
        <StyledTitle color={color}>{title}</StyledTitle>
      </Link>
    </StyledBtn>
  );
};

export default MenuButton;

const StyledBtn = styled.button`
  width: 50px;
  height: 40px;
`;

const StyledTitle = styled.p`
  color: ${(props) => props.color};
`;
