import Aux from '../Higher Order Components/Aux';
import React from 'react';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div> 
    <main>
      {props.children}
    </main>
  </Aux>  
)

export default layout;