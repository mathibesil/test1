import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { FlatList, StyleSheet, Alert, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
// import { FETCH_TODOS } from '../../graphql/queries';

// Some styles
const styles = StyleSheet.create({
  todoItem: {
    alignItems: 'center',
    padding: 8,
    width: 320,
    borderBottomWidth: 1.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
  },
});

class TodoListComponent extends React.Component {
  render() {
    if (this.props.data && this.props.data.loading) {
      return <Text>Please Wait</Text>;
    }

    // 2
    if (this.props.data && this.props.data.error) {
      Alert.alert('Error', 'No');
    }
    // 3
    const linksToRender = this.props.data.books;
    return (
      <View>
        {linksToRender.map(item => (
          <ListItem key={item.author} title={item.author} subtitle={item.title} />
        ))}
      </View>
    );
  }
}

const FEED_QUERY = gql`
  # 2
  query {
    books {
      id
      title
      author
    }
  }
`;

// 3
export default graphql(FEED_QUERY)(TodoListComponent);
