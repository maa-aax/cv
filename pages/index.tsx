/* eslint-disable react/no-unescaped-entities */
import { useCallback, useState } from 'react'
import { FaLinkedin, FaSun } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GiSmartphone } from 'react-icons/gi'
import { MdDarkMode } from 'react-icons/md'
import { SiMaildotru } from 'react-icons/si'

import Separator from 'components/Separator'
import Tag from 'components/Tag'
import clsx from 'clsx'

const links = {
  email: 'maxime.duhamel@protonmail.com',
  linkedin: 'https://www.linkedin.com/in/duhamel-maxime',
  maps: 'https://www.google.com/maps/place/Toulouse/@43.6005854,1.2683801,11z/data=!3m1!4b1!4m6!3m5!1s0x12aebb6fec7552ff:0x406f69c2f411030!8m2!3d43.604652!4d1.444209!16zL20vMGNiaGg?entry=ttu',
}

const skills = {
  base: {
    js: 'JavaScript',
    ts: 'TypeScript',
  },
  general: {
    agile: 'Agile',
    apis: 'APIs',
    'ci/cd': 'CI/CD',
    'ui/ux': 'UI/UX',
  },
  front: {
    react: 'React',
    next: 'Next',
    vue: 'Vue',
    svelte: 'svelte',
    jquery: 'JQuery',
    html5: 'HTML5',
    css: 'CSS',
    css3: 'CSS3',
    sass: 'Sass',
    tailwind: 'TailwindCSS',
    babel: 'Babel',
    gulp: 'Gulp',
    webpack: 'Webpack',
    ie: 'Internet Explorer'
  },
  back: {
    node: 'Node',
    express: 'Express',
    koa: 'Koa',
  },
  dbs: {
    postgre: 'PostgreSQL (Sequelize)',
    express: 'Express',
    mongo: 'MongoDB (Mongoose)',
  },
  other: {
    mac: 'Mac',
    linux: 'Linux',
    docker: 'Docker',
    aws: 'AWS',
    gcloud: 'G-Cloud',
    Github: 'Github',
    Gitlab: 'Gitlab',
    rabbitmq: 'RabbitMQ',
    jenkins: 'Jenkins',
    sentry: 'Sentry',
    metabase: 'Metabase',
    slack: 'Slack',
    notion: 'Notion',
  },
  miscellaneous: {
    vba: 'VBA',
    python: 'Python',
    xml: 'XML',
    virtualbox: 'VirtualBox',
    trello: 'Trello',
  },
  learning: {
    vue: 'Vue',
    svelte: 'Svelte',
    bun: 'Bun',
  }
}

