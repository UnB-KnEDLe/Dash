import styled, { css } from "styled-components";
import { shade } from "polished";
import headerBg from "../assets/header-bg.jpg";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  overflow-x: hidden;

  :last-child {
    padding-bottom: 20px;
  }
  
  width: 100vw;

  text-align: -webkit-center;

  header{
    display: flex;
    width: 100%;
    flex-direction: row;
    height: 8rem;
    background-image: url(${headerBg});
    background-size: cover;
    background-position: center 53%;
    justify-content: center;
    color: white;
    position: relative;
    transition: .25s;

    .background-header {
      background: #0c365299;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      top: 0;
      left: 0;
    }
    
    .header-content {
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: space-between;
      place-items: center;
      width: 80%;
      max-width: 1366px;
      height: 100%;
      z-index: 1;

      .dodf-logo {
        display: flex;
        max-width: 250px;
        width: 70%;
        height: auto;

        :last-child {
          
        }
      }

      > a {
        display: flex;
        place-items: center;
        
        img {
          padding: 5px;
          max-width: 95px;
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 15px;
  place-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(80% + 15px);  
  max-width: 1390px;

  .hidden {
    display: none !important;
  } 
`;

export const ButtonExtract = styled.button`
  background: #ffffff;
  height: 4.5rem;
  border-radius: 1rem;
  width: 11.125rem;
  border: 0;
  border: 1px #2980b9 solid !important;
  font-size: 18px;
  color: black;
  font-weight: bold;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

  ${(props) =>
    props.type === true &&
    css`
      background: #2980b9;
      color: white;
    `}

  &:hover {
    background: ${shade(0, "#2980b9")};
  }
`;

export const ButtonUpload = styled.button`
  background: #2980b9;
  height: 2.5rem;
  border-radius: 1rem;
  width: 61%;
  border: 0;
  margin: 13px !important;
  color: #fff;
  font-weight: bold;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);

  input {
    display: none;
  }

  label {
    cursor: pointer;
  }

  &:hover {
    background: ${shade(0.2, "#2980B9")};
  }
`;

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  border-radius: 5px;
  padding: 22px;
  max-width: 1366px;

  .drop-icon {
    margin-bottom: 15px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  p {
    margin-top: 10px;
  }

  label {
    cursor: pointer;
  }

  img {
    width: 90px;
    height: auto;
  }

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 1366px;
  ${(props) => props.colorUp && "border-up: 5px solid" + props.colorUp};
  ${(props) => props.colorLeft && "border-left: 5px solid" + props.colorLeft};
  ${(props) => props.colorBottom && "border-bottom: 5px solid" + props.colorBottom};
  ${(props) => props.colorRight && "border-right: 5px solid" + props.colorRight};
  width: 100%;
  box-shadow: ${(props) => {
    switch (props.shadow) {
      case 0:
        return "none";
      case 1:
        return "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"
      case 2: 
        return "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"
      case 3:
        return "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"
      case 4:
        return "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);"
      case 5:
        return "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);"
      default:
        return "none";
  }}};
`;