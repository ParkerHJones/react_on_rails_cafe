import  axios  from "semantic-ui-react"
import { Component } from 'react';



class Menu extends Component {

    render() {
        return(
            <Items menuId={this.props.id} />
        )
    }
}

export default Menu;