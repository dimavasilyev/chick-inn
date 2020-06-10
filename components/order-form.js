import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Button } from 'components/shared';
import { useCart } from '../hooks';
import api from '../api';

const schema = yup.object().shape({
  name: yup.string().required('Introduceti numele'),
  telefon: yup
    .string()
    .matches(/^[0-9]*$/, 'Telefon incorect')
    .min(6, 'Prea scurt')
    .max(15, 'Prea lung')
    .required('Introduceti telefonul'),
  email: yup.string().email('Email incorect').required('Introduceti email-ul'),
  delivery: yup.mixed().oneOf(['delivery', 'take_away']),
  street: yup.string().required('Introduceti strada'),
  house: yup.string().required('Introduceti casa'),
  porch: yup.number(),
  floor: yup.number(),
  apartment: yup.number(),
  payment_method: yup.mixed().oneOf(['cod', 'card']),
  rest: yup.number(),
  comment: yup.string(),
});

const OrderForm = () => {
  const [formSuccess, setSuccess] = useState(false);
  const { emptyCart } = useCart();
  const sum = 49;

  const makeOrder = async (values) => {
    await api.makeOrder(values);
  };

  const { handleChange, handleSubmit, errors, handleBlur } = useFormik({
    validateOnChange: false,
    initialValues: {
      name: '',
      telefon: '',
      email: '',
      delivery: 'delivery', // take_away
      street: '',
      house: undefined,
      porch: undefined,
      floor: undefined,
      apartment: undefined,
      payment_method: 'cod', //
      rest: undefined,
      comment: '',
    },
    onSubmit: async (values) => {
      await makeOrder(values);
      emptyCart();
      setSuccess(true);
    },
    validationSchema: schema,
  });

  if (formSuccess) {
    return <div className="text-3xl">thank you</div>;
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 justify-between gap-8">
          <div>
            {/* Name */}
            <label htmlFor="name">Numele*:</label>
            <input
              className={`input ${errors.name ? 'error' : ''}`}
              type="text"
              id="name"
              name="name"
              placeholder=""
              onChange={handleChange}
            />
            <p className="error-text">{errors.name}</p>
          </div>
          <div>
            {/* Telefon */}
            <label htmlFor="telefon">Telefon*:</label>
            <input
              className={`input ${errors.telefon ? 'error' : ''}`}
              type="text"
              pattern="[0-9]*"
              id="telefon"
              name="telefon"
              placeholder=""
              onChange={handleChange}
            />
            <p className="error-text">{errors.telefon}</p>
          </div>
        </div>
        <div>
          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=""
            className={`input ${errors.email ? 'error' : ''}`}
            onChange={handleChange}
          />
          <p className="error-text">{errors.email}</p>
        </div>
        <div className=" w-full border-2 border-yellow rounded my-6" />
        <div>
          {/* Metoda de livrare */}
          <label>Metoda de livrare</label>
        </div>
        <div className="grid grid-cols-2 justify-between gap-8">
          <div>
            {/* Strada */}
            <label htmlFor="street">Strada*:</label>
            <input
              className={`input ${errors.street ? 'error' : ''}`}
              type="text"
              name="street"
              id="street"
              placeholder=""
              onChange={handleChange}
            />
            <p className="error-text">{errors.street}</p>
          </div>
          <div>
            {/* Casa */}
            <label htmlFor="house">Casa*:</label>
            <input
              className={`input ${errors.house ? 'error' : ''}`}
              type="text"
              name="house"
              id="house"
              placeholder=""
              onChange={handleChange}
            />
            <p className="error-text">{errors.house}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            {/* Подъезд */}
            <label htmlFor="porch">Подъезд</label>
            <input
              className={`input ${errors.porch ? 'error' : ''}`}
              type="number"
              pattern="[0-9]*"
              name="porch"
              id="porch"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div>
            {/* Этаж */}
            <label htmlFor="floor">Этаж:</label>
            <input
              className={`input ${errors.floor ? 'error' : ''}`}
              type="number"
              pattern="[0-9]*"
              name="floor"
              id="floor"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div>
            {/* Apartament */}
            <label htmlFor="apartment">Apartament</label>
            <input
              className={`input ${errors.apartment ? 'error' : ''}`}
              type="number"
              pattern="[0-9]*"
              name="apartment"
              id="apartment"
              placeholder=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full border-2 border-yellow rounded my-6" />
        <div>
          {/* Metoda de plata */}
          <label>Metoda de plata</label>
        </div>
        <div className="w-full border-2 border-yellow rounded my-6" />
        <div>
          {/* Rest din */}
          <label htmlFor="rest">Rest din</label>
          <input
            className={`input ${errors.rest ? 'error' : ''}`}
            type="number"
            pattern="[0-9]*"
            name="rest"
            id="rest"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div>
          {/* Comentarii */}
          <label htmlFor="comment">Comentarii</label>
          <textarea className="input" name="comment" id="comment" onChange={handleChange} />
        </div>
        <div className="flex items-center mt-6">
          <Button type="submit" className="mr-8">
            Comanda
          </Button>
          <div className="text-2xl font-black">Total: {sum} lei</div>
        </div>
        <p className="error-text">{Object.keys(errors).length !== 0 && 'Sunt errori'}</p>
      </form>
      <style jsx>
        {`
          .input {
            margin-bottom: 12px;
          }

          label {
            font-size: 18px;
            display: block;
            margin-bottom: 6px;
          }
        `}
      </style>
    </div>
  );
};

export default OrderForm;
