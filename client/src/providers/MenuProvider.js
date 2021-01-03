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
          axios.put(`/api/menus/${id}`, { menu })
          .then( res => {
            const menus = this.state.menus.map( m => {
                if(m.id === id) {
                    return res.data 
                }
                return m 
            })
            this.setState({ menus })
          })
          .catch( err => {
              console.log(err);
          })
        }
        deleteMenu = (id) => {
          axios.delete(`/api/menus/${id}`)
          .then( res => {
              const { menus } = this.state
              this.setState({ menus: menus.filter( m => m.id !== id)})
              window.location.href = '/cafe'
          })
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