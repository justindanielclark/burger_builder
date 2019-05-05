import Aux from '../Higher Order Components/Aux';
import styles from './Layout.module.css';
import React, {Component} from 'react';
import Toolbar from '../Containers/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Containers/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSideDrawerOpened: true
    }
  }
  sideDrawerOpenHandler = () => {
    this.setState({isSideDrawerOpened: true});
  }
  sideDrawerClosedHandler = () => {
    this.setState({isSideDrawerOpened: false});
  }
  render(){
    return (
      <Aux>
        <Toolbar
          click={this.sideDrawerOpenHandler}
        />
        <SideDrawer
          isOpened={this.state.isSideDrawerOpened}
          click={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>  
    );
  }
}

export default Layout;