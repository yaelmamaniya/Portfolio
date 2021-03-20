import { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  LeftOutlined,
  LogoutOutlined,
  UserOutlined,
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  LoginOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

const { Header, Content, Sider } = Layout;

const LayoutCustom = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const [login, setLogin] = useState(false);
  const router = useRouter();
  const [mobile, setMobile] = useState(85);

  const onChangeTopMenu = (e) => {
    if (e.key === 'account') {
      if (window.localStorage.getItem('login_yael') === 'true') router.push('/profile');
      else router.push('/login');
    }
  };

  const sidebarChange = (e) => {
    if (e.key === 'home') {
      router.push('/');
    }
    if (e.key === 'logout') {
      window.localStorage.removeItem('login_yael');
      setLogin(false);
      router.replace('/login');
    }
    if (e.key === 'login') {
      router.replace('/login');
    }
    if (e.key === 'register') {
      router.replace('/register');
    }
  };

  const header = [
    {
      img: '/images/gov.li.webp',
      url: 'https://www.gov.il/he/departments/news/codein-plan',
      key: 'nav1',
      alt: 'gov.li',
    },
    {
      img: '/images/younglod.webp',
      url: 'https://www.younglod.com/',
      key: 'nav2',
      alt: 'younglod',
    },
    {
      img: '/images/tech-career.webp',
      url: 'https://tech-career-alternative.firebaseapp.com/',
      key: 'nav3',
      alt: 'tech-career',
    },
  ];

  const footer = {
    accounts: [
      { icon: GithubOutlined, url: 'https://github.com/yaelmamaniya' },
      { icon: FacebookOutlined, url: 'https://m.facebook.com/yaelmamaniya' },
      { icon: LinkedinOutlined, url: 'https://www.linkedin.com/in/yael-mamaniya-52ab351bb' },
    ],
    email: 'yaelmamaniya23@gmail.com ',
  };

  useEffect(() => {
    if (window.localStorage.getItem('login_yael') === 'true') {
      setLogin(true);
    }
  }, []);

  return (
    <Layout>
      <Header className="header bg-white shadow-lg h-full">
        <div className="flex gap-5 justify-between">
          <div className="flex items-center">
            <div className="font-berkshireSwash text-darkLight text-lg">
              <Link href="/">Yael Mamaniya</Link>
            </div>
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={['2']} onClick={onChangeTopMenu}>
            {header.map((hed) => (
              <Menu.Item key={hed.key} className="h-full">
                <div className="h-full flex justify-center items-center">
                  <Link href={hed.url}>
                    <img src={hed.img} alt={hed.alt} className="w-auto md:w-20 h-full md:h-auto" />
                  </Link>
                </div>
              </Menu.Item>
            ))}

            <Menu.Item key="account" className="h-full">
              <div className="h-full flex items-center justify-center">
                <UserOutlined />
              </div>
            </Menu.Item>
          </Menu>
        </div>
      </Header>

      <Layout>
        <Sider
          collapsible
          collapsed={collapse}
          onCollapse={() => {
            setCollapse(!collapse);
          }}
          breakpoint="sm"
          collapsedWidth={mobile}
          onBreakpoint={(broken) => {
            if (broken) {
              setMobile(0);
            } else {
              setMobile(85);
            }
          }}
        >
          <Menu theme="dark" mode="vertical" onClick={sidebarChange}>
            <Menu.Item key="home" icon={<LeftOutlined />}>
              Home
            </Menu.Item>
            {login ? (
              <Menu.Item key="logout" icon={<LogoutOutlined />}>
                Logout
              </Menu.Item>
            ) : (
              <>
                <Menu.Item key="login" icon={<LoginOutlined />}>
                  Login
                </Menu.Item>
                <Menu.Item key="register" icon={<UserAddOutlined />}>
                  Contact Me
                </Menu.Item>
              </>
            )}
          </Menu>
        </Sider>

        <Layout className="pt-5 h-full min-h-screen">
          <Content className="site-layout-background px-4">{children}</Content>
          <footer className="bg-darkLight">
            <div className="w-full">
              <div className="flex flex-wrap gap-4 justify-center items-center py-3 px-5">
                {footer.accounts.map((acc) => (
                  <div key={acc.url}>
                    <a href={acc.url}>
                      <acc.icon className="text-white text-xl" />
                    </a>
                  </div>
                ))}
              </div>
              <div className="text-center text-white bg-dark py-3 px-5">
                &copy; {new Date().getFullYear()} All Right reserve by{' '}
                <a href={`mailto:${footer.email}`} className="text-sitePrimary">
                  {footer.email}
                </a>
              </div>
            </div>
          </footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutCustom;
