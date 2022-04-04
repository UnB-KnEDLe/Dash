import { useState } from "react";
import { Form, FormControl, FormGroup, SubmitButton } from "../../styles/form";

export default function QueryUser({user, setUser, setShowUser}) {
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);

    const onLogin = () => {
        setUser({username: username, password: password})
        setShowUser(false)
    }

    // server_user: "neo4j",
    // server_password: "nido@CIC2021",

    return (
        <Form>
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
            <SubmitButton onClick={onLogin}>Entrar</SubmitButton>
        </Form>
    )
}