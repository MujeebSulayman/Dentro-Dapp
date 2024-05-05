

const FeedbackCard = ({ content, title }) => (
  <div>

    <div className='flex justify-between flex-col px-10 py-12 rounded-[10px] md:bg-white/30 bg-white/10 max-w-[340px] md:mr-10 sm:mr-5 mr-0 my-5 backdrop-blur-sm	backdrop-brightness-150 md:backdrop-filter-none'>
      <h1 className=' flex items-center justify-center font-normal text-[28px] leading-[30px] text-white'>
        {title}
      </h1>
      <p className='flex font-normal text-[17px] leading-[30px] text-dimWhite mt-6'>
        {content}
      </p>
    </div>
  </div>
);

export default FeedbackCard;
