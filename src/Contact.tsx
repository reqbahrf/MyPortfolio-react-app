const Contact = () => {
  return (
    <section
      id='Contact'
      className='mb-20 flex w-full flex-col items-center justify-center py-10'
    >
      <h2 className='font-display text-center text-2xl font-bold tracking-widest text-black uppercase opacity-50 xl:text-start dark:text-white'>
        Contact
      </h2>

      <div className='m-5 w-[95dvw] md:m-12 lg:m-18 lg:w-1/2'>
        <h3 className='font-display mb-6 text-center text-xl font-bold text-black dark:text-white'>
          Let's Connect
        </h3>

        <p className='font-body text-center leading-relaxed text-black/80 md:text-lg dark:text-white/80'>
          Got a project, question, or idea you'd like to share? Drop me a
          message at
          <a
            href='mailto:reqbahrf@gmail.com'
            className='text-clay decoration-clay/30 hover:decoration-clay hover:text-sage mx-2 font-semibold underline underline-offset-4 transition-all'
          >
            reqbahrf@gmail.com
          </a>
          or reach out on LinkedIn. I'd be happy to chat!
        </p>
      </div>
    </section>
  );
};

export default Contact;
