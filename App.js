/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import './shim';
import HTML from 'react-native-render-html';
// import {Asset} from "expo-asset";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


///////////////


import StaticServer from 'react-native-static-server';
import RNFS from 'react-native-fs';

// create a path you want to write to
let path = RNFS.DocumentDirectoryPath + '/www';


/////////////////

const App = () => {
 // return (
 
 
   // <WebView source={{ uri: 'https://gogul09.github.io/software/deep-drum' }} />
// //<WebView source={require("./dist/index.html")} />
 
 // );
 
 
    // <WebView
        // style={{flex: 1}}
        // originWhitelist={['*']}
        // source={{uri:'file:///android_asset/index.html'}}
        // style={{ marginTop: 20 }}
        // javaScriptEnabled={true}
        // domStorageEnabled={true}
      // />
	  
 let server = new StaticServer(8080, 'file:///android_asset');

   return (
      <WebView
        style={{flex: 1}}
        originWhitelist={['*']}
        source={{uri:'file:///android_asset/index.html'}}
        style={{ marginTop: 20 }}
		allowFileAccess={true}
		allowUniversalAccessFromFileURLs={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
  )
 };


// function MyComponent() {
  // const webviewRef = React.useRef(null)
  // const [html,setHtml]=React.useState("")

  // React.useEffect(()=>{
    // async function load(){
      // const{uri}=Asset.fromModule(require("./dist/index.html"))
      // const res = await fetch(uri)
      // const html = await res.text()
      // console.log("got html",html)
      // setHtml(html)
    // }
    // load()
  // },[])

  // return (
    // <View style={{flex:1}}>
      // <WebView
      // style={{flex:1,margin: 0, backgroundColor: "transparent"}}
      // ref={webviewRef}
      // scalesPageToFit={true}
      // originWhitelist={["*"]}
      // source={{html}}  
    // />
// </View>)
// }
// class App extends Component {

  // constructor(props){
    // super(props);
    // this.state = {
      // data: 'Jordan Belfort'
    // }
  // }
  // componentWillMount(){
    // //console.log('First this called');
	 // // this.HTMLFile = Asset.fromModule(require('./dist/index.html'))

    // // if (!this.HTMLFile.localUri) {
      // // Asset.loadAsync(require('./dist/index.html')).then(() => {
        // // this.HTMLFile = Asset.fromModule(require('./dist/index.html'))
        // // this.setState({ isHTMLFileLoaded: true })
      // // })
    // // } else {
      // // this.setState({ isHTMLFileLoaded: true })
    // // }
  // }

  // getData(){
    // setTimeout(() => {
      // console.log('Our data is fetched');
      // this.setState({
        // data: 'Hello WallStreet'
      // })
    // }, 1000)
  // }

  // componentDidMount(){
    // this.getData();
  // }

  // render () {
    // // if (!this.state.isHTMLFileLoaded) {
      // // return null
    // // }

    // // const { localUri } = this.HTMLFile

    // // return (
      // // <WebView
        // // source={
          // // Platform.OS === 'android'
            // // ? {
              // // uri: localUri.includes('ExponentAsset')
                // // ? localUri
                // // : 'file:///android_asset/' + localUri.substr(9)
            // // }
            // // : require('./dist/index.html')}
        
      // // />
    // // )
	
	


  // return (
    // // <View style={{flex:1}}>
      // // <WebView
      // // style={{flex:1,margin: 0, backgroundColor: "transparent"}}
      // // ref={webviewRef}
      // // scalesPageToFit={true}
      // // originWhitelist={["*"]}
      // // source={{html}}  
    // // />
// // </View>
// < MyComponent />
// )


  // }
// }


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
