import React, {useEffect, useRef, useState} from 'react';
import ModalWindow from "./ModalWindow";
import './App.css';

function App() {
    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };

    const modalWindow = <ModalWindow title="It is a title" show={open} onClick={toggleModal}>
        <div>123</div>
        <input type="button" value="Click me"/>
    </ModalWindow>;

    useEffect(() => {

    }, [open]);

    return (
        <>
            {open ? modalWindow : <></>}
            <input type="button" value="Open modal" onClick={toggleModal}/>
        </>

    );
}

export default App;
