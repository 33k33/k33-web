import { Button, Divider, Layout, Space, theme, Row, Col } from 'antd';
import styles from './styles.module.scss';
import {
  MailOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from '@ant-design/icons';
import { appStructure } from '@/config';
import Link from 'next/link';

const { Footer, Content } = Layout;
const { useToken } = theme;

const ResearchFooter: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = useToken();
  return (
    <Footer
      style={{
        backgroundColor: colorBgContainer,
      }}
      className={styles.footer}
    >
      <Divider />
      <div
        style={{
          maxWidth: 1440,
          alignSelf: 'center !important',
          width: '100%',
        }}
      >
        <Row wrap={false}>
          <Col span={22} offset={1} className={styles.footerContent}>
            <div id="navigation" className={styles.navigation}>
              {appStructure.navigation.map((nav) => (
                <Link href={nav.url} key={nav.key}>
                  <Button key={nav.label} type="link" size="small">
                    {nav.label}
                  </Button>
                </Link>
              ))}
            </div>
            <div id="social-links">
              <Space wrap>
                <Button
                  type="link"
                  icon={<MailOutlined />}
                  href="mailto:contact@k33.com"
                />
                <Button
                  type="link"
                  icon={<LinkedinFilled />}
                  href="https://twitter.com/K33HQ?ref_src=twsrc%5Etfw"
                />
                <Button type="link" icon={<TwitterOutlined />} />
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default ResearchFooter;
