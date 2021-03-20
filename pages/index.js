import { CheckCircleFilled } from '@ant-design/icons';
import Head from '../components/Head';
import Layout from '../components/Layout';

export default function Home() {
  const data = {
    education: [
      {
        title: 'Vocational training',
        subTitle:
          'Fullstack Development Course An 800-hour course in "Tech Career" - a technological 2021 . training center, 1200 hours of self-practice and staff',
        details: {
          title: 'Among the course contents',
          list: [
            'Client page HTML, CSS, JavaScript (DOM, AJAX, JSON)',
            'Server Page: React, Express.js, jQuery, Nodejs',
            'Development environment: Visual studio code',
            'Database: MongoDB',
            'Projects: Portfolio, link to GitHub',
          ],
        },
        start: 2021,
      },
      {
        title: 'Holds a preparatory diploma at Gordon College',
        start: 2018,
        end: 2019,
      },
      {
        title: 'ORT High School Afula, full matriculation',
        start: 2006,
        end: 2009,
      },
    ],
    workExperience: [
      {
        title: 'Therapist and Assistant, Gan Neot Margalit Alumni Group',
        from: 2014,
        to: 2020,
        description:
          'creativity, communication with the parents, working in a support team, !ability to work under pressure and great responsibility',
      },
      {
        title: 'Employee and Director of Production Line, Linorlight Industries Ltd., "Crow"',
        job: 'Technology Systems, Head of Production Line "," camera',
        from: 2012,
        to: 2014,
        position: [
          'Leading a team of 7 employees',
          'Product control management and meeting goals',
          'data entry',
        ],
        description:
          'Ability to work in a team, make decisions, work under pressure, creativity. and written and oral expression',
      },
      {
        title: 'Military Service',
        job:
          'Security diagnostician in the military police, Taoz Battalion - release with the rank of sergeant',
        from: 2010,
        to: 2012,
        position: [
          'Diagnosis and questioning of the population passing through the checkpoint',
          'Checkpoint headquarters - command of 2 additional soldiers, and operation of exceptional',
          'events',
        ],
        description: 'Supervision of passers-by at the checkpoint and operation of various events',
        certificate: 'Certificate of Excellence Military Police Officer',
      },
    ],
    skill: [
      'Full control of all Office software',
      'Web Development',
      'Team management',
      'Communication Skill',
    ],
    language: ['Hebrew: Mother tongue', 'English: High level'],
  };

  return (
    <div>
      <Head />
      <Layout>
        <section className="mb-16">
          <div className="max-w-3xl text-lg mx-auto">
            <div className="gris grid-cols-1 md:flex gap-5 items-center">
              <img
                src="/images/profile_pic.webp"
                alt="Yael Mamaniya"
                width={505}
                height={505}
                className="w-5/6 sm:w-72 h-auto px-10 mx-auto mb-7"
                style={{ borderRadius: '50%' }}
              />
              <div className="pl-5 flex-grow">
                <p>Hi, my name is</p>
                <h1 className="text-3xl font-semibold my-2">Yael Mamaniya</h1>
                <h2 className="text-lg text-gray-700">
                  Software Developer Fullstack, Back End , Front End
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-10 container mx-auto px-7 md:px-0 max-w-2xl">
            <h2 className="text-lg font-semibold mb-3">Extensive experience in</h2>
            <div className="leading-7">
              Positions that required the ability to work independently and in a team, withstand
              stressful situations, the ability to self-study, interpersonal communication,
              decision-making and the ability to express oneself in writing and verbally. Great work
              ethic, tolerance and forbearance, creativity, diligence and mission
            </div>
          </div>
        </section>
        <section className="my-24">
          <div className="max-w-2xl mx-auto px-7 md:px-0">
            <h2 className="text-2xl font-semibold mb-5 flex gap-3 items-center text-darkLight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  fill="#fff"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>{' '}
              <span>Educational Qualification</span>
            </h2>
            <div className="mx-auto max-w-lg">
              <div className="grid grid-cols-1 gap-5">
                {data.education.map((education) => (
                  <div
                    key={education.title}
                    className="shadow-xl hover:shadow-2xl px-5 py-7 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-dark">{education.title}</h3>
                    <h4 className="text-sm font-medium mb-3">{education.subTitle}</h4>
                    <div>
                      {education.details && (
                        <div>
                          <p className="font-semibold mb-2 mt-3">{education.details.title}</p>
                          <ul className="list-inside list-disc pl-5">
                            {education.details.list.map((item) => (
                              <li key={item} className="mb-2">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      From <span className="font-semibold">{education.start}</span>{' '}
                      {education.end && (
                        <>
                          to <span className="font-semibold">{education.end}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="my-24 max-w-2xl mx-auto px-7 md:px-0">
          <h2 className="text-2xl font-semibold mb-5 text-darkLight flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Work Experience</span>
          </h2>
          <div className="mx-auto max-w-lg">
            <div className="grid grid-cols-1 gap-5">
              {data.workExperience.map((work) => (
                <div key={work.title} className="shadow-xl hover:shadow-2xl px-5 py-7 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-dark">{work.title}</h3>
                  <h4 className="text-sm font-medium mb-3 mt-5">{work.job}</h4>
                  <ul className="my-2 list-disc list-inside ml-3">
                    {work?.position?.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="my-3">
                    <span className="font-semibold">The position requires: </span>{' '}
                    {work.description}
                  </div>
                  <div className="text-right">
                    From <span className="font-semibold">{work.from}</span>{' '}
                    {work.to && (
                      <>
                        to <span className="font-semibold">{work.to}</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="my-24 max-w-2xl mx-auto px-7 md:px-0">
          <h2 className="text-2xl font-semibold mb-5 flex gap-3 text-darkLight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Skills & endorsements</span>
          </h2>
          <div className="mx-auto max-w-lg">
            <div className="grid grid-cols-1 gap-3 pl-3">
              {data.skill.map((skill) => (
                <div key={skill} className="flex gap-4 items-center">
                  <CheckCircleFilled className="text-darkLight text-lg" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="my-24 max-w-2xl mx-auto px-7 md:px-0 mb-36">
          <h2 className="text-2xl font-semibold mb-5 flex gap-3 text-darkLight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-9 w-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Languages</span>
          </h2>
          <div className="mx-auto max-w-lg">
            <div className="grid grid-cols-1 gap-3 pl-3">
              {data.language.map((language) => (
                <div key={language} className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-dark"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-semibold">{language}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
      <main />
    </div>
  );
}
