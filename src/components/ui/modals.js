import { CloseIcon } from '@/svgs/icons';
import { dynamicFields } from '@/utils/data/dynamic-fields';
import { FormWDynamicFields } from '@/ui/forms/form-with-dynamic-fields';
import Image from 'next/image';
import { Modal } from 'flowbite-react';
import { useRouter } from 'next/router';

// WIP ImageModal is NOT ready for review yet.

/**
 * @description - this component uses the Flowbite-react Modal component in order to load the image in its original size
 * @param {boolean} isModalOpen - state variable to determine whether the modal is open or close
 * @param {*} setIsModalOpen - the state function that sets the state variable when the modal is either open or close
 * @param {url} imgSrc - url of the image
 * @param {number} imgOW - the original width of the image
 * @param {number} imgOH - the original height of the image
 * @param {string} imgAlt - the alt text
 */
export const ImageModal = ({
  isModalOpen,
  setIsModalOpen,
  imgSrc,
  imgOW,
  imgOH,
  imgAlt,
}) => {
  return (
    <Modal
      dismissible
      show={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className='fixed left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto bg-gray-900 top-20 bg-opacity-80 pt-28 md:pt-0 h-[100vh]'>
      <div className='relative h-full mx-auto md:h-auto'>
        <div className='relative shadow'>
          {/* the modal close button */}
          <button
            type='button'
            className='absolute z-10 top-4 right-5 bg-transparent p-1.5 ml-auto inline-flex items-center lg:-mr-[30%] md:-mr-[10%]'
            data-modal-hide='popup-modal'
            aria-label='Close'
            onClick={() => setIsModalOpen(false)}>
            <CloseIcon />
            <span className='sr-only'>Close popup image</span>
          </button>
          <div className='grid grid-cols-1 text-center'>
            <div className={`md:-ml-[30%] md:-mr-[30%] md:w-[${imgOW}px] relative`}>
              {/* this image loaded in its original width and height */}
              <Image
                src={imgSrc}
                alt={imgAlt}
                width={imgOW}
                height={imgOH}
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

/**
 * @description - this component uses the Flowbite-react Modal component in order to load a form in a modal
 * @param {string} pageTitle - the title of the page that the form is being loaded from
 */
export const FormModal = ({ pageTitle }) => {
  const router = useRouter();

  const handleRoute = () => {
    // Preserve existing query parameters and remove showForm parameter
    const { showForm, ...restQuery } = router.query;
    router.push({ pathname: router.pathname, query: restQuery }, undefined, {
      shallow: true,
    });
  };

  return (
    <Modal
      dismissible
      show={true}
      onClose={handleRoute}
      className='fixed left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto bg-gray-900 top-20 bg-opacity-80 pt-28 md:pt-0 h-[100vh]'>
      <div className='relative h-full mx-auto md:h-auto'>
        <div className='relative shadow'>
          {/* the modal close button */}
          <button
            type='button'
            className='absolute z-10 top-4 right-5 bg-transparent p-1.5 ml-auto inline-flex items-center'
            data-modal-hide='popup-modal'
            aria-label='Close'
            onClick={handleRoute}>
            <CloseIcon />
            <span className='sr-only'>Close popup form</span>
          </button>
          <div className='grid grid-cols-1 text-center'>
            <div className='relative'>
              <h3 className='title-lg text-purple-p900 font-medium mb-6'>{pageTitle}</h3>
              <p className='body-lg text-neutral-n600 mb-8'>
                Please fill out the form below and we will get back to you as soon as
                possible.
              </p>
              <FormWDynamicFields fields={dynamicFields} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
