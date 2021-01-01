import { List } from 'semantic-ui-react';

const MenuList = ({ menus }) => (

<List divided relaxed>
    {menus.map( m =>
        

<List.Item>
<List.Icon name='github' size='large' verticalAlign='middle' />
<List.Content>
<List.Header as='a'>{m.title}</List.Header>
<List.Description as='a'>{m.updated_at}</List.Description>
</List.Content>
</List.Item>
)}
</List>

)

export default MenuList; 