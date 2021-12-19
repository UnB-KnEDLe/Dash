import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';

const CHAR_LIMIT = 100;

export default function ExpandText({text}) {
    var showText = typeof text === 'string' ? text : '';
    if (typeof showText !== 'string') {
        showText = '';
    }
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        setExpanded(showText.length <= CHAR_LIMIT)
    }, [showText]);

    return (
        <div>
            {showText.slice(0, CHAR_LIMIT)}
            { showText.length > CHAR_LIMIT && (
                <>
                    <button style={{marginLeft: '2px'}} onClick={handleExpand}><FontAwesomeIcon icon={faEllipsisH} /></button>

                    <div style={{zIndex: 500, background: '#00000033', display: expanded ? 'flex' : 'none', position: 'fixed', width: '100vw', height: '100vh', placeItems: 'center', justifyContent: 'center', top: '0', left: '0'}}>
                        <div style={{borderRadius: '5px', display: 'flex', flexDirection: 'column', padding: '20px', gap: '15px', backgroundColor: 'white', width: '80%', height: 'auto', maxWidth: '1200px', maxHeight: '80vh', overflowY: 'auto'}}>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <button style={{display: 'flex', background: '#2980b9', borderRadius: '5px', border: 'none', color: 'white', padding: '5px'}} onClick={handleExpand}><FontAwesomeIcon icon={faTimes}/></button>
                            </div>
                            <div style={{display: 'flex', placeItems: 'center', overflowY: 'auto', justifyContent: 'center'}}>
                                {showText}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}