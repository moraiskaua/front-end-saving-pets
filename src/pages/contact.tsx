import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import FormTextBox from '@/components/FormTextBox';
import Layout from '@/components/Layout';
import ContactModal from '@/components/ContactModal';
import { parseCookies } from 'nookies';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { AuthContext } from '@/contexts/AuthContext';
import { api } from '@/services/apiClient';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const [reason, setReason] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const { '@savingpets-auth.token': token } = parseCookies();

    if (!token) {
      return setIsModalOpen(true);
    }

    const { '@savingpets-auth.userId': userId } = parseCookies();

    api.get(`/users/${userId}`).then(response => {
      const { id, name, email, cpf, phone, createdAt } = response.data.data;

      setUser({
        id,
        name,
        email,
        cpf,
        phone,
        createdAt,
      });
    });
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { '@savingpets-auth.token': token } = parseCookies();

    if (!token) {
      return toast.warn('Você precisa estar logado para enviar uma mensagem!', {
        position: 'bottom-right',
      });
    }

    const { name, email, phone } = user;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        {
          to_name: 'Equipe Saving-Pets',
          from_name: name,
          from_email: email,
          from_phone: phone,
          reason,
          msg,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      );

      toast.success('Mensagem enviada com sucesso!', {
        position: 'bottom-right',
      });
    } catch {
      toast.error('Algo de errado, tente novamente mais tarde.', {
        position: 'bottom-right',
      });
    } finally {
      setReason('');
      setMsg('');
    }
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
            placeholder="Motivo do contato"
            type="text"
            value={reason}
            onChange={e => setReason(e.target.value)}
            required
          />
          <FormTextBox
            placeholder="Mensagem"
            type="text"
            value={msg}
            onChange={e => setMsg(e.target.value)}
            required
          />
          <FormButton>Enviar</FormButton>
        </form>
      </section>
      {isModalOpen && <ContactModal onClose={handleCloseModal} />}
    </Layout>
  );
};

export default Contact;
