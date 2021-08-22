import { EmailIcon } from '@/icons/EmailIcon';
import { EnvelopeIcon } from '@/icons/EnvelopeIcon';
import { TwitterIcon } from '@/icons/TwitterIcon';

export default function ContactPage() {
  return (
    <main className='flex flex-col items-center w-full flex-1 pt-16 md:pt-20 md:px-20 text-center'>
      <h1 className='text-3xl md:text-6xl font-bold mb-8'>
        <div className='text-green-600'>Contact Me</div>
      </h1>
      <div className='flex items-center justify-between pt-4 w-60'>
        <a
          key='emailMeBtn'
          href='mailto:raygreycloud@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='w-24 h-24 flex items-center justify-center rounded-full hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
        >
          <EnvelopeIcon classes={'w-24 h-24'} />
        </a>
        <a
          key='twitterBtn'
          href='https://twitter.com/intent/user?user_id=1038860382796836864'
          target='_blank'
          rel='noopener noreferrer'
          className='w-24 h-24 flex items-center justify-center rounded-full hover:text-green-600 focus:text-green-600 transition transform hover:scale-125'
        >
          <TwitterIcon classes={'w-24 h-24'} />
        </a>
      </div>
    </main>
  );
}
