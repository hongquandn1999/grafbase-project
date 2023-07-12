'use client';

import { Provider, Providers } from '@/constants/type';
import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    fetchProviders();
  }, []);
  console.log(providers);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i} onClick={() => signIn(provider.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default AuthProviders;
