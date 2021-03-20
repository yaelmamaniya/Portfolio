import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Head from '../components/Head';
import Layout from '../components/Layout';

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState([
    { img: '', name: 'Vera Carpenter', email: 'vera-carpenter@email.com', age: 'Jan 21, 2020' },
    { img: '', name: 'Blake Bowman', email: 'blake-bowman@email.com', age: 'Jan 01, 2020' },
    { img: '', name: 'Dana Moore', email: 'dana-moore@email.com', age: 'Jan 10, 2020' },
    { img: '', name: 'Alonzo Cox', email: 'alonzo-cox@email.com', age: 'Jan 18, 2020' },
  ]);

  return (
    <div>
      <Head title="Profile" />
      <Layout>
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center">
            <UserOutlined className="text-4xl text-center text-dark rounded-full" />
          </div>
          <h1 className="text-3xl text-center m-3">The Users</h1>
        </div>
        <div className="my-16 max-w-5xl mx-auto overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead className="bg-darkLight text-white">
              <tr>
                <th className="px-5 py-3 border-b-2 border-white  text-left text-xs font-semibold uppercase tracking-wider">
                  User Name
                </th>
                <th className="px-5 py-3 border-b-2 border-white  text-left text-xs font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-white  text-left text-xs font-semibold uppercase tracking-wider">
                  Age
                </th>
              </tr>
            </thead>
            <tbody>
              {' '}
              {user.map((usr) => (
                <tr key={usr.email}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 text-darkLight">
                        {usr.img !== '' ? (
                          <img
                            className="w-full h-full rounded-full"
                            src={usr.img}
                            alt={usr.name}
                          />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-full h-auto"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">{usr.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{usr.email}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{usr.age}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
      <main />
    </div>
  );
};

export default Register;
