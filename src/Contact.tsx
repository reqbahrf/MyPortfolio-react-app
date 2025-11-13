const Contact = () => {
  return (
    <section
      id='Contact'
      className='flex flex-col justify-center items-center w-full bg-black/70 mb-20'
    >
      <h2 className='text-2xl font-bold text-center xl:text-start text-white'>
        Contact
      </h2>
      <div className='w-[95dvw] lg:w-1/2 m-5 md:m-12 lg:m-18 text-white'>
        <h3 className='text-xl font-bold text-center text-white'>
          Let's Connect
        </h3>
        <p className='text-center indent-8 text-sm md:text-md'>
          Got a project, question, or idea you'd like to share? Drop me a
          message at
          <a
            href='mailto:reqbahrf@gmail.com'
            className='text-pink-700'
          >
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
