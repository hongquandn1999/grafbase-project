import { NavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar flexBetween">
        <div className="flex-1 flexStart gap-10">
          <Link href="/">
            <Image src="/logo.svg" alt="Flexibble" width={115} height={43} />
          </Link>
          <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
