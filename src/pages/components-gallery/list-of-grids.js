import { Container, FullWidthContainer } from '@/ui/containers';
import { RepeatableCols, TwoColsWImg } from '@/components/ui/grids';

import Layout from '@/components/layout';

/**
 * @description - This page lists different variants of grid sections
 * @returns
 */
const ListOfGrids = () => {
  return (
    <Layout seoTitle='List of Grids'>
      {/* Hero section with image on right */}
      <FullWidthContainer>
        <Container>
          <TwoColsWImg
            title='Hero Section with Image on Right'
            desc="Bring your napkin sketch to us, and we'll plan the journey from prototype to launch"
            imgSrc='/images/hero-image.jpg'
            imgAlt='Hero section illustration'
            imgW={980}
            imgH={854}
            isHero
          />
        </Container>
      </FullWidthContainer>

      {/* Two column section with image on left */}
      <FullWidthContainer className='bg-cool-grey'>
        <Container>
          <TwoColsWImg
            title='Two Columns with Image on Left'
            subtitle='SECTION SUBTITLE'
            desc="Bring your napkin sketch to us, and we'll plan the journey from prototype to launch"
            imgSrc='/images/feature-image.jpg'
            imgAlt='Feature illustration'
            imgW={980}
            imgH={854}
            imgOnTheLeft
          />
        </Container>
      </FullWidthContainer>

      {/* Three column grid */}
      <FullWidthContainer>
        <Container>
          <h2 className='display-md text-purple-p900 font-semibold mb-8'>
            Three Column Grid
          </h2>
          <RepeatableCols
            numberOfCols={3}
            align='center'
          />
        </Container>
      </FullWidthContainer>

      {/* Two column grid */}
      <FullWidthContainer className='bg-cool-grey'>
        <Container>
          <h2 className='display-md text-purple-p900 font-semibold mb-8'>
            Two Column Grid
          </h2>
          <RepeatableCols
            numberOfCols={2}
            align='left'
          />
        </Container>
      </FullWidthContainer>

      {/* Four column grid */}
      <FullWidthContainer>
        <Container>
          <h2 className='display-md text-purple-p900 font-semibold mb-8'>
            Four Column Grid
          </h2>
          <RepeatableCols
            numberOfCols={4}
            align='center'
          />
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfGrids;
