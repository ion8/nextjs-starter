import { Accordion, Tabs } from 'flowbite-react';
import { basicAccordionData, tabbedAccordionData } from '@/utils/accordion-data';

/**
 * @description - This is the basic FAQ accordion adopted from Flowbite-react showing one question/answer at a time and collapsing the rest of the panels.
 * @param - the potential prop could be the data file
 */
export const BasicAccordion = () => {
  return (
    <Accordion className='border-none'>
      {basicAccordionData.slice(0, 4).map((faq, index) => (
        <Accordion.Panel key={index}>
          <Accordion.Title className='px-0 py-6 bg-white hover:bg-white focus:ring-0 focus:outline-none'>
            <p className='body-lg font-semibold text-purple-p900'>{faq.question}</p>
          </Accordion.Title>
          <Accordion.Content className='px-0'>
            <p className='body-md text-neutral-n600 mb-2'>{faq.answer}</p>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

/**
 * @description - This component combines Flowbite-react's two components (Tabs and Accordion) in order to categorize the questions/answers (accordion) into different categories (tabs). Each tab when clicked will load its own set of questions/answers.
 *
 */
export const TabbedAccordion = () => {
  return (
    <Tabs>
      {tabbedAccordionData.map((tab, index) => (
        <Tabs.Item
          key={index}
          title={tab.category}>
          {/* Accordion within tabs */}
          <Accordion className='border-none text-left'>
            {tab.listOfFaqs.slice(0, 4).map((faq, index) => (
              <Accordion.Panel key={index}>
                <Accordion.Title className='px-0 py-6 bg-white hover:bg-white focus:ring-0 focus:outline-none'>
                  <p className='body-lg font-semibold text-purple-p900'>
                    {faq.question}
                  </p>
                </Accordion.Title>
                <Accordion.Content className='px-0'>
                  <p className='body-md text-neutral-n600 mb-2'>{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </Tabs.Item>
      ))}
      {/* end of tabs.item */}
    </Tabs>
  );
};
