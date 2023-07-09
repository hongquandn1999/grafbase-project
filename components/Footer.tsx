import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FooterColumnProps {
  title: string;
  links: Array<string>;
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link, index) => (
        <Link href="/" key={index}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer>
      <div className="flexStart footer">
        <div className="flex flex-col gap-12 w-full">
          <div className="flex items-start flex-col">
            <Image
              src="/logo-purple.svg"
              width={115}
              height={38}
              alt="Flexibble"
            />
            <p className="text-start text-sm font-normal mt-5 max-w-xs">
              Flexibble is the world's leading community for creatives to share,
              grow and get hires.
            </p>
            <div className="flex flex-wrap gap-12 mt-5">
              {footerLinks &&
                footerLinks.map((footerLink) => (
                  <FooterColumn
                    title={footerLink.title}
                    links={footerLink.links}
                    key={footerLink.id}
                  />
                ))}
            </div>
          </div>
          <div className="flexBetween footer_copyright">
            <p>@ 2023 Flexibble. All rights reserved</p>
            <p className="text-gray">
              <span className="text-back font-semibold">805,702</span> projects
              submitted
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
