import Image from 'next/image';
import React from 'react';

interface PhotoModalProps {
  onClose: () => void;
  imageUrl: string;
}

const PhotoModal = ({ onClose, imageUrl }: PhotoModalProps) => {
  return (
    <div
      className="fixed inset-0 z-20 overflow-y-auto bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-white p-6 rounded-lg max-h-[700px]"
          onClick={e => e.stopPropagation()}
        >
          <Image src={imageUrl} alt="Fotos galeria" width="700" height="700" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
