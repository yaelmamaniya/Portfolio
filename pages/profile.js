/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserOutlined } from '@ant-design/icons';
import Head from '../components/Head';
import Layout from '../components/Layout';

const Register = () => {
  const router = useRouter();
  const [user, setUser] = useState({ name: '', email: '', age: '' });

  const clean = () => {
    window.localStorage.removeItem('login_yael');
    window.localStorage.removeItem('user_data_yael');
    router.replace('/login');
  };

  useEffect(() => {
    if (window.localStorage.getItem('login_yael') === 'true') {
      let data = window.localStorage.getItem('user_data_yael');
      if (data) {
        data = JSON.parse(data);
        if ((data.name !== '', data.age !== '', data.email !== '')) {
          setUser({ name: data.name, email: data.email, age: data.email });
        } else {
          clean();
        }
      } else {
        clean();
      }
    }
  }, []);

  return (
    <div>
      <Head title="Profile" />
      <Layout>
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center">
            <UserOutlined className="text-4xl text-center text-dark rounded-full" />
          </div>
          <h1 className="text-3xl text-center m-3">Welcome, {user.name}</h1>
          <h2 className="text-2xl my-5">My Profile, </h2>
          <div className="grid gap-5 grid-cols-1 text-lg font-bold">
            <div>
              <div>Name</div>
              <div className="text-sm pl-3 font-normal">{user.name}</div>
            </div>
            <div>
              <div>Email</div>
              <div className="text-sm pl-3 font-normal">{user.email}</div>
            </div>
            <div>
              <div>Date of Birth</div>
              <div className="text-sm pl-3 font-normal">{user.age}</div>
            </div>
          </div>
        </div>
      </Layout>
      <main />
    </div>
  );
};

export default Register;
