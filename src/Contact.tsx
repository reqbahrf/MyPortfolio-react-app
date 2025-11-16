const Contact = () => {
  return (
    <section
      id='Contact'
      className='mb-20 flex w-full flex-col items-center justify-center'
    >
      <h2 className='text-center text-2xl font-bold text-black xl:text-start dark:text-white'>
        Contact
      </h2>
      <div className='m-5 w-[95dvw] text-black md:m-12 lg:m-18 lg:w-1/2 dark:text-white'>
        <h3 className='text-center text-xl font-bold text-black dark:text-white'>
          Let's Connect
        </h3>
        <p className='md:text-md text-center indent-8 text-sm text-black dark:text-white'>
          Got a project, question, or idea you'd like to share? Drop me a
          message at
          <a href='mailto:reqbahrf@gmail.com' className='text-pink-700'>
            {' '}
            reqbahrf@gmail.com{' '}
          </a>
          or reach out on LinkedIn I'd be happy to chat!
        </p>
      </div>
    </section>
  );
};

export default Contact;
