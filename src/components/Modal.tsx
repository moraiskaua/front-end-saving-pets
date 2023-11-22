import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-20 overflow-y-auto bg-black/75">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-5 rounded-lg">
          <center>
            <small className="text-yellow">Atenção</small>
          </center>
          <p>É necessário estar logado para entrar em contato.</p>
          <div className="flex justify-center items-center mt-2">
            <button onClick={onClose} className="bg-yellow p-2 rounded-lg">
              Entendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
