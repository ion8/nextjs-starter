import { Button } from '@/ui/buttons';
import { Container } from '@/ui/containers';
import Layout from '@/components/layout';

const ThankYou = () => {
  var title = 'Thank You';
  return (
    <Layout
      seoTitle={title}
      seoDesc=''>
      <div className='items-center w-full mx-auto text-center bg-white py-14 md:px-12 lg:px-40'>
        <Container className='py-24'>
          <div className='xl:px-28'>
            <h1 className='display-lg text-purple-p900 font-semibold pb-7'>
              Thank you!
            </h1>
            <p className='body-lg text-neutral-n600 pb-7'>
              Your information has been received.
            </p>
            <Button
              link='/'
              label='Go to home page'
              className='w-[245px] mx-auto'
              type='link'
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ThankYou;