export default function Home() {
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('en')

  const handleSetTheme = useCallback(
    () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark')
      // if (newTheme === 'dark') {
      //   document.documentElement.classList.add('dark')
      // } else {
      //   document.documentElement.classList.remove('dark')
      // }
      setTheme(newTheme)
    },
    [theme]
  )

  // const handleSetLang = useCallback(
  //   () => setLang(lang === 'en' ? 'fr ' : 'en'),
  //   [lang, setLang]
  // )
  // const t = (str: string) => str

  return (
    <main className="flex justify-center content-center 4xs:bg-gray-700 xs:bg-stone-500 dark:bg-slate-700">
      {/* <button
        className="w-fit absolute top-2 mr-20 px-4 font-semibold rounded-md border-2 border-black bg-stone-200 text-black dark:bg-slate-700 dark:text-white hover:scale-110 active:scale-100 duration-200"
        onClick={handleSetLang}
      >{lang === 'en' ? 'fr ' : 'en'}</button> */}
      {/* <button
        className="w-fit absolute top-2 3xs:ml-18 ml-20 px-4 py-1 rounded-md border-2 border-black bg-stone-200 text-black dark:bg-slate-700 dark:text-white hover:scale-110 active:scale-100 duration-200"
        onClick={handleSetTheme}
      >
        { theme === 'light'
          ? <MdDarkMode />
          : <FaSun />
        }
      </button> */}

      <div className={clsx(
        'flex flex-col m-4 4xs:m-0 xs:m-4 p-4 4xs:p-2 xs:p-8',
        'border-4 shadow-xl dark:text-white',
        'bg-stone-300 dark:bg-stone-600',
        'border-gray-700 dark:border-black',
        '4xs:rounded-lg xs:rounded-2xl',
        // 'bg-stone-300 border-gray-700 4xs:rounded-lg xs:rounded-2xl dark:bg-stone-600 dark:border-black dark:text-white',
      )}>

        <header className="">
          <div className="flex flex-col 2xs:flex-row justify-start items-center 2xs:space-x-8">
            <div className="relative">
              <button
                className="w-fit absolute top-2 ml-2 px-4 py-1 rounded-md border-2 border-black bg-stone-200 text-black dark:bg-slate-700 dark:text-white hover:scale-110 active:scale-100 duration-200"
                style={{
                  top: "-5px",
                }}
                onClick={handleSetTheme}
              >
                { theme === 'light'
                  ? <MdDarkMode />
                  : <FaSun />
                }
              </button>
              <div
                className="h-40 w-40 bg-cover bg-no-repeat rounded-full border-2 border-gray-700"
                style={{
                  backgroundImage: `url('picture-2.jpg')`,
                  backgroundPositionY: '16%',
                }}
              />
            </div>

            <div className="flex flex-col space-y-2 3xs:mt-4">
              <h1 className="text-2xl xs:text-5xl md:text-6xl font-extrabold">Duhamel Maxime</h1>
              <h2 className="text-2xl">Full-Stack JS Developer</h2>
              <h2 className="text-lg">10 ans d'expérience</h2>
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row">

          <div className="md:mt-10 md:w-2/6 md:mr-10">
            <Separator classes="md:hidden"/>

            <section>
              <h2 className="text-2xl font-bold">Contact</h2>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center space-x-2">
                  <GiSmartphone className="text-xl"/>
                  <a href="tel:0640654963" className="text-purple-600 hover:underline dark:text-purple-300">
                    07 43 62 17 10
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <SiMaildotru className="text-xl"/>
                  <a
                    href={`mailto:${links.email}`}
                    className="text-purple-600 hover:underline dark:text-purple-300"
                  >
                    {links.email}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLinkedin className="text-xl"/>
                  <a
                    className="text-purple-600 hover:underline dark:text-purple-300"
                    href={links.linkedin}
                    target="_blank"
                  >
                    {/* duhamel-maxime */}
                    linkedin.com/in/duhamel-maxime
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLocationDot className="text-xl"/>
                  <a
                    href={links.maps}
                    className="text-purple-600 hover:underline dark:text-purple-300"
                    target="_blank"
                  >
                    Toulouse, France
                  </a>
                </li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="flex text-2xl font-bold">Compétences</h2>
              <ul className="mt-2 flex flex-wrap">
                {Object.keys(skills.base).map((skill, index) => (
                  <li key={index} className="mr-1 mb-1">
                    {/* @ts-ignore */}
                    <Tag color="red" classes="m-0">{skills.base[skill]}</Tag>
                  </li>
                ))}
                {Object.keys(skills.general).map((skill, index) => (
                  <li key={index} className="mr-1 mb-1">
                    {/* @ts-ignore */}
                    <Tag color="yellow" classes="m-0">{skills.general[skill]}</Tag>
                  </li>
                ))}
                {Object.keys(skills.front).map((skill, index) => (
                  <li key={index} className="mr-1 mb-1">
                    {/* @ts-ignore */}
                    <Tag color="green" classes="m-0">{skills.front[skill]}</Tag>
                  </li>
                ))}
                {Object.keys(skills.back).map((skill, index) => (
                  <li key={index} className="mr-1 mb-1">
                    {/* @ts-ignore */}
                    <Tag color="blue" classes="m-0">{skills.back[skill]}</Tag>
                  </li>
                ))}
                {Object.keys(skills.dbs).map((skill, index) => (
                  <li key={index} className="mr-1 mb-1">
                    {/* @ts-ignore */}
                    <Tag color="purple" classes="m-0">{skills.dbs[skill]}</Tag>
                  </li>
                ))}
                {Object.keys(skills.other).map((skill, index) => (
                  <li key={index} className="mr-1 mb-1">
                    {/* @ts-ignore */}
                    <Tag color="black" classes="m-0">{skills.other[skill]}</Tag>
                  </li>
                ))}
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="flex text-2xl font-bold">En cours d'apprentissage</h2>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1 mb-1">
                  <Tag color="green" classes="m-0">{skills.learning.vue}</Tag>
                </li>
                <li className="mr-1 mb-1">
                  <Tag color="green" classes="m-0">{skills.learning.svelte}</Tag>
                </li>
                <li className="mr-1 mb-1">
                  <Tag color="green" classes="m-0">{skills.learning.bun}</Tag>
                </li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold">Langues</h2>
              <ul className="flex flex-col space-y-1 ml-4 mt-2 list-disc">
                <li className="-flex">
                  <span className="mr-2">Français</span>
                  <Tag color='green'>C2</Tag>
                </li>
                <li className="-flex">
                  <span className="mr-2">Anglais</span>
                  <Tag color="blue" classes="inline-block mr-1 space-x-1">
                    <>
                      <span>Lu/écrit</span>
                      <span>B2</span>
                    </>
                  </Tag>
                  <Tag color="yellow" classes="inline-block mr-1 space-x-1">
                    <>
                      <span>Parlé</span>
                      <span>B1</span>
                    </>
                  </Tag>
                </li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold">Passions</h2>
              <ul className="ml-4 mt-2 list-disc">
                <li>Sports : escalade, trail, VTT, randonnée, snowboard, apnée, kayak</li>
                <li>Nouvelles technologies</li>
                <li>Musique</li>
                <li>Jeux (vidéos, de société)</li>
                <li>Écologie</li>
                <li>Gastronomie et cuisine</li>
                <li>Voyage</li>
              </ul>
            </section>
          </div>

          <div className="md:mt-10 md:w-4/6">
            <section>
              <Separator classes="md:hidden"/>
              <h2 className="text-2xl pb-1 font-bold">Résumé</h2>
              <p className="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita delectus labore enim in minus quod vero dignissimos
                et, ratione obcaecati quis maiores? Voluptatem, natus
                cupiditate perferendis omnis ex hic incidunt! Earum dolore
                cupiditate sed et maxime distinctio iure fugiat aspernatur at
                veniam laudantium eveniet corporis dicta reiciendis quod
                consequatur, labore perferendis dolorum velit quibusdam minus
                iste dolorem! Officiis, obcaecati maxime
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl mt-4- font-bold">Expérience professionnelle</h2>

              <ul className="mt-4">
                <li className="">
                  <span className="flex justify-between items-center">
                    <a
                      href="https://www.linkedin.com/company/maestro-corporation/"
                      target="_blank"
                      className="mr-4 text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">Maestro Corporation</strong>
                    </a>
                    <span className="space-x-1 text-md font-semibold">
                      <span>11/2013</span>
                      <span>-</span>
                      <span>06/2023</span>
                    </span>
                  </span>
                  <span className="flex justify-between items-center mt-1 space-x-6 text-md">
                    <span className="font-semibold">Full-Stack JS Developer</span>
                    <span>Toulouse, France</span>
                  </span>
                  <p className="mt-1 text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus labore enim in minus quod vero dignissimos et, ratione obcaecati quis maiores?
                  </p>
                  <div className="flex flex-wrap mt-1">
                    <Tag color="red" classes="mr-1 mb-1">{skills.base.js}</Tag>
                    <Tag color="red" classes="mr-1 mb-1">{skills.base.ts}</Tag>
                    <Tag color="green" classes="mr-1 mb-1">{skills.front.react}</Tag>
                    <Tag color="green" classes="mr-1 mb-1">{skills.front.next}</Tag>
                    <Tag color="blue" classes="mr-1 mb-1">{skills.back.express}</Tag>
                    <Tag color="blue" classes="mr-1 mb-1">{skills.back.koa}</Tag>
                    <Tag color="blue" classes="mr-1 mb-1">{skills.dbs.mongo}</Tag>
                    <Tag color="purple" classes="mr-1 mb-1">{skills.dbs.postgre}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.other.docker}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.other.linux}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.other.rabbitmq}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.other.jenkins}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.other.sentry}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.other.aws}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.other.gcloud}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{`${skills.other.slack} (+API)`}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.other.notion}</Tag>
                  </div>
                </li>

                <li className="mt-4">
                  <span className="flex justify-between items-center">
                    <a
                      href="https://www.netexplorer.fr/en/"
                      target="_blank"
                      className="mr-4 text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">NetExplorer</strong>
                    </a>
                    <span className="space-x-1 font-semibold">
                      <span>06/2012</span>
                      <span>-</span>
                      <span>08/2014</span>
                      <span>[stage]</span>
                    </span>
                  </span>
                  <span className="flex justify-between items-center mt-1 space-x-6 text-md">
                    <span className="font-semibold">Junior Web Developer</span>
                    <span>Colomiers, France</span>
                  </span>
                  <p className="mt-1">
                    L'objectif était de régler les problèmes de style pour le naviguateur Internet Explorer, et ce jusqu'à sa version 7.
                  </p>
                  <div className="flex flex-wrap mt-1">
                    <Tag color="green" classes="mr-1 mb-1">{skills.front.ie}</Tag>
                    <Tag color="green" classes="mr-1 mb-1">{skills.front.css}</Tag>
                  </div>
                </li>

                <li className="mt-4">
                  <span className="flex justify-between items-center">
                    <a
                      href="https://www.univers-cites.fr/2013/04/26/restez-connectes-avec-lappli-neventy/"
                      target="_blank"
                      className="mr-4 text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">Neventy</strong>
                    </a>
                    <span className="space-x-1 font-semibold">
                      <span>01/2013</span>
                      <span>-</span>
                      <span>06/2013</span>
                      <span>[stage]</span>
                    </span>
                  </span>
                  <span className="flex justify-between items-center mt-1 space-x-6 text-md">
                    <span className="font-semibold">Front-End Developer</span>
                    <span>Toulouse, France</span>
                  </span>
                  <p className="mt-1">
                    Développement de fonctionnalités sur un site web permettant aux utilisateurs de trouver facilement des évènements proches d'eux.
                  </p>
                  <div className="flex flex-wrap mt-1">
                    <Tag color="red" classes="mr-1 mb-1">{skills.base.js}</Tag>
                    <Tag color="green" classes="mr-1 mb-1">{skills.front.jquery}</Tag>
                    <Tag color="green" classes="mr-1 mb-1">{skills.front.css}</Tag>
                  </div>
                </li>

                <li className="mt-4">
                  <p className="flex justify-between items-center">
                    <a
                      href="https://www.linkedin.com/company/actemiumtoulouserobotique&automation/"
                      target="_blank"
                      className="mr-4 text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">Actemium Robotique & Automation</strong>
                    </a>
                    <span className="space-x-1 font-semibold">
                      <span>01/2012</span>
                      <span>-</span>
                      <span>09/2012</span>
                      <span>[stage]</span>
                    </span>
                  </p>
                  <p className="flex justify-between items-center mt-1 space-x-6 text-md">
                    <span className="font-semibold">System Developer</span>
                    <span>Toulouse, France</span>
                  </p>
                  <p className="mt-1">
                    Stage de fin de DUT, avec pour objectif le portage d'une application de gestion de machines virtuelles en Python depuis une base en VBA, via du parsing de fichiers XML et de commandes DOS.
                  </p>
                  <div className="flex flex-wrap mt-1">
                    <Tag color="red" classes="mr-1 mb-1">{skills.miscellaneous.vba}</Tag>
                    <Tag color="red" classes="mr-1 mb-1">{skills.miscellaneous.python}</Tag>
                    <Tag color="red" classes="mr-1 mb-1">{skills.miscellaneous.xml}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.miscellaneous.virtualbox}</Tag>
                  </div>
                </li>

                <li className="mt-4">
                  <span className="flex justify-between items-center">
                    <a
                      href="https://www.linkedin.com/company/utilib/"
                      target="_blank"
                      className="mr-4 text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">Utilib</strong>
                    </a>
                    <span className="space-x-1 font-semibold">
                      <span>01/2012</span>
                      <span>-</span>
                      <span>03/2012</span>
                      <span>[stage]</span>
                    </span>
                  </span>
                  <span className="flex justify-between items-center mt-1 text-md">
                    <span className="font-semibold">Full-Stack JS Developer</span>
                    <span>Labège, France</span>
                  </span>
                  <p className="mt-1">
                    Développement de fonctionnalités sur un site web permettant le prêt d'objets entre voisins.
                  </p>
                  <div className="mt-1">
                    <Tag color="red" classes="mr-1 mb-1">{skills.base.js}</Tag>
                    <Tag color="green" classes="mr-1 mb-1">{skills.front.jquery}</Tag>
                    <Tag color="blue" classes="mr-1 mb-1">{skills.back.express}</Tag>
                    <Tag color="blue" classes="mr-1 mb-1">{skills.dbs.mongo}</Tag>
                    <Tag color="black" classes="mr-1 mb-1">{skills.miscellaneous.trello}</Tag>
                  </div>
                </li>

              </ul>
            </section>

            <Separator classes="mt-6"/>

            <section>
              <h2 className="text-2xl font-bold">Éducation</h2>
              <ul className="">
                <li className="mt-4">
                  <p className="flex justify-between">
                    <a
                      href="https://www.supinfo.com/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">SUPINFO</strong>
                    </a>
                    <span className="text-md font-semibold">2012 - 2015</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-md font-semibold">Master 2</span>
                    <span>Toulouse, France</span>
                  </p>
                </li>

                <li className="my-4">
                  <p className="flex justify-between">
                    <a
                      href="https://www.iut-blagnac.fr/fr/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">IUT de Blagnac</strong>
                    </a>
                    <span className="text-md font-semibold">2010-2012</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-md font-semibold">DUT Informatique</span>
                    <span>Blagnac, France</span>
                  </p>
                </li>
              </ul>
            </section>
          </div>

        </div>

      </div>
    </main>
  )
}
