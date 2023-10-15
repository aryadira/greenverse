import { faqs } from "../../constants/contents/faq";

const Faq = () => {
  return (
    <section id='faq' className='mb-[100px]'>
      <h1 className={`text-[32px] text-center font-HaasMd`}>Frequently Ask Questions (FaQ)</h1>

      <div
        id='accordion-flush'
        data-accordion='collapse'
        data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
        data-inactive-classes='text-gray-500 dark:text-gray-400'>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h2 id={`accordion-flush-heading-${faq.id}`}>
              <button
                type='button'
                className='px-5 rounded-lg text-[32px] mt-[80px] flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                data-accordion-target={`#accordion-flush-body-${faq.id}`}
                aria-expanded='true'
                aria-controls={`accordion-flush-body-${faq.id}`}>
                <span>{faq.question}</span>
                <svg
                  data-accordion-icon
                  className='w-3 h-3 rotate-180 shrink-0 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'>
                  <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5 5 1 1 5' />
                </svg>
              </button>
            </h2>
            <div id={`accordion-flush-body-${faq.id}`} className='hidden' aria-labelledby={`accordion-flush-heading-${faq.id}`}>
              <div className='py-5 border-b border-gray-200 dark:border-gray-700 px-5 rounded-lg'>
                <p className='text-gray-500 dark:text-gray-400'>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
