import './styles.scss';
import P from 'prop-types';
import { useEffect, useState } from 'react';
export default function Message({ type, textMessage, setMessage }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (!textMessage) {
            setVisible(false);
            return;
        }
        setVisible(true);
        const time = setTimeout(() => {
            setVisible(false);
            setMessage('');
        }, 3000);

        return () => clearTimeout(time);
    }, [textMessage]);
    return (
        <>
            {visible && (
                <div className={`message ${type}`}>
                    <span>{textMessage}</span>
                </div>
            )}
        </>
    );
}

Message.propTypes = {
    type: P.string,
    textMessage: P.string,
    setMessage: P.func,
};
