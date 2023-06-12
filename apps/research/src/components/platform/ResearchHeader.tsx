import {
  Affix,
  Layout,
  Menu,
  Grid,
  Button,
  Row,
  Col,
  ConfigProvider,
  Drawer,
  Avatar,
  Dropdown,
} from 'antd';
import type { MenuProps } from 'antd';
import styles from './styles.module.scss';
import { appStructure } from '@/config';
import {
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import * as React from 'react';
import Image from 'next/image';
import companyLogo from '../../assets/k33.svg';
import researchLogo from '../../assets/research.svg';
import { useAppState } from 'platform-js';
import firebaseConfig from '@/firebase/config';
import Link from 'next/link';

const { Header } = Layout;
const { useBreakpoint } = Grid;

interface ResearchHeaderProps {}

const ResearchHeader: React.FC<ResearchHeaderProps> = () => {
  const { md } = useBreakpoint();
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const state = useAppState(firebaseConfig);

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Settings',
      icon: <SettingOutlined />,
    },
    {
      key: '2',
      label: 'Logout',
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <>
      <Affix>
        <Header className={styles.header}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#999999',
                colorBgBase: '#141414',
                colorText: '#FFFFFF',
              },
            }}
          >
            <div id="header-content">
              <Row gutter={16} wrap={false}>
                <Col
                  flex={1}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <AppLogo />
                </Col>
                {md && (
                  <Col flex={2}>
                    {
                      <Menu
                        selectable={false}
                        mode="horizontal"
                        style={{
                          borderBottom: 0,
                        }}
                        items={appStructure.navigation.map(
                          ({ key, label }) => ({
                            key,
                            label,
                          })
                        )}
                      />
                    }
                  </Col>
                )}
                <Col>
                  {state === 'SIGNED_OUT' ? (
                    <Link
                      href={`https://${process.env.NEXT_PUBLIC_WEB_DOMAIN}/services/auth`}
                    >
                      <Button type="primary">Sign In</Button>
                    </Link>
                  ) : (
                    <Dropdown menu={{ items }}>
                      <Avatar
                        onClick={(e) => e?.preventDefault()}
                        icon={<UserOutlined />}
                      />
                    </Dropdown>
                  )}
                </Col>
                <Col>
                  {!md && (
                    <Button
                      onClick={openDrawer}
                      type="text"
                      icon={<MenuOutlined />}
                    />
                  )}
                </Col>
              </Row>
            </div>
          </ConfigProvider>
        </Header>
      </Affix>
      <Drawer width={200} placement="right" onClose={closeDrawer} open={open}>
        <Menu
          selectable={false}
          style={{
            width: 200,
          }}
          items={appStructure.navigation.map(({ key, label }) => ({
            key,
            label,
          }))}
        />
      </Drawer>
    </>
  );
};

export default ResearchHeader;

const AppLogo: React.FC = () => {
  return (
    <>
      <Image width={51} priority src={companyLogo} alt="company-logo" />
      <Image
        priority
        width={98}
        style={{
          minWidth: 50,
        }}
        src={researchLogo}
        alt="research-logo"
      />
    </>
  );
};
