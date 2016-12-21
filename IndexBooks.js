import React, { Component, PropTypes } from 'react';
import { ListView,
         View,
         Text,
         TouchableHighlight,
         TextInput,
         StyleSheet,
         Image,
         ScrollView} from 'react-native';
import { styles } from './StyleSheet'

export default class IndexBooks extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      text: ''
    };
  }

  _navigate(page,id) {
    this.props.navigator.push({
      name: page,
      passProps: {
        bookId: id
      }
    })
  }

  fetchBooks(query) {
    this.setState({ dataSource: this.state.dataSource.cloneWithRows([]) })
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + query)
      .then((response) => response.json())
      .then((responseJson) => {
        let data = responseJson.items
        if (data != undefined ) {
          this.setState({ dataSource: this.state.dataSource.cloneWithRows(data) })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }


renderRow(item)  {

  if (item.volumeInfo.imageLinks != undefined && item.volumeInfo.imageLinks.thumbnail != undefined) {
    var httpsImageUri = item.volumeInfo.imageLinks.thumbnail.replace('http', 'https')
  } else {
    var httpsImageUri = undefined
  }

  return(
    <TouchableHighlight onPress={ () => this._navigate('ShowBook', item.id) } >
      <View style={styles.card}>
      <Image   style={{width: 50, height: 50}} source={{uri: httpsImageUri }}   />
      <Text>{item.volumeInfo.title}</Text>
      </View>
    </TouchableHighlight>
  )
 }

  render() {
    return (
      <View style={styles.globalBackground}>
        <View style={styles.toolbar}>
          <TouchableHighlight onPress={ () => this._navigate('Home') }  >
              <Text style={styles.backButton}> Back </Text>
          </TouchableHighlight>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Type a book title"
            onChangeText={(text) => this.fetchBooks(text)}
          />
        </View>
        <ScrollView>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
        />
        </ScrollView>
      </View>
    )
  }
}
