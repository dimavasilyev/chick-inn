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
    .matches(/^[0-9\.\-\/]+$/, 'Telefon incorect')
    .min(6, 'Prea scurt')
    .max(15, 'Prea lung')
    .required('Introduceti telefonul'),
  email: yup.string().email('Email incorect').required('Introduceti email-ul'),
  delivery_method: yup.mixed().oneOf(['delivery', 'take_away']),
  street: yup.string().required('Introduceti strada'),
  house: yup.string().required('Introduceti casa'),
  porch: yup.number(),
  floor: yup.number(),
  apartment: yup.number(),
  payment_method: yup.mixed().oneOf(['cod', 'card']),
  rest: yup.number(),
  comment: yup.string(),
});

const OrderForm = ({ onFinish }) => {
  const { emptyCart, totalPrice, items } = useCart();
  const [isSubmitted, setSubmission] = useState(false);

  const makeOrder = async (values) => {
    setSubmission(true);

    if (!isSubmitted) {
      await api.makeOrder(values, items, totalPrice);
    }
  };

  const { handleChange, handleSubmit, errors, values, isSubmitting } = useFormik({
    validateOnChange: false,
    initialValues: {
      name: '',
      telefon: '',
      email: '',
      delivery_method: 'delivery',
      street: '',
      // house: undefined,
      // porch: undefined,
      // floor: undefined,
      // apartment: undefined,
      // rest: undefined,
      payment_method: 'cod',
      comment: '',
    },
    onSubmit: async (values) => {
      await makeOrder(values);
      emptyCart();
      onFinish();
    },
    validationSchema: schema,
  });

  console.log('isSubmitting:', isSubmitting);

  const endPrice =
    totalPrice < 250 && values.delivery_method === 'delivery' ? totalPrice + 35 : totalPrice;

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 justify-between gap-4 md:gap-8">
          <div>
            {/* Name */}
            <label htmlFor="name">
              Numele<span className="text-red">*</span>:
            </label>
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
            <label htmlFor="telefon">
              Telefon<span className="text-red">*</span>:
            </label>
            <input
              className={`input ${errors.telefon ? 'error' : ''}`}
              type="text"
              pattern="[0-9]*"
              inputMode="tel"
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
        <div className=" w-full border-2 bg-yellow border-yellow rounded my-6" />
        <div>
          {/* Metoda de livrare */}
          <label>Metoda de livrare:</label>
          <div className="flex mb-3">
            <label htmlFor="delivery" className="checkbox-label__container mr-6 md:mr-10">
              Livrare (35 lei)
              <input
                id="delivery"
                name="delivery_method"
                type="radio"
                onChange={handleChange}
                value="delivery"
                checked={values.delivery_method === 'delivery'}
              />
              <span className="checkmark"></span>
            </label>
            <label htmlFor="take_away" className="checkbox-label__container">
              La pachet
              <input
                id="take_away"
                name="delivery_method"
                type="radio"
                value="take_away"
                onChange={handleChange}
                checked={values.delivery_method === 'take_away'}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between gap-4 md:gap-8">
          <div>
            {/* Strada */}
            <label htmlFor="street">
              Strada<span className="text-red">*</span>:
            </label>
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
            <label htmlFor="house">
              Casa<span className="text-red">*</span>:
            </label>
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
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div>
            {/* Подъезд */}
            <label htmlFor="porch">Scara:</label>
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
            <label htmlFor="floor">Etaj:</label>
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
            <label htmlFor="apartment">Apartament:</label>
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
        <div className="w-full border-2 bg-yellow border-yellow rounded my-6" />
        <div>
          {/* Metoda de plata */}
          <label>Metoda de plata:</label>
          <div className="flex mb-3">
            <label htmlFor="cod" className="checkbox-label__container mr-10">
              Cash
              <input
                id="cod"
                name="payment_method"
                type="radio"
                value="cod"
                onChange={handleChange}
                checked={values.payment_method === 'cod'}
              />
              <span className="checkmark"></span>
            </label>
            <label htmlFor="card" className="checkbox-label__container">
              Card
              <input
                id="card"
                name="payment_method"
                type="radio"
                value="card"
                onChange={handleChange}
                checked={values.payment_method === 'card'}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="w-full border-2 bg-yellow border-yellow rounded my-6" />
        <div>
          {/* Rest din */}
          <label htmlFor="rest">Rest din:</label>
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
          <label htmlFor="comment">Comentarii:</label>
          <textarea className="input" name="comment" id="comment" onChange={handleChange} />
        </div>
        <div className="flex items-center mt-6">
          <Button type="submit" className="mr-8" disabled={isSubmitting}>
            Comanda
          </Button>
          <div className="text-2xl font-black">Total: {endPrice} lei</div>
        </div>
        <p className="error-text">{Object.keys(errors).length !== 0 && 'Sunt erori'}</p>
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

          .checkbox-label__container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 18px;
            line-height: 20px;
            user-select: none;
          }

          /* Hide the browser's default checkbox */
          .checkbox-label__container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          /* Create a custom checkbox */
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            border: 2px solid #ecbe02;
          }

          /* When the checkbox is checked, add a blue background */
          .checkbox-label__container input:checked ~ .checkmark {
            background-color: #ecbe02;
          }

          /* Show the checkmark when checked */
          .checkbox-label__container input:checked ~ .checkmark:after {
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default OrderForm;
