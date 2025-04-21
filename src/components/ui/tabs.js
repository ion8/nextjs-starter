import { horizontalTabsData, verticalTabsData } from '@/utils/tabs-data';

import { Bullet } from '@/ui/bullets';
import Image from 'next/image';
import { poppins } from '@/utils/fonts';
import { Tabs } from 'flowbite-react';

const customTabsTheme = {
  tablist: {
    base: `flex justify-center text-center font-poppins ${poppins.className}`,
    styles: {
      horizontal:
        'mx-4 md:mx-16 lg:mx-0 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
      vertical: 'w-full lg:w-1/2 flex flex-col gap-8 lg:pr-8',
    },
    tabitem: {
      base: 'p-4 text-[20px] font-semibold text-purple-p900 focus:outline-none',
      styles: {
        horizontal: {
          base: 'text-center py-5 h-[80px] px-8',
          active: {
            on: 'active bg-burnt-sienna-bs600 rounded-[20px] text-white',
            off: 'bg-transparent border border-neutral-n300 rounded-[20px] hover:cursor',
          },
        },
        vertical: {
          base: 'text-left py-8 px-8 text-purple-p900',
          active: {
            on: 'active bg-burnt-sienna-bs600 shadow-lg rounded-[20px] text-white',
            off: 'bg-transparent border border-neutral-n300 rounded-[20px] hover:cursor text-purple-p900',
          },
        },
      },
    },
  },
  tabpanel: 'py-0',
};

/**
 * @description - Adopted from Flowbite-react
 * @param {*} param0 - no required props for the template, but for a real world project we can use the data from a data file.
 * @returns
 */

export const HorizontalTabs = ({ children }) => {
  // Using data from the tabs-data.js file
  const data = horizontalTabsData;

  return (
    <Tabs
      theme={customTabsTheme}
      style='horizontal'
      className='w-full'>
      {data.map((tab, index) => (
        <Tabs.Item
          key={index}
          title={tab.title}
          active={index === 0}>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div className='text-left'>
              <h5 className='title-lg text-purple-p900 font-medium mb-6'>{tab.title}</h5>
              <p className='body-lg text-neutral-n600 mb-8'>{tab.details}</p>
            </div>
            <div className='relative w-full h-[300px] md:h-[400px]'>
              <Image
                src='https://via.placeholder.com/600x400'
                alt={`Illustration for ${tab.title} tab`}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover border-2 border-dashed border-neutral-n300 rounded-lg p-2'
              />
            </div>
          </div>
        </Tabs.Item>
      ))}
    </Tabs>
  );
};

/**
 * @description - Adopted from Flowbite-react and customized so that the tabs are stacked vertically rather than horizontally.
 * @param {*} param0 - no required props for the template, but for a real world project we can use the data from a data file.
 * @returns
 */
export const VerticalTabs = ({ children }) => {
  // Using data from the tabs-data.js file
  const data = verticalTabsData;

  return (
    <div className='lg:relative'>
      <Tabs
        style='vertical'
        theme={customTabsTheme}>
        {data.map((tab, index) => (
          <Tabs.Item
            key={index}
            title={tab.title}>
            <div className='w-full lg:w-[50%] lg:left-[50%] lg:top-0 lg:absolute mt-6 lg:mt-0 text-left py-12 px-4 md:p-10 bg-purple-50 shadow-lg rounded-[20px] h-full'>
              <h5 className='mb-12 text-purple-p900'>{tab.title}</h5>
              <ul>
                {tab.details.map((item, index) => (
                  <Bullet
                    key={index}
                    className='mb-4 text-neutral-n600'
                    color='purple'>
                    {item}
                  </Bullet>
                ))}
              </ul>
            </div>
          </Tabs.Item>
        ))}
        {/* end of tabs.item */}
      </Tabs>
    </div>
  );
};
