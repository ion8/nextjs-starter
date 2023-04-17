import React from 'react';

export const DropdownArrowIcon = ({ className, ...props }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`-mt-[34px] absolute right-[10px] ` + className}
      {...props}
    >
      <path
        d='M5 7.5L10 12.5L15 7.5'
        stroke=''
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CloseIcon = ({ className, ...props }) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M18.8872 6.82495L6.88721 18.825'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.88721 6.82495L18.8872 18.825'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const HamburgerIcon = ({ className, ...props }) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M3.5 12H21.5'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 6H21.5'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 18H21.5'
        stroke='#474748'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const SubmitIcon = () => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='inline-block'
    >
      <path
        d='M12.298 1.06045C12.2296 1.04944 12.1596 1.05361 12.0929 1.07266C12.0263 1.09171 11.9646 1.12517 11.9123 1.17067C11.8601 1.21618 11.8184 1.27262 11.7904 1.336C11.7623 1.39938 11.7485 1.46815 11.75 1.53745V4.39745C11.75 4.59645 11.87 4.77145 12.036 4.88145C12.539 5.21745 12.87 5.79145 12.87 6.44445V8.44445C12.87 9.47445 12.03 10.3244 11 10.3244C9.96 10.3244 9.12 9.47445 9.12 8.44445V6.44445C9.12 5.79145 9.458 5.21745 9.964 4.88145C10.129 4.77145 10.25 4.59645 10.25 4.39845V1.53845C10.2516 1.46907 10.2379 1.40018 10.21 1.33668C10.182 1.27318 10.1403 1.21661 10.088 1.17099C10.0357 1.12537 9.97405 1.09182 9.90734 1.07272C9.84062 1.05361 9.77052 1.04943 9.702 1.06045C8.18555 1.32801 6.78825 2.05599 5.7 3.14545C5.00265 3.8407 4.44936 4.66673 4.07184 5.57621C3.69432 6.48569 3.5 7.46073 3.5 8.44545V13.4454C3.5 17.5754 6.87 20.9454 11 20.9454C15.13 20.9454 18.5 17.5754 18.5 13.4454V8.44545C18.5 4.75545 15.813 1.67845 12.298 1.06045Z'
        fill='white'
      />
    </svg>
  );
};

export const MessageSentIcon = ({ className, ...props }) => {
  return (
    <svg
      className={`mx-auto ` + className}
      {...props}
      width='92'
      height='47'
      viewBox='0 0 92 47'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M26.6469 0.140358C26.4098 0.206797 26.1922 0.339141 26.1634 0.434436C26.1195 0.579961 56.3193 19.3779 57.7257 20.0803C58.1815 20.3079 58.7406 19.9805 74.1052 10.4901C82.8543 5.0857 90.0822 0.597594 90.1673 0.516549C90.6811 0.0261829 88.1943 -0.0135371 58.0121 0.00284996C40.9985 0.0121122 26.8841 0.0739194 26.6469 0.140358ZM24.6782 23.6877V41.3466L26.2338 39.9263C27.0894 39.1451 32.2694 34.4443 37.7451 29.4802C43.2207 24.5162 47.7168 20.3975 47.7365 20.3279C47.7657 20.2238 26.5205 7.01546 25.1045 6.2572L24.6782 6.02885V23.6877ZM79.984 13.1252C73.686 17.0168 68.562 20.281 68.5972 20.379C68.6324 20.4769 73.7853 25.2084 80.048 30.8931L91.4349 41.2293L91.4809 32.4516C91.5064 27.624 91.5064 19.7087 91.4809 14.8619L91.4349 6.04951L79.984 13.1252ZM7.21318 10.5043C6.46259 10.9013 5.83342 11.9523 5.83342 12.8088C5.83342 13.6927 6.46223 14.7188 7.25105 15.1221C7.90119 15.4543 8.2932 15.4807 12.5996 15.4807C17.7463 15.4807 18.0964 15.4172 18.8594 14.3455C19.4127 13.5682 19.4127 12.0495 18.8594 11.2722C18.0943 10.1974 17.7519 10.1361 12.5623 10.1449C8.25018 10.1522 7.8251 10.1807 7.21318 10.5043ZM1.87976 21.1916C1.12917 21.5886 0.5 22.6395 0.5 23.4961C0.5 24.3799 1.12881 25.4061 1.91762 25.8093C2.58715 26.1515 2.95373 26.1679 9.93287 26.1679C18.0159 26.1679 18.0546 26.1629 18.8594 25.0327C19.4127 24.2554 19.4127 22.7368 18.8594 21.9594C18.0534 20.8273 18.0221 20.8234 9.89554 20.8321C2.92813 20.8396 2.50981 20.8583 1.87976 21.1916ZM39.5712 35.0274C31.3997 42.4391 26.7378 46.7856 26.8697 46.8696C27.1483 47.0472 89.0628 47.0415 89.3417 46.8639C89.4862 46.7718 85.299 42.8566 76.915 35.2442C69.9604 28.9297 64.1004 23.6555 63.8927 23.5239C63.5484 23.3055 63.3197 23.4061 61.297 24.666C58.1741 26.6107 58.1531 26.6111 55.1034 24.7599C53.7971 23.9669 52.6726 23.318 52.6047 23.318C52.5368 23.318 46.6718 28.5871 39.5712 35.0274ZM7.21318 31.8788C6.46259 32.2758 5.83342 33.3267 5.83342 34.1833C5.83342 35.0672 6.46223 36.0933 7.25105 36.4966C7.90119 36.8288 8.2932 36.8551 12.5996 36.8551C17.7463 36.8551 18.0964 36.7917 18.8594 35.72C19.4127 34.9427 19.4127 33.424 18.8594 32.6467C18.0943 31.5719 17.7519 31.5106 12.5623 31.5194C8.25018 31.5267 7.8251 31.5552 7.21318 31.8788Z'
        fill='#D6EBF4'
      />
    </svg>
  );
};
