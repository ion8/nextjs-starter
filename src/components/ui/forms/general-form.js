import * as Yup from 'yup';

import {
  CheckboxList,
  Input,
  RadioButtonList,
  Select,
  Textarea,
} from '@/ui/form-elements';
import { FormProvider, useForm } from 'react-hook-form';

import axios from 'axios';
import { Button, ButtonLink } from '@/ui/buttons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export const GeneralForm = ({ conversionPageUrl }) => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    emailAddress: Yup.string().required('Please enter your email address'),
    phoneNumber: Yup.string(),
    aboutYourDepartment: Yup.string().required('Please select your department'),
    hobbiesChk: Yup.array(),
    ageGroupLst: Yup.string(),
    description: Yup.string().required('Please enter your message'),
  });

  // const methods = useForm({
  //   resolver: yupResolver(validationSchema),
  // });

  // const { formState, register, handleSubmit } = methods;
  // const { errors } = formState;

  const { formState, register, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const onSubmit = data => {
    // the following console.log will print out all the data for debugging purposes.
    console.log(data);

    // The following form submission code is a sample code that can be used and customized for real projects
    /*
    const submitURL = `/api/form-handler`;
    if (data) {
      const webhookData = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phoneNumber,
        email: data.emailAddress,
        aboutYourDepartment: data.aboutYourDepartment,
        hobbiesChk: data.hobbiesChk,
        ageGroupLst: data.ageGroupLst,
        description: data.description,
        page: router.pathname,
        pageTitle: { pageTitle },
      };

    router.push('/thank-you' + conversionPageUrl);

    axios
        .post(submitURL, webhookData)
        .then((res) => {
          setContactFormOpen(false);
          if (router.pathname.includes('/lp')) {
            router.push(router.pathname + '/thank-you');
          } else {
            router.push('/thank-you');
          }
        })
        .catch((err) => {
          alert('There was an error submitting your form. Please try again.');
        });
    }
    */
  };

  return (
    <div className='justify-center pt-20 lg:text-left'>
      {/* <FormProvider {...formState}> */}
      <form
        id='form'
        className=''
        onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          {/* First name - Required */}
          <div>
            <Input
              label='First name'
              name='firstName'
              id='firstName'
              type='text'
              placeholder='First name'
              isRequired
              register={{ ...register('firstName') }}
              errorMessage={errors.firstName?.message}
            />
          </div>

          {/* Phone number - not required */}
          <div>
            <Input
              label='Phone number'
              name='phoneNumber'
              id='phoneNumber'
              type='tel'
              placeholder='Phone number'
              register={{
                ...register('phoneNumber', {
                  required: false,
                }),
              }}
            />
          </div>
          {/* Email address - Required */}
          <div>
            <Input
              label='Email address'
              name='emailAddress'
              id='emailAddress'
              type='email'
              placeholder='Email address'
              isRequired
              register={{ ...register('emailAddress') }}
              errorMessage={errors.emailAddress?.message}
            />
          </div>

          {/* Dropdown Field - Required */}
          <div>
            <Select
              label='Which department do you belong to?'
              name='aboutYourDepartment'
              isRequired
              options={['Software Engineering', 'Sales & Marketing', 'Design']}
              register={{ ...register('aboutYourDepartment') }}
              errorMessage={errors.aboutYourDepartment?.message}
            />
          </div>

          {/* Checkbox list - not Required */}
          <div>
            <CheckboxList
              label='What are your hobbies'
              name='hobbiesChk'
              options={['Books', 'Biking', 'Gardening']}
              register={{
                ...register('hobbiesChk', {
                  required: false,
                }),
              }}
            />
          </div>

          {/* Textarea Field - Required */}
          <div>
            <Textarea
              label='Your message'
              name='description'
              id='description'
              isRequired
              register={{ ...register('description') }}
              errorMessage={errors.description?.message}
            />
          </div>

          {/* Submit Button */}
          <div className='flex md:col-span-2 md:justify-end'>
            <ButtonLink
              className='px-10'
              label={loading ? 'Submitting...' : 'Submit'}
              variant='primary'
              isTypeSubmit
            />
          </div>
        </div>
      </form>
      {/* </FormProvider> */}
    </div>
  );
};
