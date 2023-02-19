import { getProductAdvertBySlug, getProductSlugs } from '@/api';
import { ResearchFooter, ResearchHeader } from '@/components';
import config from '@/firebase/config';
import { ProductLandingPage } from '@/types';
import { downloadResource, getUrl } from '@/utils';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppState } from 'platform-js';
import { useEffect } from 'react';
import { BasicButton, BasicList } from 'ui';

interface ProductProps {
  product: ProductLandingPage;
}

// TODO: extract some component
const Product: NextPage<ProductProps> = ({ product }) => {
  const { subscriptionPage } = product;
  const router = useRouter();
  const state = useAppState(config);
  useEffect(() => {
    if (state === 'REGISTRED') {
      router.push('/home');
    }
  }, [state, router]);
  return (
    <div className="bg-bg-dark-primary">
      <div className="min-h-screen pb-12">
        <ResearchHeader categories={[]} />
        <main className="flex flex-col">
          <div className="w-auto hidden md:inline-block relative h-[300px]">
            {product.product.landingPageImage ? (
              <Image
                src={product.product.landingPageImage.url}
                alt={product.product.landingPageImage.title}
                fill
                style={{
                  objectFit: 'contain',
                  top: 0,
                }}
              />
            ) : null}
          </div>
          <div className="w-auto md:hidden inline-block relative h-[300px]">
            {product.product.landingPageImage ? (
              <Image
                src={product.product.landingPageImage.url}
                alt={product.product.landingPageImage.title}
                fill
                style={{
                  transformOrigin: 'center',
                  transform: 'scale(2.5)',
                  top: 0,
                }}
              />
            ) : null}
          </div>
          <div className="flex md:flex-row md:justify-between md:content-center flex-col md:container items-center md:gap-20 py-20 md:py-36 md:px-0 px-6">
            <div
              id="product-description"
              className="flex flex-col md:gap-12 gap-9 max-w-[668px]"
            >
              <div className="flex flex-col md:gap-6 gap-6">
                <h6 className="md:text-heading7 text-heading8 text-label-dark-primary">
                  {product.product.caption}
                </h6>
                {product.product.features ? (
                  <div className="flex flex-col md:gap-9 gap-4">
                    {product.product.features.map((feature) => (
                      <div className="flex flex-row items-center md:gap-3">
                        <div className="w-[41px] h-[36px]">
                          <svg
                            width="41"
                            height="36"
                            viewBox="0 0 41 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.0292 9.00832C20.6833 9.17494 25.453 13.0399 27.2254 18.5259C29.0245 24.0947 27.7117 30.4242 23.0574 33.8584C18.4374 37.2673 12.2872 36.3291 7.6143 32.9961C2.60877 29.4258 -1.38236 23.6833 0.455665 17.7371C2.33002 11.6733 8.80561 8.82491 15.0292 9.00832Z"
                              fill="#AEAEB2"
                            />
                            <path
                              d="M40.8063 6.19227C41.0646 6.45892 41.0646 6.87557 40.8063 7.14222L18.1409 29.8075C17.8743 30.0658 17.4577 30.0658 17.191 29.8075L5.19505 17.8082C4.93498 17.5416 4.93498 17.125 5.19505 16.8583C5.45587 16.6 5.87751 16.6 6.13833 16.8583L17.591 28.3909L39.8563 6.19227C40.123 5.93396 40.5396 5.93396 40.8063 6.19227Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p className="md:text-heading8 text-body1 text-label-dark-secondary">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              {product.product.sampleReport ? (
                <BasicButton
                  variant="secondary"
                  onClick={() =>
                    downloadResource(product.product.sampleReport.url)
                  }
                >
                  Download Sample
                </BasicButton>
              ) : null}
            </div>
            {product.product.productImage ? (
              <div
                id="product-sample-image"
                className="relative w-full h-[376px] md:w-[759px] md:h-[681px]"
              >
                <Image
                  src={product.product.productImage.url}
                  fill
                  alt={product.product.productImage.title}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            ) : null}
          </div>
          <div className="flex md:flex-row flex-col gap-2 md:justify-between md:items-center md:container md:px-0 px-6">
            <div className="md:w-[782px]">
              <h1 className="md:text-heading1 text-label-dark-primary text-heading6">
                Get access for $50 per month
              </h1>
            </div>
            <div className="flex flex-col md:gap-12 gap-10">
              <div className="flex flex-col md:gap-8 gap-10">
                <p className="md:text-heading8 text-label-dark-secondary text-body3">
                  What you get in our professional plan
                </p>
                <div className="flex flex-col md:gap-9 gap-7">
                  {subscriptionPage.subscription.features.map((feature) => (
                    <div className="flex flex-row items-center md:gap-3">
                      <div className="w-[41px] h-[36px]">
                        <svg
                          width="41"
                          height="36"
                          viewBox="0 0 41 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.0292 9.00832C20.6833 9.17494 25.453 13.0399 27.2254 18.5259C29.0245 24.0947 27.7117 30.4242 23.0574 33.8584C18.4374 37.2673 12.2872 36.3291 7.6143 32.9961C2.60877 29.4258 -1.38236 23.6833 0.455665 17.7371C2.33002 11.6733 8.80561 8.82491 15.0292 9.00832Z"
                            fill="#AEAEB2"
                          />
                          <path
                            d="M40.8063 6.19227C41.0646 6.45892 41.0646 6.87557 40.8063 7.14222L18.1409 29.8075C17.8743 30.0658 17.4577 30.0658 17.191 29.8075L5.19505 17.8082C4.93498 17.5416 4.93498 17.125 5.19505 16.8583C5.45587 16.6 5.87751 16.6 6.13833 16.8583L17.591 28.3909L39.8563 6.19227C40.123 5.93396 40.5396 5.93396 40.8063 6.19227Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p className="md:text-heading8 text-label-dark-secondary text-body1">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-[315px]">
                <BasicButton
                  variant="secondary"
                  size="medium"
                  onClick={() =>
                    router.push(
                      getUrl('subscription', subscriptionPage.subscriptionSlug)
                    )
                  }
                >
                  Start 30-Day Free Trial
                </BasicButton>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ResearchFooter categories={[]} />
    </div>
  );
};

// TODO: put everything in contentful later

export const getStaticPaths: GetStaticPaths = async (context) => {
  const products = await getProductSlugs();
  const paths = products.map(({ productSlug }) => ({
    params: { productSlug },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const productSlug = context.params!.productSlug as string;
  const product = await getProductAdvertBySlug(productSlug);
  return {
    props: {
      product,
    },
  };
};

export default Product;
