import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Icon, Image, Menu } from 'semantic-ui-react';

class SocialMenu extends React.Component {
  render() {
    const itemStyle = {color: 'white'};
    return (
        <Menu size='mini' icon borderless id='socialmenu'>
          <Container>
            <Menu.Item large style={itemStyle}><Icon size='large' inverted name='phone'/>808.762.3996</Menu.Item>
            <Menu.Item large style={itemStyle}><Icon size='large' inverted name='envelope'/>info@dvinekailua.com</Menu.Item>
            <Menu.Item><Icon size='large' inverted name='facebook f'/></Menu.Item>
            <Menu.Item><Icon size='large' inverted name='instagram'/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
      <Menu borderless id='menu'>
        <Grid container centered>
          <Menu.Item>HOME PAGE</Menu.Item>
          <Menu.Item>ABOUT US</Menu.Item>
          <Menu.Item>WINE CLUB</Menu.Item>
          <Menu.Item><Image size='tiny' src='http://courses.ics.hawaii.edu/ics314f19/morea/ui-frameworks/wod-dvine-logo.png'/></Menu.Item>
        </Grid>
      </Menu>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <div class="dvine-background">
        <Grid container centered verticalAlign='middle' style={{height: '500px'}}>
          <Image centered size='medium' src='http://courses.ics.hawaii.edu/ics314f19/morea/ui-frameworks/wod-dvine-logo.png'/>
        </Grid>
      </div>
    );
  }
}


class DVine extends React.Component {

  render() {
    return (
        <div>
          <SocialMenu/>
          <MiddleMenu/>
          <Logo/>
        </div>
  );
  }
}

ReactDOM.render(<DVine/>, document.getElementById('root'));