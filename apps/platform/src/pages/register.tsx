import { getPageData } from '@/lib/markdown';
import { GetStaticProps } from 'next';
import { BasicButton, NextPageWithLayout } from 'ui';
import ReactMarkdown from 'react-markdown';
import { ReactElement } from 'react-markdown/lib/react-markdown';

interface RegisterProps {
  terms: {
    page: string;
    content: string;
    frontmatter: {
      title: any;
      description: any;
    };
  };
}

const Register: NextPageWithLayout<RegisterProps> = ({ terms }) => {
  return (
    <div className="md:container px-6 md:px-0 py-4 flex flex-col gap-6 mb-32">
      <p className="text-heading7 md:text-heading5 text-label-light-secondary">
        {terms.frontmatter.title}
      </p>
      <article className="prose-sm md:prose-lg">
        <ReactMarkdown>{terms.content}</ReactMarkdown>
      </article>
      <div className="fixed bottom-0 h-32 bg-brand-dark-primary justify-center w-full left-0 right-0 drop-shadow-xl flex flex-col items-center px-6">
        <div className="w-full md:w-1/3">
          <BasicButton variant="secondary" size="medium" fullWidth>
            Accept and Register
          </BasicButton>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<RegisterProps> = async ({
  params,
}) => {
  const terms = await getPageData('terms');
  return {
    props: {
      terms,
    },
  };
};

export default Register;
