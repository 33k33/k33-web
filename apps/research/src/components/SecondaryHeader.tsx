'use client';

import * as React from 'react';
import { CategoryElements, CategorySlugs } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getUrl } from '@/utils';
import Image from 'next/image';
import researchLogo from '../assets/research-logo.svg';
import { useRouter } from 'next/router';

export interface SecondaryHeaderProps {
  categories: CategoryElements;
}

const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({ categories }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav
      className={`navbar w-full ${
        router.pathname === '/'
          ? 'bg-bg-dark-elevated-tertiary'
          : 'bg-bg-light-tertiary'
      }`}
    >
      <div className="md:container flex flex-row md:gap-12 gap-6 items-center md:justify-center h-10 md:px-0 px-6 overflow-auto">
        <Link href={process.env.NEXT_PUBLIC_RESEARCH_URL as string}>
          <Image
            src={researchLogo}
            alt="research-logo"
            width={109}
            height={12}
          />
        </Link>
        <div className="flex-1" />
        {router.pathname === '/' ? null : (
          <>
            <Link
              className={`text-body4 ${
                pathname === '/research'
                  ? 'text-label-light-primary'
                  : 'text-label-light-secondary'
              }`}
              href={getUrl('home')}
            >
              Home
            </Link>
            {categories.map((c) => (
              <Link
                className={'text-body4 text-label-light-secondary'}
                key={c.categorySlug}
                href={getUrl(c.categorySlug)}
              >
                {c.category.title}
              </Link>
            ))}
            <Link
              className={'text-body4 text-label-light-secondary'}
              href={getUrl('search')}
            >
              Search
            </Link>
            <Link
              className={'text-body4 text-label-light-secondary'}
              href={getUrl('settings')}
            >
              Settings
            </Link>
          </>
        )}
        <div className="flex-1" />
      </div>
    </nav>
  );
};

export default SecondaryHeader;
