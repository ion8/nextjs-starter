import { Container, FullWidthContainer } from '@/ui/containers';

import { colorFamilies } from '@/utils/color-data';
import Layout from '@/components/layout';
import { useRouter } from 'next/router';

/**
 * @description - This page showcases the design elements of the application, including color palette and typography.
 * @returns
 */
const DesignElements = () => {
  const router = useRouter();

  const title = 'Design Elements';
  // this is the current page url that will be captured
  const pageUrl = router.pathname;

  // Color data is now imported from color-data.js

  return (
    <Layout
      seoTitle={title}
      seoDesc='Design elements including color palette and typography'
      conversionPageUrl={pageUrl}>
      {/* Colors */}
      <FullWidthContainer className='text-center bg-white py-10 lg:py-20'>
        <Container>
          <span className='overline-lg text-purple-p700 font-medium mb-10 block'>
            Colors
          </span>

          <h2 className='display-md font-semibold mb-4 text-neutral-n700'>
            Color Palette
          </h2>

          <h4 className='title-lg font-medium text-neutral-n600 mb-10'>
            Our color palette consists of a range of colors that work together to create
            a cohesive and professional look.
          </h4>

          {colorFamilies.map((family, familyIndex) => (
            <div
              key={familyIndex}
              className='mb-16'>
              <h3 className='title-md font-medium text-neutral-n700 mb-6'>
                {family.name}
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4'>
                {family.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className='flex flex-col items-center'>
                    <div
                      className={`w-full h-24 ${color.value} rounded-lg mb-2 border border-gray-200`}></div>
                    <span className='body-sm text-neutral-n600'>{color.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </FullWidthContainer>

      {/* Typography */}
      <FullWidthContainer className='text-center bg-white py-10 lg:py-20'>
        <Container>
          <span className='overline-lg text-purple-p700 font-medium mb-10 block'>
            Typography
          </span>

          <h2 className='display-md font-semibold mb-4 text-neutral-n700'>Type Scale</h2>

          <h4 className='title-lg font-medium text-neutral-n600 mb-10'>
            Our type scale is designed to create a clear visual hierarchy and improve
            readability.
          </h4>

          <div className='flex flex-col gap-8 text-left'>
            <div>
              <span className='overline-lg text-purple-p700 font-medium block mb-2'>
                Display Large
              </span>
              <h1 className='display-lg font-semibold text-neutral-n700'>
                The quick brown fox jumps over the lazy dog
              </h1>
            </div>
            <div>
              <span className='overline-lg text-purple-p700 font-medium block mb-2'>
                Display Medium
              </span>
              <h2 className='display-md font-semibold text-neutral-n700'>
                The quick brown fox jumps over the lazy dog
              </h2>
            </div>
            <div>
              <span className='overline-lg text-purple-p700 font-medium block mb-2'>
                Display Small
              </span>
              <h3 className='display-sm font-semibold text-neutral-n700'>
                The quick brown fox jumps over the lazy dog
              </h3>
            </div>
            <div>
              <span className='overline-lg text-purple-p700 font-medium block mb-2'>
                Headline Medium
              </span>
              <h4 className='headline-md font-semibold text-neutral-n700'>
                The quick brown fox jumps over the lazy dog
              </h4>
            </div>
            <div>
              <span className='overline-lg text-purple-p700 font-medium block mb-2'>
                Title Large
              </span>
              <h5 className='title-lg font-medium text-neutral-n700'>
                The quick brown fox jumps over the lazy dog
              </h5>
            </div>
            <div>
              <span className='overline-lg text-purple-p700 font-medium block mb-2'>
                Body Large
              </span>
              <p className='body-lg text-neutral-n600'>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <span className='overline-lg text-purple-p700 font-medium block mb-2'>
                Body Medium
              </span>
              <p className='body-md text-neutral-n600'>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <span className='overline-lg text-purple-p700 font-medium block mb-2'>
                Body Small
              </span>
              <p className='body-sm text-neutral-n600'>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default DesignElements;
