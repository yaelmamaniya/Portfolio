/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { LoginOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from '../components/Head';
import Layout from '../components/Layout';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const onFinish = (values) => {
    setError(false);
    let data = window.localStorage.getItem('user_data_yael');
    if (data) {
      data = JSON.parse(data);
      if (data.password === values.password && data.email === values.email) {
        window.localStorage.setItem('login_yael', 'true');
        router.push('/profile');
      } else {
        setError(true);
      }
    }
    console.log('Success:', data);
  };

  useEffect(() => {
    if (window.localStorage.getItem('login_yael') === 'true') router.replace('/profile');
  }, []);

  return (
    <div>
      <Head />
      <Layout>
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center">
            <LoginOutlined className="text-4xl text-center text-dark rounded-full" />
          </div>
          <h1 className="text-3xl text-center m-3">Login</h1>
          {error && <p>Wrong email or password</p>}
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            className="mt-16"
            onFinish={onFinish}
          >
            <Form.Item
              label="Your Email Id"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Enter a email',
                  type: 'email',
                },
              ]}
              className="mb-7"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              className="mb-9"
            >
              <Input.Password />
            </Form.Item>

            <div className="pb-7">
              <div>
                <Link href="/register">Don't have a account register</Link>
              </div>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Layout>
      <main />
    </div>
  );
};

export default Login;
