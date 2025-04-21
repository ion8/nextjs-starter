import { ButtonLink } from '@/ui/buttons';
import { defaultGridData } from '@/utils/grid-data';
import Image from 'next/image';


/**
 * @description - This component renders a two-column layout with an image and accompanying text.
 * @param {string} title - The main title of the section or hero.
 * @param {string} [subtitle] - An optional subtitle for the section.
 * @param {string} desc - A description or body text for the section.
 * @param {string} imgSrc - The source URL of the image to be displayed.
 * @param {string} imgAlt - The alt text for the image, used for accessibility.
 * @param {number} imgW - The width of the image.
 * @param {number} imgH - The height of the image.
 * @param {boolean} [isHero=false] - If true, the component is styled as a hero section.
 * @param {boolean} [imgOnTheLeft=false] - If true, the image is displayed on the left side.
 * @param {string} [className] - Additional CSS classes for custom styling.
 * @param {ReactNode} [children] - Additional components or elements to be rendered within the text column.
 * @param {boolean} [priority=false] - If true, the image is prioritized for loading.
 */

export const TwoColsWImg = ({
  title,
  subtitle,
  desc,
  imgSrc,
  imgAlt,
  imgW,
  imgH,
  isHero,
  imgOnTheLeft,
  className,
  children,
  priority = false,
}) => {
  // Generates a more descriptive alt text if a basic one is provided
  const enhancedAltText = imgAlt && imgAlt.length > 0 ? imgAlt : `${title} illustration`;

  return (
    <div
      className={`grid grid-cols-1 gap-10 lg:grid-cols-2 ${className}`}
      aria-labelledby={isHero ? 'hero-title' : 'section-title'}>
      <div className='my-auto text-center lg:text-left'>
        {isHero ? (
          <>
            <h1
              id='hero-title'
              className='display-lg font-semibold text-neutral-n700 mb-9'>
              {title}
            </h1>
            <p className='body-lg text-neutral-n600'>{desc}</p>
            <ButtonLink
              href='#'
              label='Learn more'
              variant='secondary'
              className='w-full mx-auto md:w-[200px] lg:ml-0'
              aria-label={`Learn more about ${title}`}
            />
          </>
        ) : (
          <>
            {subtitle && (
              <p className='overline-lg font-medium mb-6 text-purple-p700'>{subtitle}</p>
            )}
            <h3
              id='section-title'
              className='headline-md text-purple-p900 mb-9 font-semibold'>
              {title}
            </h3>
            <p className='body-lg text-neutral-n600 mb-9'>{desc}</p>
            {children}
          </>
        )}
      </div>
      <div className={`${imgOnTheLeft ? 'lg:order-first' : ''}`}>
        <div className='border border-dashed border-gray-300 rounded-lg overflow-hidden relative w-full'>
          <div
            className='relative w-full'
            style={{ paddingBottom: `${(imgH / imgW) * 100}%` }}>
            <Image
              src={imgSrc}
              alt={enhancedAltText}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover'
              quality={85}
              priority={priority || isHero}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * RepeatableCols component
 *
 * A reusable component for displaying a grid of images with titles and descriptions.
 * The grid is responsive and can be used for any number of columns.
 *
 * @param {number} [numberOfCols=3] - The number of columns in the grid.
 * @param {string} [align='center'] - The alignment of the text in the grid. Can be 'left', 'center', or 'right'.
 * @param {array} [data=defaultGridData] - The data for the grid. Each item in the array should have the following properties:
 *   - title: The title of the item.
 *   - imgSrc: The source of the image.
 *   - imgAlt: The alt text for the image.
 *   - imgW: The width of the image.
 *   - imgH: The height of the image.
 *   - desc: The description of the item.
 * @param {boolean} [priorityFirstImage=false] - Whether to prioritize the first image in the grid for lazy loading.
 */
export const RepeatableCols = ({
  numberOfCols = 3,
  align = 'center',
  data = defaultGridData,
  priorityFirstImage = false,
}) => {
  const colClass =
    {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      // Add more as needed
    }[numberOfCols] || 'lg:grid-cols-1'; // fallback

  return (
    <div
      className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${colClass} ${
        align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'
      }`}
      role='list'
      aria-label='Feature grid'>
      {data.map((item, index) => {
        // Generates a more descriptive alt text if a basic one is provided
        const enhancedAltText =
          item.imgAlt && item.imgAlt.length > 0
            ? item.imgAlt
            : `${item.title} illustration`;

        return (
          <div
            key={index}
            className='flex flex-col items-center'
            role='listitem'>
            <div className='border border-dashed border-gray-300 rounded-lg overflow-hidden mb-6 w-full'>
              <div
                className='relative w-full'
                style={{ paddingBottom: `${(item.imgH / item.imgW) * 100}%` }}>
                <Image
                  src={item.imgSrc}
                  alt={enhancedAltText}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover'
                  quality={85}
                  priority={priorityFirstImage && index === 0}
                />
              </div>
            </div>
            <h4 className='title-lg text-purple-p900 font-medium mb-4'>{item.title}</h4>
            <p className='body-md text-neutral-n600'>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};
