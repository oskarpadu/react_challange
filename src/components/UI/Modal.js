import { useEffect, useRef } from 'react';

const Modal = ({ open, onClose, children }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }

        return () => {
            dialog.close();
        }
    }, [open]);

    return (
        <dialog ref={dialogRef} className="modal" onClose={onClose}>
            {children}
        </dialog>
    )
}

export default Modal