import { Container, FullWidthContainer } from '@/ui/containers';
import { RepeatableCols, TwoColsWImg } from '@/ui/grids';

import Layout from '@/components/layout';

/**
 * @description - This page lists different variants of grid sections
 * @returns
 */
const ListOfGrids = () => {
  return (
    <Layout seoTitle='List of Grids'>
      {/* hero sample */}
      <FullWidthContainer>
        <Container>
          <TwoColsWImg
            title='H1 section title'
            desc="Bring your napkin sketch to us, and we'll plan the journey from
prototype to launch"
            imgSrc='https://via.placeholder.com/600x400/00AEEF/ffffff'
            imgAlt=''
            imgW={980}
            imgH={854}
            isHero
          />
        </Container>
      </FullWidthContainer>

      {/* general 2 col section */}

      <FullWidthContainer className='bg-cool-grey'>
        <Container>
          <TwoColsWImg
            title='H3 title here'
            desc="Bring your napkin sketch to us, and we'll plan the journey from
prototype to launch"
            imgSrc='https://via.placeholder.com/600x400/#00EBF4/ffffff'
            imgAlt=''
            imgW={980}
            imgH={854}
            imgOnTheLeft
          />
        </Container>
      </FullWidthContainer>

      <FullWidthContainer>
        <Container>
          <RepeatableCols
            numberOfCols='3'
            align='center'
          />
        </Container>
      </FullWidthContainer>
    </Layout>
  );
};

export default ListOfGrids;
