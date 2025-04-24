import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Container, FullWidthContainer } from '@/ui/containers';
import {
  controlledSliderImages,
  galleryImages,
  heroSlides,
  testimonials,
} from '@/utils/slider-data';
import { Grid, Navigation, Pagination, Thumbs } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ButtonLink } from '@/ui/buttons';
import Image from 'next/image';
import { ImageModal } from '@/ui/modals';
import Link from 'next/link';
import { register } from 'swiper/element/bundle';

register();

/**
 * @description - This component can be used on any page's hero section that would be a slider. It uses the Swiper slider.
 * @param - The potential prop for a real world project could be the data file that would be passed on from the page to this component.
 * @returns
 *
 * Note: The buttons in this slider are optional. Each slide in the heroSlides data can have a 'buttons' array property.
 * If a slide has buttons, they will be displayed below the slide content. If a slide doesn't have buttons or has an empty buttons array,
 * no buttons will be displayed for that slide. This allows for flexibility in the hero slider, where some slides may have
 * call-to-action buttons while others may not.
 */

// Add custom navigation styles
const customNavigationStyles = `
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: '';
    width: 40px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  
  .swiper-button-prev::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236866A8'%3E%3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/%3E%3C/svg%3E");
  }
  
  .swiper-button-next::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236866A8'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3C/svg%3E");
  }
`;

export const HeroWithSlider = () => {
  return (
    <div className='relative'>
      <style
        jsx
        global>
        {customNavigationStyles}
      </style>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
        aria-label='Hero slider'>
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
              <div className='my-auto text-center lg:text-left'>
                <h1 className='display-lg font-semibold text-neutral-n700 mb-9'>
                  {slide.title}
                </h1>
                <p className='body-lg text-neutral-n600'>{slide.desc}</p>
                {slide.buttons && slide.buttons.length > 0 && (
                  <div className='flex flex-col sm:flex-row gap-5 justify-start'>
                    {slide.buttons.map((button, buttonIndex) => (
                      <ButtonLink
                        key={buttonIndex}
                        href={button.href}
                        label={button.label}
                        variant={button.variant}
                        className={button.className}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className='border border-dashed border-gray-300 rounded-lg overflow-hidden relative w-full'>
                {/* For more details and best practices, see: docs/Best Practices.md */}

                <div
                  className='relative w-full'
                  style={{ paddingBottom: `${(slide.imgH / slide.imgW) * 100}%` }}>
                  <Image
                    src={slide.imgSrc}
                    alt={slide.imgAlt}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    priority={index === 0}
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/**
 * @description - This component can be used to display a gallery of images in a slider format.
 * @param - The potential prop for a real world project could be the data file that would be passed on from the page to this component.
 * @returns
 */
export const GallerySlider = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='mySwiper'
        aria-label='Gallery slider'>
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            {/*
              We use a wrapper div with a dynamic padding-bottom based on the image's aspect ratio.
              This ensures the browser reserves the correct space for the image before it loads, preventing layout shift (CLS) and improving performance. The Next.js Image 'fill' prop makes the image responsive, and the aspect ratio is enforced by the wrapper.
              
              For more details and best practices, see: docs/Best Practices.md
            */}
            <div
              className='relative w-full border border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-100'
              style={{ paddingBottom: `${(image.imgH / image.imgW) * 100}%` }}>
              <Image
                src={image.imgSrc}
                alt={image.imgAlt}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover rounded-lg'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

/**
 * @description - This component can be used to display testimonials in a slider format.
 * @param - The potential prop for a real world project could be the data file that would be passed on from the page to this component.
 * @returns
 */
export const Testimonials = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
        aria-label='Testimonials slider'>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              reviewerImgSrc={testimonial.reviewerImgSrc}
              reviewerImgAlt={testimonial.reviewerImgAlt}
              reviewerName={testimonial.reviewerName}
              reviewerInfo={testimonial.reviewerInfo}
              url={testimonial.url}>
              {testimonial.content}
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

/**
 * @description - This component can be used to display a testimonial card.
 * @param {string} reviewerImgSrc - The source of the reviewer's image.
 * @param {string} reviewerImgAlt - The alt text for the reviewer's image.
 * @param {string} reviewerName - The name of the reviewer.
 * @param {string} reviewerInfo - Additional information about the reviewer.
 * @param {string} url - The URL for the reviewer's profile or website.
 * @param {ReactNode} children - The content of the testimonial.
 * @returns
 */
export const TestimonialCard = ({
  reviewerImgSrc,
  reviewerImgAlt,
  reviewerName,
  reviewerInfo,
  url,
  children,
}) => {
  return (
    <div className='bg-white p-6 md:p-10 rounded-lg shadow-lg'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-6'>
        <div className='relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden'>
          <Image
            src={reviewerImgSrc}
            alt={reviewerImgAlt}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
          />
        </div>
        <div className='text-center md:text-left'>
          <h3 className='title-sm font-semibold text-neutral-n700 mb-1'>
            {reviewerName}
          </h3>
          <p className='body-sm text-neutral-n600 mb-4'>{reviewerInfo}</p>
          <p className='body-sm text-neutral-n700 italic'>{children}</p>
          {url && (
            <Link
              href={url}
              className='inline-block mt-4 text-purple-p600 hover:text-purple-p700'>
              Read more
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * @description - This component can be used to display a controlled slider with images.
 * @param - The potential prop for a real world project could be the data file that would be passed on from the page to this component.
 * @returns
 */
export const ControlledSliderWImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);

  return (
    <Container>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
        <div className='md:col-span-4'>
          <Swiper
            spaceBetween={10}
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className='mySwiper'
            onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
            onSwiper={swiper => {
              mainSwiperRef.current = swiper;
            }}>
            {controlledSliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                {/* For more details and best practices, see: docs/Best Practices.md */}
                <div
                  className='relative w-full h-[300px] md:h-[400px] border border-dashed border-neutral-n300 rounded-lg overflow-hidden'
                  style={{ paddingBottom: `${(image.imgH / image.imgW) * 100}%` }}>
                  <Image
                    src={image.imgSrc}
                    alt={image.imgAlt}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='md:col-span-4'>
          {/* 
            Thumbnails grid that displays all images in a smaller format.
            - Uses a 2-column grid layout for thumbnails
            - Highlights the active thumbnail with a purple ring
            - Clicking a thumbnail updates both the main swiper and the activeIndex state
            - Each thumbnail is responsive with different heights for mobile/desktop
            - Includes proper alt text for accessibility
          */}
          <div className='grid grid-cols-6 gap-2'>
            {controlledSliderImages.map((image, index) => (
              <div
                key={index}
                className={`relative w-full h-16 md:h-20 rounded-lg overflow-hidden cursor-pointer ${
                  activeIndex === index ? 'ring-2 ring-purple-p600' : ''
                }`}
                onClick={() => {
                  if (mainSwiperRef.current) {
                    mainSwiperRef.current.slideTo(index);
                    setActiveIndex(index);
                  }
                }}>
                {/* For more details and best practices, see: docs/Best Practices.md */}
                <Image
                  src={image.imgSrc}
                  alt={`Thumbnail for ${image.imgAlt}`}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
