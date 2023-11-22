import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import FormTextBox from '@/components/FormTextBox';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import { AuthContext } from '@/contexts/AuthContext';
import { parseCookies } from 'nookies';
import { toast } from 'react-toastify';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [reason, setReason] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const cookies = parseCookies(undefined);

    if (!cookies['@savingpets-auth.token']) {
      setIsModalOpen(true);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const cookies = parseCookies(undefined);

    if (!cookies['@savingpets-auth.token']) {
      return toast.warn('Você precisa estar logado para enviar uma mensagem!', {
        position: 'bottom-right',
      });
    }

    toast.success('Mensagem enviada com sucesso!', {
      position: 'bottom-right',
    });
  };

  return (
    <Layout>
      <Banner
        text="Entre em contato com a equipe do saving-pets"
        pre_title="Cont"
        pos_title="ato"
        isSingleWord
      />
      <section className="min-h-screen bg-contact-forms flex items-center justify-start bg-yellow bg-no-repeat bg-right-bottom">
        <form
          className="bg-white shadow-lg py-12 px-8 w-4/12 ml-32 rounded-md flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl mb-6 text-center">Formulário de contato</h1>
          <FormInput
            placeholder="Informe o motivo do contato"
            type="text"
            required
          />
          <FormTextBox
            placeholder="Escreva sua mensagem"
            type="text"
            required
          />
          <FormButton>Enviar</FormButton>
        </form>
      </section>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </Layout>
  );
};

export default Contact;
