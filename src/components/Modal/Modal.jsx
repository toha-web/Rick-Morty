import * as Layout from '../../layouts';

import style from "./Modal.module.css";

function Modal({ info, close }) {

    return (
        <div className={`${style["box-modal"]} ${style.active}`}>
            <div className={style.modal}>
                <span id={style["modal-closed"]} onClick={close}>
                    ❌
                </span>
                <div className={style["modal-body"]}>
                    {info.url.includes("character") ? (
                        <Layout.ModalCharacterLayout
                            info={info}
                            style={style}
                        />
                    ) : info.url.includes("location") ? (
                        <Layout.ModalLocationLayout
                            info={info}
                            style={style}
                        />
                    ) : (
                        <Layout.ModalEpisodeLayout
                            info={info}
                            style={style}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;