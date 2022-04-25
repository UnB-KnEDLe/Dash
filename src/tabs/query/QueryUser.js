import { useState } from "react";

import Loading from "../../components/Loading";
import {createDriver} from "use-neo4j";
import { Form, FormControl, FormGroup, SubmitButton } from "../../styles/form";

const DEFAULT_DB_SETTINGS = {
    scheme: 'neo4j',
    host: '164.41.76.30',
    port: '8080',
    username: '',
    password: '',
};

export default function QueryUser({user, setUser, setShowUser}) {
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState(false);

    const onKeyPress = (e) => {
        if(e.key !== "Enter") return
        onLogin();
    }

    const onLogin = () => {
        const {scheme, host, port} = DEFAULT_DB_SETTINGS;
        setAuthError(false);
        setLoading(true);

        createDriver(scheme, host, port, username, password)
            .verifyConnectivity()
            .then(() => {
                setUser({username: username, password: password})
                setShowUser(false)
            })
            .catch((e) => setAuthError(true))
            .finally(() => setLoading(false));
    }

    // server_user: "neo4j",
    // server_password: "nido@CIC2021",

    return (
        <Form className="Form">
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
                    onSubmit={onLogin}
                    onKeyPress={onKeyPress}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="password">Senha:</label>
                <FormControl
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onSubmit={onLogin}
                    onKeyPress={onKeyPress}
                />
            </FormGroup>
            { loading
                ? <Loading state={loading}  />
                : <SubmitButton onClick={onLogin}>Entrar</SubmitButton>
            }
            {authError && (<h4 className="error-text">Erro de autenticação!<br /> Por favor, tente novamente.</h4>)}
            
        </Form>
    )
}