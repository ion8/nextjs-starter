import * as Yup from 'yup';

import { FormProvider, useForm } from 'react-hook-form';

import axios from 'axios';
import { Button } from '@/ui/buttons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export const NewsletterForm = () => {
  const router = useRouter();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
    agreeToCommunications: Yup.boolean()
      .oneOf([true], 'You must agree to receive communications')
      .required(),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      agreeToCommunications: false,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = data => {
    // this handler should be further extended for a real project
    // const submitURL = `/api/newsletter-form`;
    // if (data) {
    //   axios
    //     .post(submitURL, { ...data, page: router.pathname })
    //     .then(res => {
    //       setSubmitSuccess(true);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       alert('There was an error submitting your form. Please try again.');
    //     });
    // }
    console.log(data);
    setSubmitSuccess(true);
  };

  return (
    <>
      <div className='text-center'>
        <h3 className='text-[30px] leading-[38px] font-bold text-white'>
          {submitSuccess ? (
            'Thank you for subscribing!'
          ) : (
            <span>Newsletter subscription form</span>
          )}
        </h3>
        <div className='leading-normal text-base mt-5 text-white'>
          {submitSuccess
            ? 'You will receive an email shortly with a link to confirm your subscription.'
            : 'Receive the latest blog posts and news updates. No spam.'}
        </div>
        <div className='mt-8'>
          {!submitSuccess ? (
            <FormProvider {...methods}>
              <form
                className='flex flex-col items-center justify-center md:gap-4'
                onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col w-full gap-4 md:flex-row md:justify-center'>
                  <div className='w-full md:w-96'>
                    <input
                      className={`w-full px-6 py-4 placeholder-black border rounded-md focus:border-cobalt border-gray ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      {...methods.register('email')}
                      type='email'
                      placeholder='Email *'
                    />
                    {errors.email && (
                      <span className='text-sm text-red-500'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <Button
                    label='Subscribe'
                    type='submit'
                    variant='tertiary'
                    className='px-10'
                  />
                </div>

                <div className='flex'>
                  <input
                    id='newsletterCheckbox'
                    type='checkbox'
                    {...methods.register('agreeToCommunications')}
                    className='focus:ring-2 focus:ring-transparent text-black w-4 h-4 p-2.5 bg-gray-50 rounded border border-gray-300'
                  />

                  <label
                    htmlFor='newsletterCheckbox'
                    className='ml-2 text-left cursor-pointer'>
                    <div className='text-white'>
                      I agree to receive email communications from ion8
                    </div>
                  </label>
                </div>
                {errors.agreeToCommunications && (
                  <span className='text-sm text-red-500'>
                    {errors.agreeToCommunications.message}
                  </span>
                )}
              </form>
            </FormProvider>
          ) : null}
        </div>
      </div>
    </>
  );
};
