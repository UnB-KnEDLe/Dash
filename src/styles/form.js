import styled from "styled-components";

export const Form = styled.div`
    padding: 1rem;

    h2, h4 {
        width: 50%;
        margin: auto;
        padding: 1rem;
        text-align: left;
    }

    h4 {font-style: italic}
`;

export const FormControl = styled.input`
    padding: .5rem;
    border-radius: .5rem;
    border: 1px solid #ccc;
`;

export const FormGroup = styled.div`
    display: grid;
    width: 50%;
    text-align: left;
    padding: 1rem;

    label {font-size: .825rem;}
`;

export const SubmitButton = styled.button`
    background: white;
    border: 2px  solid #2980b9;
    color: #2980b9;
    border-radius: 1rem;
    height: 2.5rem;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    cursor: pointer;
    padding: 0 .5rem;
    margin-top: 1rem;

    &:hover {
        color: white;
        background: #2980b9;
    }
`;