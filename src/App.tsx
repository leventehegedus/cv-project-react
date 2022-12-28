import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Block from './Block';
import Content from './Content';
import { FaStar, FaRegStar } from 'react-icons/fa';
function App() {
  const [count, setCount] = useState(0)

  const renderSkillLevel = (level, skillName) => {
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
          skillArray.map((skill) => {
            if (skill) {
              return <FaStar />
            } else {
              return <FaRegStar />
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
        <Block colorNumber={1} col={4} row={2}>
          <Content>
            <div className="text-xl font-bold">Levente Hegedüs</div>
            <div>Senior software engineer</div>
          </Content>
        </Block>
        <Block colorNumber={2} col={4} row={2}>
        </Block>
        <Block colorNumber={1} col={3} row={6}>
        </Block>
        <Block colorNumber={3} col={2} row={4}>
          <img src="/hl.jpg" className="object-top object-cover h-full grayscale w-full" />
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
        <Block col={4} row={4} >
          <ParallaxBanner
            layers={[{ image: '/gf2.jpeg', speed: -10 }]}
            className="h-full grayscale"
          />
        </Block>
        <Block colorNumber={7} col={4} row={4} >
          <Content>Lorem ipsum HTEC</Content>
        </Block>
        <Block colorNumber={3} col={4} row={4} >
          <Content>Lorem ipsum Greenfox</Content>
        </Block>
        <Block col={4} row={4} >
          <ParallaxBanner
            layers={[{ image: '/gf3.jpeg', speed: -10 }]}
            className="h-full grayscale"
          />
        </Block>
      </>
    )
  }

  const renderThirdPage = () => {
    return (
      <>
        <Block colorNumber={1} col={2} row={4}>
          <Content>
            <div className="font-bold">Statzup</div>
            <div>Budapest, HU / (2016 - 2021)</div>
            <div>Senior Frontend developer</div>
          </Content>
        </Block>
        <Block colorNumber={2} col={2} row={4} className="row-span-3">
          <Content>
            <div className="font-bold">Statzup</div>
            <div><i>Consolidity (2019 - 2021)</i></div>
            <div>Consolidity is a smart back-office system which helps with administration processes based on automatization.
The frontend was written in ReactJS (with React Hooks and ReduxJS) and in a small part of the project, where we generated PDFs, VueJS was used.</div>
          </Content>
        </Block>
        <Block colorNumber={3} col={2} row={4}>
          <Content>
            <div className="font-bold">Statzup</div>
            <div><i>League of Managers (2016 - 2020)</i></div>
            <div>League of Managers is a free daily fantasy football game developed for the Hungarian gambling association. During the World Cup 2018 thousands of users played with the game in Hungary.
That was my first ReactJS project. We also used ReduxJS as a state container.</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', speed: -10 }]}
            className="h-full grayscale"
          />
        </Block>
        <Block colorNumber={3} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', speed: -10 }]}
            className="h-full grayscale"
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
        <Block colorNumber={6} col={4} row={2}></Block>
        <Block col={4} row={4}>
          <ParallaxBanner
            layers={[{ image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', speed: -10 }]}
            className="h-full grayscale"
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
        <Block col={4} row={4} className="bg-gir-6">
          <ParallaxBanner
            layers={[{ image: 'https://images.unsplash.com/photo-1517330486404-33542d376afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', speed: -10 }]}
            className="h-full grayscale"
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
        <Block colorNumber={Math.floor(Math.random() * 7)} col={1} row={1}>
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={6} row={1}></Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={1} row={1}></Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={1} row={6}></Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={3} row={3}>
          hype & hyper lorem ipsum
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={3} row={3}>
          <ParallaxBanner
            layers={[{ image: 'hh.jpeg', speed: -10 }]}
            className="h-full grayscale bg-bottom"
          />
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={1} row={6}></Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={3} row={3}>
          <ParallaxBanner
            layers={[{ image: 'hh.jpeg', speed: -10 }]}
            className="h-full grayscale bg-bottom"
          />
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={3} row={3}>
          ricsardgir
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={1} row={6}></Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={3} row={3}>
          vidux project
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={3} row={3}>
          <ParallaxBanner
            layers={[{ image: 'all-devices-black.png', speed: -10 }]}
            className="h-full grayscale"
          />
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={1} row={6}></Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={3} row={3}>
          drpurcsikatalin.hu
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={3} row={3}>
          rhnd.io
        </Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={1} row={1}></Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={6} row={1}></Block>
        <Block colorNumber={Math.floor(Math.random() * 7)} col={1} row={1}></Block>
      </>
    )
  }
  const render6thPage = () => {
    return (
      <>
        <Block colorNumber={1} col={4} row={2}>
          <Content>
            <div className="text-xl font-bold">Levente Hegedüs</div>
            <div>Senior software engineer</div>
          </Content>
        </Block>
        <Block colorNumber={2} col={4} row={2}>
        </Block>
        <Block colorNumber={1} col={3} row={6}>
        </Block>
        <Block colorNumber={4} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'https://images.unsplash.com/photo-1667162020876-9b6d74ad1962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80', speed: -10 }]}
            className="h-full grayscale"
          />
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

  const render7thPage = () => {
    return (
      <>
        <Block colorNumber={1} col={2} row={1}>
          <Content>{renderSkillLevel(5, 'ReactJS')}</Content>
        </Block>
        <Block colorNumber={2} col={2} row={1}>
          <Content>{renderSkillLevel(4, 'ReduxJS')}</Content>
        </Block>
        <Block colorNumber={3} col={2} row={1}>
          <Content>{renderSkillLevel(5, 'CSS/SCSS')}</Content>
        </Block>
        <Block colorNumber={4} col={2} row={1}>
          <Content>{renderSkillLevel(4, 'TailwindCSS')}</Content>
        </Block>
        <Block colorNumber={5} col={2} row={1}>
          <Content>{renderSkillLevel(3, 'MaterialUI')}</Content>
        </Block>
        <Block colorNumber={6} col={2} row={1}>
          <Content>{renderSkillLevel(5, 'HTML')}</Content>
        </Block>
        <Block colorNumber={1} col={2} row={1}>
          <Content>{renderSkillLevel(5, 'GIT')}</Content>
        </Block>
        <Block colorNumber={2} col={2} row={1}>
          <Content>{renderSkillLevel(3, 'VueJS')}</Content>
        </Block>
        <Block colorNumber={3} col={2} row={1}>
          <Content>{renderSkillLevel(2, 'ReactNative')}</Content>
        </Block>
        <Block colorNumber={4} col={2} row={1}>
          <Content>{renderSkillLevel(3, 'SQL')}</Content>
        </Block>
        <Block colorNumber={5} col={2} row={1}>
          <Content>{renderSkillLevel(2, 'NodeJS')}</Content>
        </Block>
        <Block colorNumber={6} col={2} row={1}>
          <Content>{renderSkillLevel(2, 'Handlebars.js')}</Content>
        </Block>
        <Block colorNumber={1} col={1} row={1}>
          <Content>
            <div>Other skills</div>
          </Content>
        </Block>
        <Block colorNumber={2} col={3} row={1}>
          <Content>
            <div>AWS S3, Codeship, Excel, MacOS, SourceTree, Expo.io, inVision, Photoshop, Spark AR, UX/UI planning, EmberJS</div>
          </Content>
        </Block>
        <Block colorNumber={3} col={1} row={1}>
          <Content>
            <div>Personal skills</div>
          </Content>
        </Block>
        <Block colorNumber={4} col={3} row={1}>
          <Content>
            <div>Responsible for my work, Innovative thinking, System critical view, Clean coding, Team player, Empathy</div>
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
            <div>I do long-distance running since 2012. I've completed the marathon 14 times.</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'running.jpg', speed: -10 }]}
            className="h-full grayscale"
          />
        </Block>
        <Block colorNumber={2} col={2} row={4} className="row-span-3">
          <Content>
            <div className="font-bold">Music</div>
            <div>I'm a really huge fan of all forms of music. I can play the guitar, piano, ukulele and kalimba. I love to go to concerts and I'm lucky that I could perform on stage a couple of times.</div>
          </Content>
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'music.jpg', speed: -10 }]}
            className="h-full grayscale"
          />
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <ParallaxBanner
            layers={[{ image: 'football.jpg', speed: -10 }]}
            className="h-full grayscale"
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
            layers={[{ image: 'travelling.jpg', speed: -10 }]}
            className="h-full grayscale"
          />
        </Block>
        <Block colorNumber={1} col={2} row={4}>
          <Content>
            <div className="font-bold">Travelling</div>
            <div>Travelling lorem ipsum</div>
          </Content>
        </Block>
      </>
    )
  }

  return (
    <div className="App grid grid-cols-[repeat(8,_1fr)] auto-rows-[100px]">
      {renderFirstPage()}
      <div className="col-span-8 row-span-8 bg-gir-4 flex items-center justify-center text-white text-xl font-black">
        Life as a software engineer
      </div>
      {renderSecondPage()}
      {renderThirdPage()}
      {render4thPage()}
      <div className="col-span-8 row-span-8 bg-gir-4 flex items-center justify-center text-white text-xl font-black">
        Life as a freelancer
      </div>
      {render5thPage()}
      <div className="col-span-8 bg-gir-5 flex items-center justify-center text-white text-xl font-black">
        Skills as a professional
      </div>
      {render7thPage()}
      {render6thPage()}
      <div className="col-span-8 bg-gir-5 flex items-center justify-center text-white text-xl font-black">
        Life after 5PM
      </div>
      {render8thPage()}
    </div>
  )
}

export default App
