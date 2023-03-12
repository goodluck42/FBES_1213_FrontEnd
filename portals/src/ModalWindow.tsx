import {MutableRefObject, PropsWithChildren, useState} from "react";
import {createPortal} from "react-dom";
import "./ModelWindow.css";

type ModalWindowProps = {
    title: string;
    onClick?: () => void;
    show: boolean;
} & PropsWithChildren;


export default function ModalWindow(props: ModalWindowProps)
{
    // const [open, setOpen] = useState(props.show);
    // if (!open)
    // {
    //     return null;
    // }

    return createPortal((
        <div className="modal-window">
            <header>
                <div>{props.title}</div>
                <span className="modal-close" onClick={props.onClick}>X</span>
            </header>
            <main>
                {props.children}
            </main>
            <footer></footer>
        </div>
    ), document.getElementById("modal") as HTMLElement);
}