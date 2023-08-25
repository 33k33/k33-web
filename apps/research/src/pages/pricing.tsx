import { siteUsername } from '@/utils';
import { UserOutlined } from '@ant-design/icons';
import {
  Col,
  Layout,
  Row,
  Space,
  theme,
  Typography,
  Radio,
  Card,
  Divider,
} from 'antd';
import { NextSeo } from 'next-seo';
import * as React from 'react';

const { useToken } = theme;
const { Title, Text } = Typography;

type Plan = 'monthly' | 'year';

const Pricing = () => {
  const {
    token: { colorBgContainer },
  } = useToken();

  const [plan, setPlan] = React.useState<Plan>('monthly');

  return (
    <>
      <NextSeo
        themeColor="#000000"
        robotsProps={{
          maxImagePreview: 'large',
        }}
        title={'Research - Pricing'}
        description={
          'Unlock the secrets to successful digital asset valuation. Leverage data and economic theory to accurately assess the worth of diverse tokens and maximize your investment potential.'
        }
        twitter={{
          handle: siteUsername,
          site: process.env.NEXT_PUBLIC_WEB_DOMAIN,
          cardType: 'summary_large_image',
        }}
        openGraph={{
          title: 'Research - Pricing',
          description:
            'Gain a competitive edge in the dynamic digital assets industry. Stay informed about the latest trends and news shaping the future landscape while navigating its intricate landscape with our expert industry insights.',
          url: `https://${process.env.NEXT_PUBLIC_WEB_DOMAIN}/research/articles`,
          type: 'article:section',
          images: [
            {
              url: 'https://images.ctfassets.net/i0qyt2j9snzb/3bw9VhMe8k8aI66rUAsGuR/8885288dd10032e9c5bbd287c69b3dd8/Cover_image_research__5_.png?h=250',
              alt: 'k33-logo',
            },
          ],
          siteName: process.env.NEXT_PUBLIC_WEB_DOMAIN + '/research',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <section
          id="page-title"
          style={{
            maxWidth: 1440,
            alignSelf: 'center',
            width: '100%',
          }}
        >
          <Row>
            <Col span={22} offset={1}>
              <div
                id="page-title"
                style={{
                  display: 'flex',
                  padding: '24px 24px 24px 0px',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  gap: 12,
                  alignSelf: 'stretch',
                }}
              >
                <Space direction="vertical" size="small">
                  <Title
                    level={3}
                    style={{
                      margin: 0,
                    }}
                  >
                    Pricing
                  </Title>
                </Space>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <Layout
        style={{
          display: 'flex',
          backgroundColor: colorBgContainer,
        }}
      >
        <section
          id="page-title"
          style={{
            maxWidth: 1440,
            alignSelf: 'center',
            width: '100%',
          }}
        >
          <Row>
            <Col
              span={22}
              offset={1}
              style={{
                display: 'flex',
                padding: '40px 0px 64px 0px',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '40px',
                alignSelf: 'stretch',
              }}
            >
              <Space.Compact
                direction="vertical"
                style={{
                  textAlign: 'center',
                }}
              >
                <Title level={3}>Compare and Get Your Plan!</Title>
                <Text>
                  The right plan is waiting for you. Subscribe and get full
                  access to all research content.
                </Text>
              </Space.Compact>
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="yearly">Yearly Plan</Radio.Button>
                <Radio.Button value="monthly">Montly Plan</Radio.Button>
              </Radio.Group>
              <div className="pricingTable">
                <Card>
                  <Space direction="vertical" align="center">
                    <Space align="center">
                      <UserOutlined />
                      <Title
                        style={{
                          margin: 0,
                        }}
                        level={5}
                      >
                        Free Plan
                      </Title>
                    </Space>
                    <Space.Compact
                      direction="horizontal"
                      style={{
                        gap: 4,
                        alignItems: 'center',
                      }}
                    >
                      <Text type="secondary">$</Text>
                      <Title
                        style={{
                          margin: 0,
                          padding: 0,
                          alignSelf: 'flex-start',
                        }}
                      >
                        0
                      </Title>
                      <Text>/year</Text>
                    </Space.Compact>
                  </Space>
                </Card>
              </div>
            </Col>
          </Row>
        </section>
      </Layout>
    </>
  );
};

export default Pricing;
