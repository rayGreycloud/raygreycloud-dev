import Link from 'next/link';
import { useRouter } from 'next/router';

import { Disclosure } from '@headlessui/react';

import { MenuIcon } from '@/icons/MenuIcon';
import { XIcon } from '@/icons/XIcon';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' }
];

export const Header = () => {
  const router = useRouter();

  return (
    <Disclosure as='nav' className='sticky z-1020 w-full h-fit bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon classes='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon classes='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-between'>
                <Link href={'/'} className='flex-shrink-0 flex items-center'>
                  <a
                    className='w-auto text-lg text-green-400 hover:text-green-300 uppercase tracking-widest'
                    aria-current={router.pathname == '/' ? 'page' : undefined}
                  >
                    raygreycloud.dev
                  </a>
                </Link>

                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={`${
                            router.pathname == item.href
                              ? 'text-green-600 border-green-600'
                              : 'text-gray-300 border-transparent hover:text-green-600 transform hover:scale-125'
                          } bg-transparent border-b-2 px-3 py-2 text-sm font-medium uppercase transition ease-in`}
                          aria-current={
                            router.pathname == item.href ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`${
                      router.pathname == item.href
                        ? 'text-green-600'
                        : 'text-gray-300 hover:text-green-600'
                    } bg-transparent block px-3 py-2 text-base font-medium uppercase transition ease-in`}
                    aria-current={
                      router.pathname == item.href ? 'page' : undefined
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
