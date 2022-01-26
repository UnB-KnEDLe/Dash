import {useState, useEffect} from 'react';
import { Container } from '../styles/floatMessage';

export default function FloatMessage({message, setMessage, duration, title}) {
    const [messageText, setMessageText] = useState(message)

    duration = duration || 3000;

    useEffect(() => {
        if (message) {
            setMessageText(message)
            setTimeout(() => setMessage(''), duration)
        }
    }, [duration, message, setMessage])

    return (
        <Container visible={message.length > 0} onClick={ () => setMessage('') }>
            { title && <div className="float-header">
                <h3>{title}</h3>
                <hr/>
            </div> }
            <div className="float-body">
                {messageText}
            </div>
        </Container>
    )
}