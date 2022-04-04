import { useState } from "react";

import {createDriver} from "use-neo4j";
import { Form, FormControl, FormGroup, SubmitButton } from "../../styles/form";

const DEFAULT_DB_SETTINGS = {
    scheme: 'neo4j',
    host: '164.41.76.30',
    port: '8080',
    username: '',
    password: '',
};

export default function QueryUser({user, setUser, setShowUser, className}) {
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [authError, setAuthError] = useState(false);

    const onLogin = () => {
        const {scheme, host, port} = DEFAULT_DB_SETTINGS;

        createDriver(scheme, host, port, username, password)
        .verifyConnectivity()
        .then(() => {
            setUser({username: username, password: password})
            setShowUser(false)
        }).catch((e) => {
            setAuthError(true);
            console.log(e);
        });
    }

    // server_user: "neo4j",
    // server_password: "nido@CIC2021",

    return (
        <Form className={className}>
            <h2>Login</h2>
            { Object.keys(user).length > 0 && (
                <h4>Você está logado como {user.username}</h4>
            ) }
            <FormGroup>
                <label htmlFor="username">Usuário:</label>
                <FormControl
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="password">Senha:</label>
                <FormControl
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </FormGroup>
            {authError && (<h4>Erro de autenticação! Por favor, tente novamente.</h4>)}
            <SubmitButton onClick={onLogin}>Entrar</SubmitButton>
        </Form>
    )
}