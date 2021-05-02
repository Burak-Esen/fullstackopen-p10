import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider } from 'react-native-paper';

const menuItem_2_query = {orderBy:'RATING_AVERAGE'};
const menuItem_3_query = {orderBy:'RATING_AVERAGE', orderDirection:'ASC'};
const OrderComp = ({ buttonText, setQVariables }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu} style={{color:'black'}}>{buttonText}</Button>}>
          <Menu.Item onPress={() => setQVariables({})} title="Latest repositories" />
          <Divider />
          <Menu.Item onPress={() => setQVariables(menuItem_2_query)} title="Highest rated repositories" />
          <Menu.Item onPress={() => setQVariables(menuItem_3_query)} title="Lowest rated repositories" />
        </Menu>
      </View>
  );
};

export default OrderComp;