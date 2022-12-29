import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Block from './Block';
import Content from './Content';
import { FaStar, FaRegStar, FaRegEnvelope, FaLinkedinIn, FaGithub, FaPhoneAlt, FaRegSave } from 'react-icons/fa';
import MediaQuery from 'react-responsive'

function App() {
  const [count, setCount] = useState(0)

  const renderSkillLevel = (level: number, skillName: string) => {
    let skillArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < level) {
        skillArray.push(true)
      } else {
        skillArray.push(false)
      }
    }


    return (
      <div>
        <div className="flex justify-center items-center gap-x-2">{
          skillArray.map((skill, index) => {
            if (skill) {
              return <FaStar key={index} />
            } else {
              return <FaRegStar key={index} />
            }
          })
        }
        </div>
        <div>
          {skillName}
        </div>
      </div>
    )
  }

  const renderFirstPage = () => {
    return (
      <>
        <Block colorNumber={2} col={4} row={2}>
          <Content>
            <div className="text-xl font-bold">Levente Hegedüs</div>
            <div>Senior software engineer</div>
          </Content>
        </Block>
        <Block colorNumber={2} col={4} row={2}>
        </Block>
        <Block colorNumber={2} col={3} row={6}>
        </Block>
        <Block colorNumber={3} col={2} row={4}>
          <img src="/hl.jpg" className="object-top object-cover h-[400px] md:h-full grayscale w-full" />
        </Block>
        <Block colorNumber={3} col={3} row={6}>
          <Content>
            <div>I am Levente Hegedüs, a frontend developer from Budapest born in 1992. I've been working as a frontend developer for 5 years using ReactJS as my main strength for 4 years.</div>
            <div>Since 2016 I have worked for small startup companies where I learned a lot about responsibility, how to work independently and to solve problems on my own due to the small development groups. Most of the time the development teams were maximum of 5 or less developers.</div>
            <div>My future plans include gaining more experience with backend development and UI/UX planning, too.</div>
          </Content>
        </Block>
        <Block colorNumber={3} col={2} row={2}></Block>
      </>
    )
  }

  const renderSecondPage = () => {
    return (
      <>
        <Block colorNumber={1} col={4} row={4} >
          <Content>
            <div className="font-bold">HTEC Group</div>
            <div>Budapest, HU / (2022 - )</div>
            <div>Senior software engineer</div>
            <div>HTEC Group is a global consulting, software engineering, and digital product development company that helps global disrupters engineer a better future. In our project we rewrite, refactor and evolve an old VueJS application into a new ReactJS application.</div>
          </Content>
        </Block>
        <Block col={4} row={4} >
          <ParallaxBanner
            layers={[{ image: '/gf2.jpeg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <Block col={4} row={4} >
          <ParallaxBanner
            layers={[{ image: '/gf3.jpeg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <Block colorNumber={7} col={4} row={4} >
          <Content>
            <div className="font-bold">Greenfox Academy</div>
            <div>Budapest, HU / (2021 - )</div>
            <div>Mentor</div>
            <div>I had the great opportunity to mentor and teach talented apprentices in a JS Fullstack bootcamp. During the 11 month course the apprentices learned the basics of Javascript, NodeJS, ReactJS, SQL, HTML, CSS and stepped on their path to get their first job as a software engineer.</div>
          </Content>
        </Block>
      </>
    )
  }

  const renderThirdPage = () => {
    return (
      <>
        <Block colorNumber={3} col={2} row={4}>
          <Content>
            <div className="font-bold">Statzup</div>
            <div>Budapest, HU / (2016 - 2021)</div>
            <div>Senior Frontend developer</div>
          </Content>
        </Block>
        <Block colorNumber={2} col={2} row={4}>
          <Content>
            <div className="font-bold">Statzup</div>
            <div><i>Consolidity (2019 - 2021)</i></div>
            <div>Consolidity is a smart back-office system which helps with administration processes based on automatization.
The frontend was written in ReactJS (with React Hooks and ReduxJS) and in a small part of the project, where we generated PDFs, VueJS was used.</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <Content>
            <div className="font-bold">Statzup</div>
            <div><i>League of Managers (2016 - 2020)</i></div>
            <div>League of Managers is a free daily fantasy football game developed for the Hungarian gambling association. During the World Cup 2018 thousands of users played with the game in Hungary.
That was my first ReactJS project. We also used ReduxJS as a state container.</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'it_2.jpg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <MediaQuery minWidth={768}>
          <Block colorNumber={3} col={2} row={4}>
            <ParallaxBanner
              layers={[{ image: 'it_3.jpg', speed: -10 }]}
              className="h-full grayscale min-h-[200px]"
            />
          </Block>
          <Block colorNumber={1} col={2} row={4}>
            <Content>
              <div className="font-bold">Statzup</div>
              <div><i>Play The Six (2016 - 2018)</i></div>
              <div>Play The Six was the older version of League of Managers. It was available only in the USA and Latin America.
This was my first project at Statzup and the frontend was written in EmberJS.</div>
            </Content>
          </Block>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Block colorNumber={1} col={2} row={4}>
            <Content>
              <div className="font-bold">Statzup</div>
              <div><i>Play The Six (2016 - 2018)</i></div>
              <div>Play The Six was the older version of League of Managers. It was available only in the USA and Latin America.
        This was my first project at Statzup and the frontend was written in EmberJS.</div>
            </Content>
          </Block>
          <Block colorNumber={3} col={2} row={4}>
            <ParallaxBanner
              layers={[{ image: 'it_3.jpg', speed: -10 }]}
              className="h-full grayscale min-h-[200px]"
            />
          </Block>
        </MediaQuery>
        <Block colorNumber={2} col={2} row={4}>
          <Content>
            <div className="font-bold">Statzup</div>
            <div><i>Footy Cards (2016 - 2017)</i></div>
            <div>Footy Card was a football trading card mobile application. The whole frontend was written in React Native.</div>
          </Content>
        </Block>
        <Block colorNumber={3} col={2} row={4}>
          <Content>
            <div className="font-bold">Statzup</div>
            <div><i>oktober31.hu (2019)</i></div>
            <div>Oktober31.hu is a bank client-authorisation site with an organogram creator. It is a sideproject of the Consolidity project. The frontend was written in ReactJS (with ReduxJS) and a small part of the project, where we generated PDFs, VueJS was used.</div>
          </Content>
        </Block>
      </>
    )
  }

  const render4thPage = () => {
    return (
      <>
        <Block colorNumber={5} col={4} row={2}>
          <Content>
            <div className="font-bold">Raiffeisen</div>
            <div>Budapest, HU / (2015 - 2016)</div>
            <div>Junior Java developer</div>
            <div>I worked on many small applets. These projects were written in IceFaces which is a JSF Framework.</div>
          </Content>
        </Block>
        <Block colorNumber={7} col={4} row={2}></Block>
        <Block col={4} row={4}>
          <ParallaxBanner
            layers={[{ image: 'it_1.jpg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <Block colorNumber={4} col={4} row={2}>
          <Content>
            <div className="font-bold">Computrend</div>
            <div>Budapest, HU / (2014 - 2015)</div>
            <div>Junior Java tester</div>
            <div>I tested Java projects created by the development team.</div>
          </Content>
        </Block>
        <Block col={4} row={4}>
          <ParallaxBanner
            layers={[{ image: 'it_4.jpg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <Block colorNumber={5} col={4} row={2}>
          <Content>
            <div className="font-bold">University of Szeged</div>
            <div>Szeged, HU / (2014)</div>
            <div>Junior Java developer</div>
            <div>I was part of the Research Group on Artifical Intelligence at the University.</div>
          </Content>
        </Block>
      </>
    )
  }

  const render5thPage = () => {
    return (
      <>
        <Block colorNumber={1} col={1} row={1}>
        </Block>
        <Block colorNumber={2} col={6} row={1}></Block>
        <Block colorNumber={3} col={1} row={1}></Block>
        <Block colorNumber={4} col={1} row={6}></Block>
        <Block colorNumber={5} col={3} row={3}>
          <Content>
            <div><b><a href="https://hypeandhyper.com/" target="_blank">Hype & Hyper (2022)</a></b></div>
            <div>Hype and Hyper is Central and Eastern European magazine on strategy, trends in design, technology and urban life. We had to rewrite, implement a new design and transfer their old Wordpress site to Ghost CMS.</div>
          </Content>
        </Block>
        <Block col={3} row={3}>
          <ParallaxBanner
            layers={[{ image: 'hh.jpeg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <Block colorNumber={6} col={1} row={6}></Block>
        <MediaQuery minWidth={768}>
          <Block col={3} row={3}>
            <ParallaxBanner
              layers={[{ image: 'ricsardgir.png', speed: -10 }]}
              className="h-full grayscale min-h-[200px]"
            />
          </Block>
          <Block colorNumber={1} col={3} row={3}>
            <Content>
              <div><b><a href="http://ricsardgir.com/" target="_blank">Ricsárdgír (2018 - )</a></b></div>
              <div>Responsive website for my friend's band. It was an exciting experience to create a really funny website, cool design  and also personalized games for them. Almost everything was written from scratch with TailwindCSS and ReactJS.</div>
            </Content>
          </Block>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <Block colorNumber={1} col={3} row={3}>
            <Content>
              <div><b><a href="http://ricsardgir.com/" target="_blank">Ricsárdgír (2018 - )</a></b></div>
              <div>Responsive website for my friend's band. It was an exciting experience to create a really funny website, cool design  and also personalized games for them. Almost everything was written from scratch with TailwindCSS and ReactJS.</div>
            </Content>
          </Block>
          <Block col={3} row={3}>
            <ParallaxBanner
              layers={[{ image: 'ricsardgir.png', speed: -10 }]}
              className="h-full grayscale min-h-[200px]"
            />
          </Block>
        </MediaQuery>
        <Block colorNumber={2} col={1} row={6}></Block>
        <Block colorNumber={5} col={3} row={3}>
          <Content>
            <div><b><a href="https://drpurcsikatalin.hu/" target="_blank">drpurcsikatalin.hu (2020)</a></b></div>
            <div>I created a responsive one pager website for my medical doctor aunt. The site was written from scratch and uses only HTML, CSS and some Javascript. I also did the design and the SEO for the page.</div>
          </Content>
        </Block>
        <Block colorNumber={2} col={3} row={3}>
          <Content>
            <div><b><a href="https://legter.hu/legterkereso-terkep" target="_blank">legter.hu (2020)</a></b></div>
            <div>Interactive map for aviation. Had a chance to get a better knowledge of MapGL and Mapbox.</div>
          </Content>
        </Block>
        <Block colorNumber={4} col={1} row={6}></Block>
        <Block colorNumber={3} col={3} row={3}>
          <Content>
            <div><b>VidUX Face Recognition webapplication (2019)</b></div>
            <div>Webapplication for VidUX company's Face Recognition app. The company required a webapp for their existing application. Me and my project partner was responsible for the UI/UX planning, too. The webapp was written in ReactJS with ReduxJS.</div>
          </Content>
        </Block>
        <Block colorNumber={6} col={3} row={3}>
          <Content>
            <div><b><a href="https://rhnd.io/" target="_blank">rhnd.io (2017)</a></b></div>
            <div>Responsive onepager for RHND. The site was written from scratch and uses only HTML, CSS and some Javascript.</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={1} row={1}></Block>
        <Block colorNumber={2} col={6} row={1}></Block>
        <Block colorNumber={3} col={1} row={1}></Block>
      </>
    )
  }

  const render7thPage = () => {
    return (
      <>
        <Block colorNumber={1} col={2} row={2}>
          <Content>{renderSkillLevel(5, 'ReactJS')}</Content>
        </Block>
        <Block colorNumber={2} col={2} row={2}>
          <Content>{renderSkillLevel(4, 'ReduxJS')}</Content>
        </Block>
        <Block colorNumber={3} col={2} row={2}>
          <Content>{renderSkillLevel(4, 'TypeScript')}</Content>
        </Block>
        <Block colorNumber={4} col={2} row={2}>
          <Content>{renderSkillLevel(5, 'CSS/SCSS')}</Content>
        </Block>
        <Block colorNumber={5} col={2} row={2}>
          <Content>{renderSkillLevel(4, 'TailwindCSS')}</Content>
        </Block>
        <Block colorNumber={6} col={2} row={2}>
          <Content>{renderSkillLevel(3, 'MaterialUI')}</Content>
        </Block>
        <Block colorNumber={7} col={2} row={2}>
          <Content>{renderSkillLevel(5, 'HTML')}</Content>
        </Block>
        <Block colorNumber={1} col={2} row={2}>
          <Content>{renderSkillLevel(5, 'GIT')}</Content>
        </Block>
        <Block colorNumber={2} col={2} row={2}>
          <Content>{renderSkillLevel(3, 'VueJS')}</Content>
        </Block>
        <Block colorNumber={3} col={2} row={2}>
          <Content>{renderSkillLevel(2, 'ReactNative')}</Content>
        </Block>
        <Block colorNumber={4} col={2} row={2}>
          <Content>{renderSkillLevel(3, 'SQL')}</Content>
        </Block>
        <Block colorNumber={5} col={2} row={2}>
          <Content>{renderSkillLevel(2, 'NodeJS')}</Content>
        </Block>
        <Block colorNumber={6} col={1} row={2}>
          <Content>
            <div>Other skills</div>
          </Content>
        </Block>
        <Block colorNumber={7} col={3} row={2}>
          <Content>
            <div>TeamCity, AWS S3, Codeship, Excel, MacOS, SourceTree, Expo.io, inVision, Photoshop, Spark AR, UX/UI planning, EmberJS</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={1} row={2}>
          <Content>
            <div>Personal skills</div>
          </Content>
        </Block>
        <Block colorNumber={2} col={3} row={2}>
          <Content>
            <div>Hard worker, Responsible for my work, Innovative thinking, System critical view, Sense of beauty for designs, Clean coding, Team player, Good sense of humour, Empathy</div>
          </Content>
        </Block>
      </>
    )
  }

  const render8thPage = () => {
    return (
      <>
        <Block colorNumber={1} col={2} row={4}>
          <Content>
            <div className="font-bold">Running</div>
            <div>I do long-distance running since 2012. I've completed the marathon 14 times. I can talk about running for hours so I cut it short now.</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'running.jpg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <Block colorNumber={2} col={2} row={4}>
          <Content>
            <div className="font-bold">Music</div>
            <div>I'm a really huge fan of all forms of music. I can play the guitar, piano, ukulele and kalimba. I love to go to concerts and I'm lucky that I could perform on stage a couple of times.</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'music.jpg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <MediaQuery minWidth={768}>
          <Block colorNumber={1} col={2} row={4}>
            <ParallaxBanner
              layers={[{ image: 'football.jpg', speed: -10 }]}
              className="h-full grayscale min-h-[200px]"
            />
          </Block>
          <Block colorNumber={3} col={2} row={4}>
            <Content>
              <div className="font-bold">Football</div>
              <div>I'm a passionate supporter of my favourite football team. I've watched them live in more than 5 different countries. I also write a blog about them.</div>
            </Content>
          </Block>
          <Block colorNumber={2} col={2} row={4}>
            <ParallaxBanner
              layers={[{ image: 'travelling.png', speed: -10 }]}
              className="h-full grayscale min-h-[200px] bg-[60%_center]"
            />
          </Block>
          <Block colorNumber={1} col={2} row={4}>
            <Content>
              <div className="font-bold">Travelling</div>
              <div>I'm an enthusiast backpacker and traveller. I prefer to do travelling in the unusal way, love to hitchhike and use Couchsurfing as usual as possible.</div>
            </Content>
          </Block>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <Block colorNumber={3} col={2} row={4}>
            <Content>
              <div className="font-bold">Football</div>
              <div>I'm a passionate supporter of my favourite football team. I've watched them live in more than 5 different countries. I also write a blog about them.</div>
            </Content>
          </Block>
          <Block colorNumber={1} col={2} row={4}>
            <ParallaxBanner
              layers={[{ image: 'football.jpg', speed: -10 }]}
              className="h-full grayscale min-h-[200px]"
            />
          </Block>
          <Block colorNumber={1} col={2} row={4}>
            <Content>
              <div className="font-bold">Travelling</div>
              <div>I'm an enthusiast backpacker and traveller. I prefer to do travelling in the unusal way, love to hitchhike and use Couchsurfing as usual as possible.</div>
            </Content>
          </Block>
          <Block colorNumber={2} col={2} row={4}>
            <ParallaxBanner
              layers={[{ image: 'travelling.png', speed: -10 }]}
              className="h-full grayscale min-h-[200px]"
            />
          </Block>
        </MediaQuery>
      </>
    )
  }

  const render9thPage = () => {
    return (
      <>
        <Block colorNumber={6} col={4} row={2}>
          <Content>
            <a href="mailto:levi.hegedus92@gmail.com" target="_blank">
              <div className="font-bold flex items-center gap-x-2"><FaRegEnvelope /><span>email</span></div>
              <div>levi.hegedus92@gmail.com</div>
            </a>
          </Content>
        </Block>
        <Block colorNumber={7} col={4} row={2}>
          <Content>
            <a href="https://www.linkedin.com/in/levente-hegedus" target="__blank">
              <div className="font-bold flex items-center gap-x-2"><FaLinkedinIn />
                <span>linkedIn</span>
              </div>
              <div>linkedin.com/in/levente-hegedus</div>
            </a>
          </Content>
        </Block>
        <Block colorNumber={1} col={4} row={2}>
          <Content>
            <a href="https://www.github.com/leventehegedus" target="__blank">
              <div className="font-bold flex items-center gap-x-2"><FaGithub /><span>github</span></div>
              <div>github.com/leventehegedus</div>
            </a>
          </Content>
        </Block>
        <Block col={4} row={4}>
          <ParallaxBanner
            layers={[{ image: 'phone2.jpg', speed: -10 }]}
            className="h-full grayscale min-h-[200px]"
          />
        </Block>
        <Block colorNumber={2} col={4} row={2}>
          <Content>
            <div className="font-bold flex items-center gap-x-2"><FaPhoneAlt /><span>phone</span></div>
            <div>+36-30-7019989</div>
          </Content>
        </Block>
        <Block colorNumber={5} col={8} row={2}>
          <Content>
            <a href="cv_levente_hegedus_2023.pdf" target="_blank">
              <div className="font-bold flex items-center gap-x-2">
                <FaRegSave />
                <div>Save my CV as a PDF</div>
              </div>
            </a>
          </Content>
        </Block>
      </>
    )
  }

  return (
    <div className="App text-xs lg:text-base md:grid grid-cols-[repeat(4,_1fr)] md:grid-cols-[repeat(8,_1fr)] auto-rows-[100px]">
      {renderFirstPage()}
      <div className="col-span-4 md:col-span-8 row-span-8 bg-gir-4 flex items-center justify-center text-white text-xl font-black  p-8 p-8">
        Life as a software engineer
      </div>
      {renderSecondPage()}
      {renderThirdPage()}
      {render4thPage()}
      <div className="col-span-4 md:col-span-8 row-span-1 bg-gir-4 flex items-center justify-center text-white text-xl font-black  p-8">
        Life as a freelancer
      </div>
      {render5thPage()}
      <div className="col-span-4 md:col-span-8 bg-gir-5 flex items-center justify-center text-white text-xl font-black  p-8">
        Skills as a professional
      </div>
      {render7thPage()}
      <div className="col-span-8 md:col-span-8 bg-gir-5 flex items-center justify-center text-white text-xl font-black  p-8">
        Life after 5PM
      </div>
      {render8thPage()}
      <div className="col-span-4 md:col-span-8 bg-gir-5 flex items-center justify-center text-white text-xl font-black  p-8">
        Contact
      </div>
      {render9thPage()}
    </div>
  )
}

export default App
