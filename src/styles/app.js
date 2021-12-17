import styled, { css } from "styled-components";
import HeaderImg from "../assets/header.svg";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  
  width: 100vw;

  text-align: -webkit-center;

  header{
    width: 100%;
    overflow: hidden;
    height: 11.5rem;
    background: url(${HeaderImg}) repeat center;
  }

  span{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;

    div {
      display: flex;
      flex-direction: column;
      padding-right: 8rem;
      padding-top: 8rem;

      h2 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: var(--primary);
      }
      
      p  {
        font-size: 2rem;
        max-width: 50rem;
      }
    }
  }
`;

export const BigCard = styled.div`

  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  max-width: 1200px;
  border-radius: 10px;
  padding: 15px;

  .bigcard-header {
    display: flex;
    justify-content: center;
    place-items: center;
    gap: 1rem;
    user-select: none;
    cursor: pointer;
  }

  .bigcard-header-button {
    display: flex;
    place-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #3180b9;
    padding: 10px;
    border-radius: 20px;
  }

  .bigcard-header-icon {
    transition: 0.35s;
  }

  .bigcard-header-icon.hide {
    transform: rotate(180deg);
  }

  .bigcard-header-button:hover {
    color: white;
    background: #3180b9;
  }

  h1 {
    color: #3180b9;
    font-weight: bold;
    font-size: 55px;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 2px;
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
  margin-top: 40px;
  border: 1px dashed #6c63ff;
  padding: 22px;
  width: 70%;

  p {
    margin-top: 10px;
  }

  button {
    cursor: pointer;
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
