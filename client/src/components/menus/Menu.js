
import { Component } from 'react';
// import Items from '../items/Items';
import axios from 'axios';



class Menu extends Component {
    state = { id:0, title: '', create_at: '', updated}


    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`/api/menus/${id}`)
        .then( res => {
            this.setState({ ...res.data })
        })
        .catch(function (error) {
            console.log(error);

        });
    }


    render() {
        const { id, title, update_at } = this.state
        return(
            // <Items menuId={this.props.id} />
            <>
            <h1>{title}</h1>
            <h5>{update_at}</h5>
            </>
        )
    }
}

export default Menu;