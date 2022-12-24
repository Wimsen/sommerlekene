import { Session } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import React, { ComponentType, useEffect } from 'react';

import Loader from '@/components/Loader';

export type AuthenticatedProps<P> = P & {
  session: Session;
};

const withAuthentication =
  <P,>(Component: ComponentType<AuthenticatedProps<P>>): React.FC<P> =>
  (props) => {
    const { data: session, status } = useSession();

    useEffect(() => {
      if (status === 'unauthenticated') {
        signIn();
      }
    }, [status]);

    if (status === 'loading') {
      return <Loader variant='light' />;
    }

    if (status === 'authenticated') {
      return <Component {...props} session={session} />;
    }
    return <></>;
  };

export default withAuthentication;
