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

export default class ShowBook extends Component {

  constructor(props) {
    super(props)
    // this.renderCard = this.renderCard.bind(this)
    this.state = {
      book: ''
    }
  }

  _navigate(page) {
    this.props.navigator.push({
      name: page
    })
  }

  componentWillMount() {
    this.fetchBook(this.props.bookId, (item) => {
      this.setState({book: item})
    })

  }

  fetchBook(id, callback) {
    fetch('https://www.googleapis.com/books/v1/volumes/' + id)
      .then((response) => response.json())
      .then( (responseJson) => {
        callback(responseJson.volumeInfo)

      })
      .catch((error) => {
        console.error(error)
      })
  }


  render() {

    const card = () => {
      var book = this.state.book
      if (book != '') {
        var link = book.imageLinks.thumbnail.replace('http', 'https');
      } else {
        var link = "https://books.google.com/books/content?id=JXDBwkr69-wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
      return (
      <View>
        <Text style={styles.h2} > {book.title} </Text>
        <View style={{height:250}}>
            <Image style={styles.image}  source={{uri: link  }}   />
        </View>
        <View style={styles.cardWhite}>
          <View style={styles.justifiedTitles}>
            <Text > {book.publishedDate}  </Text>
            <Text > {book.publisher}  </Text>
          </View>
          <Text style={{fontSize:11}} > {book.description}  </Text>
        </View>



      </View>
      )
    }

   return (
     <View style={styles.globalBackground}>
       <View style={styles.toolbar}>
         <TouchableHighlight onPress={ () => this._navigate('IndexBooks') }  >
             <Text style={styles.backButton}> Back </Text>
         </TouchableHighlight>
        </View>
        {card()}
     </View>
   )
  }


}
