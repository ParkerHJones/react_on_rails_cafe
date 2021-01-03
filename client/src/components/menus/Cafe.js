import { Component } from 'react';
import axios from 'axios';
import MenuForm from './MenuForm';
// import { Menu } from 'semantic-ui-react';
import MenuList from './MenuList';
import { MenuConsumer } from '../../providers/MenuProvider';


const Cafe = ({}) => (
  <MenuConsumer>
    { value => (
      <>
      <h1>Cafe</h1>
       <MenuForm addMenu={value.addMenu} />
       <MenuList menus={value.menus} /> 
       </>
    )}
  </MenuConsumer>
)

  
export default Cafe;