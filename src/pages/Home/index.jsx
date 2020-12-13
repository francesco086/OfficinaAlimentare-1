import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Header from './components/Header';
import Story from './components/Story';
import Team from './components/Team';
import Context from './context';
import Footer from 'components/Footer';

import './styles.scss';

class HomePage extends Component {

  state = {
    passedHeader: false
  }

  constructor(props) {
    super(props);
    this.headerRef = React.createRef(null);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    // this is the threshold point when the header goes smaller
    const threshold = this.headerRef.current.offsetHeight - 70;
    let passedHeader = null;
    if (window.scrollY > threshold) {
      passedHeader = true;
    }
    else 
    {
      passedHeader = false;
    }
    if (passedHeader !== null && this.state.passedHeader !== passedHeader) this.setState({ passedHeader });
  }

  openPopup = (name) => {
    console.log('opening popup')
  }

  render() {
    const provides = {
      passedHeader: this.state.passedHeader,
    }

    return (
      <div className="homepage">
        <Context.Provider value={provides}>
          <Header ref={this.headerRef} />
          <Container>
              <Services /> 
              <Team />
              <Story />
              <Portfolio />
              {/* <Contact />  */}
          </Container>
          <Footer />
        </Context.Provider>
      </div>
    )
  }
}

export default HomePage;