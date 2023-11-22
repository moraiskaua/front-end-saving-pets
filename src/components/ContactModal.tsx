import React from 'react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  return (
    <div
      className="fixed inset-0 z-20 overflow-y-auto bg-black/75"
      onClick={onClose}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-white py-7 px-12 rounded-lg"
          onClick={e => e.stopPropagation()}
        >
          <center>
            <p className="text-brown uppercase font-bold text-2xl mb-4">
              Atenção
            </p>
          </center>
          <p className="text-center mb-5">
            É necessário estar logado <br /> para entrar em contato.
          </p>
          <div className="flex justify-center items-center mt-2">
            <button
              onClick={onClose}
              className="bg-yellow py-3 px-16 rounded-lg transition transition-colors-duration-300"
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
