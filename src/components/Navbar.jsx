import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import style from './Navbar.module.css';
import { Link } from 'react-router';

const { Header } = Layout;

const Navbar = () => {
  console.log('Navbar');
  return (
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
          { icon: <BarChartOutlined />, title: 'Report', label: 'Report' },
          { icon: <SettingOutlined />, title: 'Setting', label: 'Setting' },
          { icon: <UserOutlined />, title: 'Sign In', label: 'Sign In' },
        ]}
      />
    </Header>
  );
};

export default Navbar;
