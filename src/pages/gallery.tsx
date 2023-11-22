import React, { useState } from 'react';
import Banner from '@/components/Banner';
import CardImages from '@/components/CardsImages';
import Layout from '@/components/Layout';
import PhotoModal from '@/components/PhotoModal';
import images from '@/components/json/gallery-images.json';

type ImageProps = {
  id: string;
  image: string;
};

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({} as ImageProps);

  const handleOpenModal = (image: ImageProps) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage({} as ImageProps);
  };

  return (
    <Layout>
      <Banner
        text="Veja um pouco da nossa história e momentos na nossa galeria"
        pre_title="Gal"
        pos_title="eria"
        isSingleWord
      />
      <section className="min-h-screen flex flex-wrap gap-8 justify-center items-center p-12 bg-wallpaper-about-us bg-cover bg-center">
        {images.map(image => (
          <CardImages
            key={image.id}
            imageUrl={image.image}
            selectedImage={selectedImage.image}
            onClick={() => handleOpenModal(image)}
          />
        ))}
      </section>
      {isModalOpen && (
        <PhotoModal imageUrl={selectedImage.image} onClose={handleCloseModal} />
      )}
    </Layout>
  );
};

export default Gallery;
