import { Container, FullWidthContainer, SectionHeader } from '@/ui/containers';
import {
  ControlledSliderWImages,
  GallerySlider,
  HeroWithSlider,
  Testimonials,
  ThumbnailGallerySlider,
} from '@/ui/sliders';

import Layout from '@/components/layout';

/**
 * @description - This page lists different variants of the swiper slider
 */

const ListOfSliders = () => {
  return (
    <Layout seoTitle='List of Sliders'>
      {/* Hero section within a slider */}
      <FullWidthContainer>
        <HeroWithSlider />
      </FullWidthContainer>

      {/* Gallery of images */}
      <FullWidthContainer className='bg-cool-grey'>
        <SectionHeader
          title='Gallery Slider'
          subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
        <GallerySlider />
      </FullWidthContainer>

      {/* Testimonials Slider */}
      <FullWidthContainer>
        <SectionHeader
          title='Testimonials'
          subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
        <Testimonials />
      </FullWidthContainer>

      {/* Thumbnail gallery slider with title and description */}
      <FullWidthContainer>
        <SectionHeader
          title='Gallery Slider with Thumbnails'
          subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
        <ThumbnailGallerySlider />
      </FullWidthContainer>
      {/* Controlled Slider with images */}
      <FullWidthContainer>
        <SectionHeader
          title='Controlled Slider'
          subTitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
        <ControlledSliderWImages />
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfSliders;
