/* eslint-disable react/no-unescaped-entities */
import { useCallback, useState } from 'react'
import { FaLinkedin, FaSun } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GiSmartphone } from 'react-icons/gi'
import { MdDarkMode } from 'react-icons/md'
import { SiMaildotru } from 'react-icons/si'
import clsx from 'clsx'

import Separator from 'components/Separator'
import Tag from 'components/Tag'

const links = {
  email: 'maxime.duhamel@protonmail.com',
  linkedin: 'https://www.linkedin.com/in/duhamel-maxime',
  maps: 'https://www.google.com/maps/place/36200+Argenton-sur-Creuse/@46.5913388,1.4776759,13z/data=!4m6!3m5!1s0x47fb9156a0befe77:0x3326f0415f498d61!8m2!3d46.5889103!4d1.5190434!16zL20vMDg5aHAw?entry=ttu&',
}

const skills = {
  // base
  js: 'JavaScript',
  ts: 'TypeScript',
  vba: 'VBA',
  xml: 'XML',
  html: 'HTML',
  css: 'CSS',
  python: 'Python',
  bash: 'Bash',
  // general
  agile: 'Agile',
  apis: 'APIs',
  cicd: 'CI/CD',
  uiux: 'UI/UX',
  // front
  angular: 'Angular',
  react: 'React',
  next: 'Next',
  vue: 'Vue',
  svelte: 'Svelte',
  jquery: 'JQuery',
  // sass: 'Sass',
  tailwind: 'TailwindCSS',
  babel: 'Babel',
  gulp: 'Gulp',
  webpack: 'Webpack',
  // back
  node: 'Node',
  bun: 'Bun',
  express: 'Express',
  koa: 'Koa',
  rabbitmq: 'RabbitMQ',
  // dbs
  postgre: 'PostgreSQL (Sequelize)',
  mongo: 'MongoDB (Mongoose)',
  // env
  mac: 'Mac',
  linux: 'Linux',
  windows: 'Windows',
  docker: 'Docker',
  virtualbox: 'VirtualBox',
  // tools
  aws: 'AWS',
  gcloud: 'G-Cloud',
  git: 'Git',
  gitlabcicd: 'GitLab CI/CD',
  jenkins: 'Jenkins',
  sentry: 'Sentry',
  metabase: 'Metabase',
  // com/orga
  slack: 'Slack',
  notion: 'Notion',
  trello: 'Trello',
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
              {/* <button
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
              </button> */}
              <div
                className="h-40 w-40 bg-cover bg-no-repeat rounded-full border-2 border-gray-700"
                style={{
                  backgroundImage: `url('picture-2.jpg')`,
                  backgroundPositionY: '16%',
                }}
              />
            </div>

            <div className="flex flex-col space-y-1 3xs:mt-4">
              <h1 className="text-2xl xs:text-5xl md:text-6xl font-extrabold">Duhamel Maxime</h1>
              <h2 className="text-2xl">Full-Stack JS Developer</h2>
              <h2 className="text-xl">8 ans d'expérience</h2>
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
                  <a href="tel:+33743621710" className="text-purple-600 hover:underline dark:text-purple-300">
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
                    Argenton-sur-Creuse, France
                  </a>
                </li>
              </ul>
            </section>

            <Separator />

            <section className="bg-red">
              <h2 className="text-2xl font-bold">Compétences</h2>
              <div className="flex flex-wrap space-x-reverse mt-2 space-x-1 space-y-1">
                <Tag color="red" classes="mt-1 mr-1">{skills.js}</Tag>
                <Tag color="red">{skills.ts}</Tag>
                <Tag color="red">{skills.bash}</Tag>
                
                <Tag color="yellow">{skills.agile}</Tag>
                <Tag color="yellow">{skills.cicd}</Tag>
                <Tag color="yellow">{skills.uiux}</Tag>
                <Tag color="yellow">{skills.apis}</Tag>

                <Tag color="green">{skills.react}</Tag>
                <Tag color="green">{skills.next}</Tag>
                <Tag color="green">{skills.jquery}</Tag>
                <Tag color="green">{skills.html}</Tag>
                <Tag color="green">{skills.css}</Tag>
                <Tag color="green">{skills.tailwind}</Tag>
                <Tag color="green">{skills.babel}</Tag>
                <Tag color="green">{skills.gulp}</Tag>
                <Tag color="green">{skills.webpack}</Tag>
                
                <Tag color="blue">{skills.node}</Tag>
                <Tag color="blue">{skills.express}</Tag>
                <Tag color="blue">{skills.koa}</Tag>
                <Tag color="blue">{skills.rabbitmq}</Tag>
                
                <Tag color="purple">{skills.mongo}</Tag>
                <Tag color="purple">{skills.postgre}</Tag>
                
                <Tag color="black">{skills.mac}</Tag>
                <Tag color="black">{skills.linux}</Tag>
                <Tag color="black">{skills.docker}</Tag>

                <Tag color="gray">{skills.aws}</Tag>
                <Tag color="gray">{skills.gcloud}</Tag>
                <Tag color="gray">{skills.git}</Tag>
                <Tag color="gray">{skills.gitlabcicd}</Tag>
                <Tag color="gray">{skills.jenkins}</Tag>
                <Tag color="gray">{skills.sentry}</Tag>
                <Tag color="gray">{skills.metabase}</Tag>

                <Tag color="amber">{skills.trello}</Tag>
                <Tag color="amber">{skills.slack}</Tag>
                <Tag color="amber">{skills.notion}</Tag>
              </div>

              <h2 className="mt-4 text-2xl font-bold">En cours d'apprentissage</h2>
              <div className="flex flex-wrap mt-2 space-x-1 space-y-1 space-x-reverse">
                <Tag color="red" classes="mt-1 mr-1">{skills.python}</Tag>
                <Tag color="green">{skills.vue}</Tag>
                <Tag color="green">{skills.svelte}</Tag>
                <Tag color="blue">{skills.bun}</Tag>
              </div>
            </section>

            {/* <Separator />

            <section>
              <h2 className="text-2xl font-bold">En cours d'apprentissage</h2>
              <div className="flex flex-wrap mt-2 space-x-1 space-y-1 space-x-reverse">
                <Tag color="red" classes="mt-1 mr-1">{skills.python}</Tag>
                <Tag color="green">{skills.vue}</Tag>
                <Tag color="green">{skills.svelte}</Tag>
                <Tag color="blue">{skills.bun}</Tag>
              </div>
            </section> */}

            <Separator />

            <section>
              <h2 className="text-2xl font-bold">Qualités</h2>
              <ul className="flex flex-col space-y-1 ml-4 mt-2 list-disc">
                <li className="">Persévérant et passionné</li>
                <li className="">Attentif et à l'écoute</li>
                <li className="">Bon esprit d'équipe</li>
                <li className="">Aime les challenges</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold">Langues</h2>
              <ul className="flex flex-col space-y-1 ml-4 mt-2 list-disc">
                <li>
                  <span>Français : C1</span>
                  {/* <span className="mr-2">Français</span>
                  <Tag color='green'>C2</Tag> */}
                </li>
                <li>
                  <span>Anglais : Lu/écrit B2 | Parlé B1</span>
                  {/* <Tag color="blue" classes="inline-block mr-1 space-x-1">
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
                  </Tag> */}
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
              <h2 className="text-2xl font-bold">Résumé</h2>
              <p className="flex flex-col mt-2 text-justify">
                <span>Développeur JS Full-Stack avec plus de 8 ans d'expérience dans la conception, le développement et la maintenance d'applications web.</span>
                <span>Expert en JavaScript, aussi bien en front-end avec React/Next, qu'en back-end avec Node/Express/Koa, ainsi qu'en structuration/stylisation de pages web via HTML et CSS.</span>
                <span>
                  Possédant des connaissances approfondies en matière 
                    de conception et gestion de bases de données (MongoDB, PostgreSQL), 
                    de versioning avec Git et d'approche DevOps (Jenkins, GitLab CI/CD),
                    de configuration et manipulation d'environnement Linux sans GUI (Debian, Bash),
                    d'orchestration d'applications conteneurisées (Docker),
                    d'échanges asynchrones entre applications distribuées via système de messagerie (RabbitMQ).
                </span>
                <span>Capable de gérer des projets de bout en bout et de résoudre efficacement des problèmes complexes.</span>
                <span>Passionné par l'adoption de nouvelles technologies et la recherche de solutions innovantes pour répondre aux besoins des clients.</span>
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl mt-4- font-bold">Expérience professionnelle</h2>

              <ul>
                <li className="mt-4">
                  <div className="flex justify-between">
                     <span className="flex flex-col justify-start space-y-1">
                      <a
                        href="https://www.myfrenchstartup.com/fr/startup-france/181025/maestro_corporation"
                        target="_blank"
                        className="text-purple-600 hover:underline dark:text-purple-300"
                      >
                        <strong className="text-xl">Maestro Corporation</strong>
                      </a>
                      <span className="font-semibold">Full-Stack JS Developer</span>
                    </span>
                    <span className="flex flex-col items-end space-y-1 text-md text-right">
                      <span className="flex items-center font-semibold">
                        <span>[CDI] 11/2015 - 06/2023</span>
                      </span>
                      <span>Toulouse, France</span>
                    </span>
                  </div>
                  <p className="mt-1 text-justify">
                    
                  </p>
                  <div className="flex flex-wrap mt-2 space-x-1 space-y-1 space-x-reverse">
                    <Tag color="red" classes="mt-1 mr-1">{skills.js}</Tag>
                    <Tag color="red">{skills.ts}</Tag>
                    <Tag color="green">{skills.angular}</Tag>
                    <Tag color="green">{skills.react}</Tag>
                    <Tag color="green">{skills.next}</Tag>
                    <Tag color="blue">{skills.express}</Tag>
                    <Tag color="blue">{skills.koa}</Tag>
                    <Tag color="purple">{skills.mongo}</Tag>
                    <Tag color="purple">{skills.postgre}</Tag>
                    <Tag color="black">{skills.mac}</Tag>
                    <Tag color="black">{skills.linux}</Tag>
                    <Tag color="black">{skills.docker}</Tag>
                    <Tag color="gray">{skills.rabbitmq}</Tag>
                    <Tag color="gray">{skills.aws}</Tag>
                    <Tag color="gray">{skills.gcloud}</Tag>
                    <Tag color="gray">{skills.jenkins}</Tag>
                    <Tag color="gray">{skills.gitlabcicd}</Tag>
                    <Tag color="gray">{skills.sentry}</Tag>
                    <Tag color="gray">{skills.metabase}</Tag>
                    <Tag color="amber">{`${skills.slack} (+API)`}</Tag>
                    <Tag color="amber">{skills.notion}</Tag>
                  </div>
                </li>

                <li className="mt-6">
                  <div className="flex justify-between">
                    <span className="flex flex-col justify-start space-y-1">
                      <a
                        href="https://www.myfrenchstartup.com/fr/startup-france/181025/maestro_corporation"
                        target="_blank"
                        className="text-purple-600 hover:underline dark:text-purple-300"
                      >
                        <strong className="text-xl">Maestro corporation</strong>
                      </a>
                      <span className="font-semibold">Full-Stack JS Developer</span>
                    </span>
                    <span className="flex flex-col items-end space-y-1 text-md text-right">
                      <span className="flex items-center space-x-2 font-semibold">
                        <span>[stage]</span>
                        <div className="flex flex-col">
                          <span>04/2015 - 10/2015</span>
                          <span>12/2014 - 03/2015</span>
                        </div>
                      </span>
                      <span>Toulouse, France</span>
                    </span>
                  </div>
                  <p className="flex flex-col mt-1 text-justify">
                    <span>Conception et développement d'un outil de gestion de stocks pour une jeune entreprise vendant des places de concerts.</span>
                    <span>L'objectif était de remplacer l'utilisation de plusieurs google sheets afin d'avoir une correlation claire entre les places et les ventes, permettant un aperçu rapide et sûr de l'état des stocks.</span>
                    <span>N'ayant pas de designer, l'interface en AngularJS s'est affinée au fur et à mesure des besoins, en fonctionnement agile, via des échanges constants avec l'équipe opérationnelle.</span>
                    <span>La partie server en NodeJS/ExpressJS s'est développée conjointement au système de détection automatique d'évènements sur le web, réalisé par un autre developper, avec l'élaboration d'une base de données MongoDB commune.</span>
                    <span>Côté environnement, toutes les parties fonctionnaient sous Linux au sein de Dockers, orchestrés via l'outil d'automatisation server Jenkins, certains avec des configurations particulières comme par exemple, pour ma part, des outils de parsing PDF afin d'assurer la cohérence entre les données saisies par les utilisateurs et les informations extraites des places.</span>
                  </p>
                  <div className="flex flex-wrap mt-2 space-x-1 space-y-1 space-x-reverse">
                    <Tag color="red" classes="mt-1 mr-1">{skills.js}</Tag>
                    <Tag color="green">{skills.angular}</Tag>
                    <Tag color="blue">{skills.express}</Tag>
                    <Tag color="purple">{skills.mongo}</Tag>
                    <Tag color="black">{skills.mac}</Tag>
                    <Tag color="black">{skills.linux}</Tag>
                    <Tag color="black">{skills.docker}</Tag>
                    <Tag color="gray">{skills.jenkins}</Tag>
                    <Tag color="amber">{skills.trello}</Tag>
                  </div>
                </li>

                <li className="mt-6">
                  <div className="flex justify-between">
                     <span className="flex flex-col justify-start space-y-1">
                      <a
                        href="https://www.univers-cites.fr/2013/04/26/restez-connectes-avec-lappli-neventy/"
                        target="_blank"
                        className="text-purple-600 hover:underline dark:text-purple-300"
                      >
                        <strong className="text-xl">Neventy</strong>
                      </a>
                      <span className="font-semibold">Front-End Developer</span>
                    </span>
                    <span className="flex flex-col items-end space-y-1 text-md text-right">
                      <span className="flex items-center font-semibold">
                        <span>[stage] 07/2014 - 10/2014</span>
                      </span>
                      <span>Toulouse, France</span>
                    </span>
                  </div>
                  <p className="mt-1 text-justify">
                    Développement de fonctionnalités sur un site web permettant aux utilisateurs de trouver facilement des évènements proches d'eux.
                    Travail en équipe avec le designer (intégration de mockups) et le developper back-end (contacts avec l'API).
                  </p>
                  <div className="flex flex-wrap mt-2 space-x-1 space-y-1 space-x-reverse">
                    <Tag color="red" classes="mt-1 mr-1">{skills.js}</Tag>
                    <Tag color="green">{skills.jquery}</Tag>
                    <Tag color="green">{skills.css}</Tag>
                    <Tag color="black">{skills.mac}</Tag>
                    <Tag color="amber">{skills.trello}</Tag>
                  </div>
                </li>

                <li className="mt-6">
                  <div className="flex justify-between">
                     <span className="flex flex-col justify-start space-y-1">
                      <a
                        href="https://www.linkedin.com/company/utilib/"
                        target="_blank"
                        className="text-purple-600 hover:underline dark:text-purple-300"
                      >
                        <strong className="text-xl">Utilib</strong>
                      </a>
                      <span className="font-semibold">Full-Stack JS Developer</span>
                    </span>
                    <span className="flex flex-col items-end space-y-1 text-md text-right">
                      <span className="flex items-center font-semibold">
                        <span>[stage] 03/2014 - 06/2014</span>
                      </span>
                      <span>Labège, France</span>
                    </span>
                  </div>
                  <p className="mt-1 text-justify">
                    Développement de fonctionnalités sur un site web permettant le prêt d'objets entre voisins, incluant l'intégration de mockups ainsi que l'implémentation serveur avec gestion de la base de données.
                  </p>
                  <div className="flex flex-wrap mt-2 space-x-1 space-y-1 space-x-reverse">
                    <Tag color="red" classes="mt-1 mr-1">{skills.js}</Tag>
                    <Tag color="green">{skills.jquery}</Tag>
                    <Tag color="blue">{skills.express}</Tag>
                    <Tag color="purple">{skills.mongo}</Tag>
                    <Tag color="black">{skills.mac}</Tag>
                    <Tag color="amber">{skills.trello}</Tag>
                  </div>
                </li>

                <li className="mt-6">
                  <div className="flex justify-between">
                     <span className="flex flex-col justify-start space-y-1">
                      <a
                        href="https://www.netexplorer.fr"
                        target="_blank"
                        className="text-purple-600 hover:underline dark:text-purple-300"
                      >
                        <strong className="text-xl">NetExplorer</strong>
                      </a>
                      <span className="font-semibold">Junior Web Developer</span>
                    </span>
                    <span className="flex flex-col items-end space-y-1 text-md text-right">
                      <span className="flex items-center font-semibold">
                        <span>[stage] 11/2012 - 02/2013</span>
                      </span>
                      <span>Colomiers, France</span>
                    </span>
                  </div>
                  <p className="mt-1 text-justify">
                    Résolution des problèmes de style liés aux spécificités de certains navigateurs (eg: Internet Explorer jusqu'en version 7), pour l'interface web d'une solution de partage/stockage de fichiers en ligne.
                  </p>
                  <div className="flex flex-wrap mt-2 space-x-1 space-y-1 space-x-reverse">
                    <Tag color="green" classes="mt-1 mr-1">{skills.html}</Tag>
                    <Tag color="green">{skills.css}</Tag>
                    <Tag color="black">{skills.windows}</Tag>
                  </div>
                </li>

                <li className="mt-6">
                  <div className="flex justify-between">
                     <span className="flex flex-col justify-start space-y-1">
                      <a
                        href="https://www.linkedin.com/company/actemiumtoulouserobotique&automation/"
                        target="_blank"
                        className="text-purple-600 hover:underline dark:text-purple-300"
                      >
                        <strong className="text-xl">Actemium Robotique & Automation</strong>
                      </a>
                      <span className="font-semibold">System Developer</span>
                    </span>
                    <span className="flex flex-col items-end space-y-1 text-md text-right">
                      <span className="flex items-center font-semibold">
                        <span>[stage] 04/2012 - 06/2012</span>
                      </span>
                      <span>Toulouse, France</span>
                    </span>
                  </div>
                  <p className="mt-1">
                    Stage de fin de DUT, avec pour objectif le portage d'une application de gestion de machines virtuelles en Python depuis une base en VBA, via du parsing de fichiers XML et de commandes DOS.
                  </p>
                  <div className="flex flex-wrap mt-2 space-x-1 space-y-1 space-x-reverse">
                    <Tag color="red" classes="mt-1 mr-1">{skills.vba}</Tag>
                    <Tag color="red">{skills.python}</Tag>
                    <Tag color="red">{skills.xml}</Tag>
                    <Tag color="black">{skills.windows}</Tag>
                    <Tag color="black">{skills.virtualbox}</Tag>
                  </div>
                </li>

              </ul>
            </section>

            <Separator classes="mt-6"/>

            <section>
              <h2 className="text-2xl font-bold">Éducation</h2>
              <ul>
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
                  <p className="flex justify-between mt-1">
                    {/* <span className="text-md font-semibold">Master Informatique</span> */}
                    <span className="text-md font-semibold">Bachelor of Science with honours</span>
                    <span className="text-end">Toulouse, France</span>
                  </p>
                </li>

                <li className="mt-6">
                  <p className="flex justify-between">
                    <a
                      href="https://www.iut-blagnac.fr/fr/"
                      target="_blank"
                      className="text-purple-600 hover:underline dark:text-purple-300"
                    >
                      <strong className="text-xl">IUT de Blagnac</strong>
                    </a>
                    <span className="text-right text-md font-semibold">2010 - 2012</span>
                  </p>
                  <p className="flex justify-between mt-1">
                    <span className="text-right text-md font-semibold">DUT Informatique</span>
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
