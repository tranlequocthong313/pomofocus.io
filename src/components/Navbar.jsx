import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import style from './Navbar.module.css';
import { Link } from 'react-router';
import Setting from './Setting';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpenSetting, setIsOpenSetting] = useState(false);

  console.log('Navbar');

  return (
    <>
      <Header className={style.header}>
        <div className={style.logo}>
          <Link to='/'>
            <img
              src='https://pomofocus.io/images/icon-white2.png'
              alt='logo'
              style={{ width: 20, height: 20 }}
            />
            <h1>Pomofocus</h1>
          </Link>
        </div>

        <Menu
          mode='horizontal'
          className={style.menu}
          items={[
            {
              icon: <BarChartOutlined />,
              title: t('Report'),
              label: t('Report'),
            },
            {
              icon: <SettingOutlined />,
              title: t('Setting'),
              label: t('Setting'),
              onClick: () => setIsOpenSetting(true),
            },
            {
              icon: <UserOutlined />,
              title: t('Sign In'),
              label: t('Sign In'),
            },
          ]}
        />
      </Header>

      <Setting onClose={() => setIsOpenSetting(false)} isOpen={isOpenSetting} />
    </>
  );
};

export default Navbar;
