/* eslint-disable react/button-has-type */
import { UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, DatePicker } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from '../components/Head';
import Layout from '../components/Layout';

const Register = () => {
  const router = useRouter();

  const onFinish = (values) => {
    window.localStorage.setItem(
      'user_data_yael',
      JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        age: values.age.toString(),
      })
    );
    router.push('/profile');
  };

  return (
    <div>
      <Head title="Contact Me" />
      <Layout>
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center">
            <UserOutlined className="text-4xl text-center text-dark rounded-full" />
          </div>
          <h1 className="text-3xl text-center m-3">Register Yourself</h1>
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
              label="Your Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Enter your full name',
                  type: 'string',
                },
              ]}
              className="mb-7"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Your Email Id"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Enter your email',
                  type: 'email',
                },
              ]}
              className="mb-7"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Your Birth Date"
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Enter your date of birth',
                },
              ]}
              className="mb-7"
            >
              <DatePicker className="w-full" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter a password min length of 6!',
                  min: 6,
                },
              ]}
              className="mb-9"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: 'Please enter confirm password',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    // eslint-disable-next-line prefer-promise-reject-errors
                    return Promise.reject("Password and confirm password isn't match!");
                  },
                }),
              ]}
              className="mb-9"
            >
              <Input.Password />
            </Form.Item>
            <div className="pb-7 flex justify-between flex-wrap gap-3">
              <div className="flex-grow">
                <Link href="/login">Already have a account login</Link>
              </div>
              <div className="flex-grow">
                <button type="reset" className="hover:text-sitePrimary w-full">
                  <p className="text-right w-full">Clear Form</p>
                </button>
              </div>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Layout>
      <main />
    </div>
  );
};

export default Register;
