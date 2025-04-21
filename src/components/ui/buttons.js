// import { BodyText } from '@/ui/typography';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const FormPopupBtn = ({ label, className, ...props }) => {
  const router = useRouter();
  const handleRoute = () => {
    // Preserve existing query parameters and add showForm parameter
    const newQuery = { ...router.query, showForm: true };
    router.push({ pathname: router.pathname, query: newQuery }, undefined, {
      shallow: true,
    });
  };
  return (
    <button
      className={
        `flex justify-center items-center py-[10px] rounded-[5px] text-white bg-cyan px-9 focus:outline-none focus:ring-none hover:bg-cobalt ` +
        className
      }
      onClick={handleRoute}
      {...props}>
      {label ? <span>{label}</span> : <span>Request a quote</span>}
    </button>
  );
};

/**
 * @description - this component is particular to the footer section links
 * @param {url} link - url to the destination
 * @param {string} conversionPageUrl - the query param of the current page so that we could track the user click landing
 * @param {string} label - text to be displayed
 * @returns
 */
export const FooterLink = ({ link, conversionPageUrl, label, className = '' }) => {
  return (
    <Link
      href={conversionPageUrl ? link + '?conversionPageUrl=' + conversionPageUrl : link}
      className={` text-gray-400 ${className}`}>
      <span className='body-md text-gray-400 inline'>{label}</span>
    </Link>
  );
};

/**
 * @description - a button component that can be used as both a submit button and a Link component
 * @param {string} id - id for the button
 * @param {string} href - url to the destination
 * @param {string} label - text to be displayed
 * @param {string} variant - the style of the button; either 'primary', 'secondary', or empty string for no style
 * @param {boolean} hasIcon - whether the button has an icon or not
 * @param {boolean} isTypeSubmit - whether the button is a submit button or a Link component
 * @param {string} className - extra TailwindCSS classes if needed eg. className='text-black mt-10 text-right'
 * @returns
 */
export const ButtonLink = ({
  id,
  href,
  label,
  variant,
  hasIcon,
  isTypeSubmit,
  className = '',
  children,
  ...props
}) => {
  // Define variant styles
  let variantClass = '';
  if (variant === 'primary') {
    // Primary variant: Orange (burnt sienna) background with white text
    variantClass = 'text-white bg-burnt-sienna-bs600 hover:bg-burnt-sienna-bs700';
  } else if (variant === 'secondary') {
    // Secondary variant: Purple text and border with white background, changes to purple background with white text on hover
    variantClass =
      'text-purple-p600 bg-white border border-purple-p600 hover:text-white hover:bg-purple-p600';
  } else {
    // Default: No specific styling
    variantClass = '';
  }

  return isTypeSubmit ? (
    <button
      type='submit'
      className={
        `justify-center items-center rounded-lg ${variantClass} py-4 focus:outline-none focus:ring-none ` +
        className
      }>
      <span className='text-[18px]'>{label}</span>
    </button>
  ) : (
    <Link
      id={id}
      href={href}
      className={`inline-block w-full md:w-auto py-5 justify-center items-center rounded-xl px-6 focus:outline-none focus:ring-none sm:mt-12 ${variantClass} ${className}`}>
      <span className={`mr-[10px] ml-0 ${!hasIcon ? 'hidden' : ''}`}>{children}</span>
      <span>{label}</span>
    </Link>
  );
};

/**
 * @description - This button is used as a next/back button for the two-step-form.js
 * @param {string} label - label of the button
 * @param {string} className - extra TailwindCSS classes if needed
 * @param {*} props - the onClick event handler
 * @returns
 */
export const ButtonNoLink = ({ label, className, ...props }) => {
  return (
    <div
      className={
        'inline-block py-[14px] justify-center items-center text-white rounded-[8px] px-6 focus:outline-none focus:ring-none bg-cyan hover:bg-teal disabled:bg-[#d1d5db] cursor-pointer ' +
        className
      }
      {...props}>
      <span className='text-base font-normal'>{label}</span>
    </div>
  );
};

// /**
//  * @description - A standard button component used throughout the application
//  * @param {string} label - The text to display on the button
//  * @param {string} variant - The style variant of the button (primary, secondary, tertiary)
//  * @param {string} type - The button type (button, submit, reset)
//  * @param {string} className - Additional CSS classes
//  * @param {*} props - Additional props to pass to the button
//  * @returns {JSX.Element} - A button component
//  */


//  This button to be removed once all the forms are fixed and use the new ButtonLink component
export const Button = ({
  label,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) => {
  let variantClass = '';

  if (variant === 'primary') {
    variantClass = 'text-white bg-burnt-sienna-bs600 hover:bg-burnt-sienna-bs700';
  } else if (variant === 'secondary') {
    variantClass =
      'text-white bg-transparent border border-white hover:bg-white hover:text-black';
  } else if (variant === 'tertiary') {
    variantClass = 'text-white bg-cobalt hover:bg-teal';
  } else {
    variantClass = 'text-black bg-gray-200 hover:bg-gray-300';
  }

  return (
    <button
      type={type}
      className={`justify-center items-center rounded-lg ${variantClass} py-3 px-6 focus:outline-none focus:ring-none ${className}`}
      {...props}>
      <span className='text-base font-normal'>{label}</span>
    </button>
  );
};
