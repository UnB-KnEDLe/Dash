import styled from "styled-components";

export const Form = styled.div`
    display: grid;
    place-items: center;
    padding: 1rem;
    
    h2, h4 {
        width: 50%;
        margin: auto;
        padding: 1rem;
        text-align: center;
    }

    .error-text {
        text-align: center;
        margin-top: 1rem;
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
    max-width: 25rem;
    padding: 1rem;

    label {margin-bottom: .5rem;}
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