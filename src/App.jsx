import logo from './assets/media/logo.svg'
import heroMobile from './assets/media/hero-mobile.jpg'
import heroDesktop from './assets/media/hero-desktop.jpg'
import Header from "./assets/components/pure/Header"
import Hero from './assets/components/pure/Hero'
import ContentContainer from './assets/components/container/ContentContainer'

function App() {
  return (
    <div
      className='main-container'
    >
      <Header brand={logo} textAlt='Base Apparel' />
      <Hero mobile={heroMobile} desktop={heroDesktop} textAlt='Beautiful woman' />
      <ContentContainer callToAction={true}>
        {{
          title: "We're coming soon",
          copy: "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.",
        }}
      </ContentContainer>
    </div>
  )
}

export default App
