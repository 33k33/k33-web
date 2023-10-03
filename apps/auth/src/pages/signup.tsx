import {
  Auth as AuthComponent,
  getTitle,
  LoginOptions,
  NextPageWithLayout,
} from 'platform-js';
import { Typography } from 'antd';
import config from '@/firebase/config';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { DefaultLayout } from '@/components';
import styles from './styles.module.scss';

// TODO: take on success and on failure
const SignUp: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{getTitle('Sign Up')}</title>
      </Head>
      <div id="sign-in-section" className={styles.signin}>
        <div id="title" className={styles.header}>
          <Typography.Title level={2}>Register to K33</Typography.Title>
          <div id="info">
            <Typography.Text>Already registered?</Typography.Text>
            <Link href={'/'}>
              <Typography.Link>Sign In Here</Typography.Link>
            </Link>
          </div>
        </div>
        <div id="sign-in-options" className={styles.signinOptions}>
          <AuthComponent
            onSuccessLogin={() => router.reload()}
            firebaseConfig={config}
          >
            {(props) => <LoginOptions {...props} />}
          </AuthComponent>
          <div style={{ display: 'flex', gap: 4, alignSelf: 'center' }}>
            <Typography.Text>You can also</Typography.Text>
            <Link
              href={{
                pathname: '/email_link_signup',
              }}
            >
              <Typography.Link underline color="black">
                Sign Up with a Email Link.
              </Typography.Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

SignUp.getLayout = function (page) {
  return <DefaultLayout footer="signing up">{page}</DefaultLayout>;
};

export default SignUp;
