export const dynamicFields = [
  {
    type: 'text',
    label: 'First Name',
    name: 'firstName',
    required: true,
    className: '',
    validationMsg: 'Enter your first name',
  },
  {
    type: 'text',
    label: 'Last Name',
    name: 'lastName',
    required: true,
    className: '',
    validationMsg: 'Enter your last name',
  },
  {
    type: 'tel',
    label: 'Phone Number',
    name: 'phoneNumber',
    required: false,
    className: '',
  },
  {
    type: 'email',
    label: 'Email Address',
    name: 'emailAddress',
    required: true,
    className: '',
    validationMsg: 'Enter your email address',
  },
  {
    type: 'select',
    label: 'Select your department',
    name: 'yourDepartment',
    required: true,
    options: ['Software Engineering', 'Sales & Marketing', 'Design'],
    className: '',
    validationMsg: 'Select your department',
  },
];
