"use client";

import React, { useState } from 'react';
import Lottie from 'react-lottie';
import sent from '../../../../public/sent.json'; 

const ContactForm = () => {

  const [loading, setLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const [formData, setFormData] = useState({
    userType: '',
    name: '', 
    email: '',
    message: '',
    redes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'userType' && (value === 'contentCreator' || value === 'company')) {
      setFormData({
        ...formData,
        [name]: value,
        name: '', 
      });
    } else {

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
      setLoading(true )
      e.preventDefault();
      const data = {
          ...formData
      };
      console.log(data);
  
      const response = await fetch("api/contact", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      });
  
      if (response.ok) {
        console.log("Formulario enviado con éxito");
        setLoading(false);
        setFormSent(true);
        setFormData({
          userType: '',
          name: '', 
          email: '',
          message: '',
          redes: ''
        })

      } else {
        console.log("Error al enviar el formulario");
        setLoading(false);
      }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: sent,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white my-20 p-8 rounded-lg lg:w-1/2 mx-auto drop-shadow-lg lg:my-52">
      <h2 className="text-5xl font-bold mb-4 text-center">Contactanos</h2>
      <div className="mb-4">
        <label htmlFor="userType" className="block mb-2">Tipo de usuario:</label>
        <select
          id="userType"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        >
          <option value="">Select User Type</option>
          <option value="Creador de Contenido">Creador de contenido</option>
          <option value="company">Empresa</option>
        </select>
      </div>
      {formData.userType === 'company' && (
        <>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Nombre de la empresa:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
          </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Redes sociales:</label>
          <input
            type="text"
            id="name"
            name="redes"
            value={formData.redes}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
          </div>
          </>
      )}
      {formData.userType === 'Creador de Contenido' && (
        <>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Usuario de Tiktok/Instagram:</label>
          <input
            type="text"
            id="name"
            name="redes"
            value={formData.redes}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
          </div>
          </>
      )}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Dirección de correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
          required
        />
      </div>
      <div className="text-left">
        <button type="submit" disabled={loading} className="bg-blue disabled:bg-gray-400 disabled:text-gray-100 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
      </div>
      {loading && (
        <div className='w-full flex items-center justify-center'>
        <button
          className="mt-10 rounded-full bg-blue text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-green-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-medium font-medium capitalize leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
          type="button"
          >
          <div
            role="status"
            className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          >
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >
              Loading...
            </span>
          </div>
          Loading
        </button>
        </div>
      )}

      {
        formSent && (
          <div className="text-xl md:text-2xl font-black tracking-wider rounded-full mt-4 text-blue">
            <div className='flex items-center'>
              <p>Formulario enviado!</p>
              
              <div className='-ml-'>
                <Lottie 
                  options={defaultOptions}
                  height={75} 
                  width={75} 
                />
              </div>

            </div>
              <p className='text-blue text-lg'>
                Pronto nos contactaremos contigo!
              </p>
            
          </div>
        )
      }
    </form>
  );
};

export default ContactForm;
