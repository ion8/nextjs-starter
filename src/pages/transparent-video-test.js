import { H1 } from '@/components/ui/typography';

const videoPathHEVC = '/video/IMG_4454.mp4';
const videoPathWebM = '/video/IMG_4454.webm';
const bg = '/images/grey-noise-bg.png';

// A page to test transparent video playback
const TransparentVideoTest = () => {
  return (
    <div className='text-cobalt'>
      {[...Array(20)].map((_, i) => (
        <H1
          key={i}
          className='text-deep-blue'>
          below below below below
        </H1>
      ))}
      <video
        autoplay
        loop
        muted
        playsinline
        className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-full h-full'>
        <source
          src={videoPathHEVC}
          type='video/mp4; codecs=hvc1'
        />
        <source
          src={videoPathWebM}
          type='video/webm'
        />
      </video>
      <div className='fixed top-0 left-0 w-full h-full -z-10 bg-transparent' style={{ backgroundImage: `url(${bg})` }} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/4 h-3/4 bg-transparent flex justify-center items-center'>
        {/* H1 with transparent tailwind colored background */}
          <H1>
            <span className='bg-cobalt bg-opacity-50 text-deep-blue'>above</span>{' '}
            above{' '}
            <span className='bg-cobalt bg-opacity-50 text-deep-blue'>above</span>{' '}
            above</H1>
      </div>
    </div>
  );
};

export default TransparentVideoTest;
