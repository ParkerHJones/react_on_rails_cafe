import React, { Component } from 'react';
import axios from 'axios';

const MenuContext = React.createContext();

export const MenuConsumer = MenuContext.Consumer; 

class MenuProvider extends Component {
    state = { menus: []}

    componentDidMount() {

        axios.get('/api/menus')
        .then( res => {
            this.setState({ menus: res.data })
        })
        .catch( err => {
            console.log(err);
        })
        }

    
        
        addMenu = (menu) => {
          // add to the db
          axios.post('/api/menus', { menu })
          .then(res => {
              // add to the state
              const { menus } = this.state; 
              this.setState({ menus: [...menus, res.data]})
            })
            .catch( err => {
              console.log(err);
            })
        }
        updateMenu = (id, menu) => {
          // update to the db
          // update to the state
        }
        deleteMenu = (id) => {
          // delete in the db
          // delete in the state
        }

    render() {
        return(
        <MenuContext.Provider value={{
            ...this.state,
            addMenu: this.addMenu,
            updateMenu: this.updateMenu,
            deleteMenu: this.deleteMenu, 
        }}>
        { this.props.children }
        </MenuContext.Provider> 
        )
    }
}

export default MenuProvider; 