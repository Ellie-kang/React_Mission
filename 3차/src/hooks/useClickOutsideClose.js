import { useEffect } from 'react'

export const useClickOutsideClose = (ref, setModalOpen) => {

    useEffect(() => {
        const handleClickOtuside = (e) => {
            if (ref.current && !ref.current.contains(e.target)){
                setModalOpen(false);
            }
        }
    
    window.addEventListener("click", handleClickOtuside);

    return () => {
        window.removeEventListener("click", handleClickOtuside);
        };
    }, [ref, setModalOpen]);
};