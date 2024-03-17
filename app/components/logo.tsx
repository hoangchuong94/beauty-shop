import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '/public/static/logo-retina.png';

const logo = () => {
  return (
    <div className="mr-4 w-24">
      <Link href={'/'}>
        <Image src={Logo} alt="logo home" priority />
      </Link>
    </div>
  );
};

export default logo;
