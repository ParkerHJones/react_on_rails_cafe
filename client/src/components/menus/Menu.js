
import { Component } from 'react';
// import Items from '../items/Items';
import axios from 'axios';
import { MenuConsumer } from '../../providers/MenuProvider';
import { Button, Icon } from 'semantic-ui-react';
import MenuForm from './MenuForm';


class Menu extends Component {
    state = { id: 0, title: '', create_at: '', updated_at: '', editing: false }


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

    toggleEdit = () => {
        const { editing } = this.state 
        this.setState({ editing: !editing })
    }


    render() {
        const { id, title, update_at, editing } = this.state
        const { deleteMenu, updateMenu } = this.props
        return(
            // <Items menuId={this.props.id} />
            <>
            <h1>{title}</h1>
            <h5>{update_at}</h5>
            <Button Icon color ='red' onClick={() => deleteMenu(id)}>
            <Icon name='trash' />
            </Button>
            {
                editing ?
                <MenuForm 
                id={id}
                title={title}
                toggleEdit={this.toggleEdit}
                updateMenu={updateMenu}
                />
                :
                <Button>
                Icon color ='yellow' onClick={() => this.toggleEdit()}
                <Icon name='pencil' />
                </Button>
            
            }
            </>
        )
    }
}

const ConnectedMenu = (props) => (
    <MenuConsumer>
        { value => (
            <Menu
            {...props}
            {...value}
            deleteMenu={value.deleteMenu}
            updateMenu={value.updateMenu}

            />
        )}
    </MenuConsumer>
)

export default ConnectedMenu;