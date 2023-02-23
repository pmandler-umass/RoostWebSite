
import React, {useEffect, useState} from 'react';
import { Text, View } from "react-native";
import Canvas from "react-native-canvas";
import { Button } from "@mui/material";
import * as pImage from "./start_main";
import logo from './logo.svg';
import './App.css';

function buttonNothing() {
  console.log("pick me");
}

function App() {
  let this_dir = __dirname;
  let image_div = pImage.MyImages();
  /* const [xAxis, setXAxis] = useState(100);
  const [yAxis, setYAxis] = useState(100);
  var ctx = "";

  //  CANVAS CODE
  const handleCanvas = (canvas) => {
    if (canvas) {
      ctx = canvas.getContext("2d");
      ctx.fillStyle = "blue";
      ctx.fillRect(xAxis - 50, yAxis - 50, xAxis, yAxis);
    }
  };

  const onstart = (evt) => {
    console.log("start", evt.nativeEvent.locationX);
    ctx.clearRect(xAxis - 50, yAxis - 50, xAxis, yAxis);
    setXAxis(evt.nativeEvent.locationX);
    setYAxis(evt.nativeEvent.locationY);
  };

  const onmove = (evt) => {
    console.log("move", evt.nativeEvent.locationX);
    ctx.clearRect(xAxis - 50, yAxis - 50, xAxis, yAxis);
    setXAxis(evt.nativeEvent.locationX);
    setYAxis(evt.nativeEvent.locationY);
  };

  const onrelease = (evt) => {
    console.log("release", evt.nativeEvent.locationX);
  };


        <View
        onStartShouldSetResponder={() => true}
        onResponderStart={onstart}
        onResponderMove={onmove}
        onResponderRelease={onrelease}
        style={{ flex: 1, alignItems: "center", backgroundColor: "green" }}
      >
        <Text>Drawing Pad</Text>
        <Canvas
          ref={handleCanvas}
          style={{ flex: 1, borderColor: "#000", borderWidth: 1 }}
        />
      </View>
  // END CANVAS CODE
  */
  /* async function callBackendDemo() {
    return fetch("http://localhost:5001/", {
      method: 'GET'
    }).then(response => response.json()).then((data) => {
      console.log(data);
      setBackendMessage(data['detail']);
    }).catch(error => {
      console.log("Error!");
      console.log(error);
    })
  }

  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    callBackendDemo();
  }, [callBackendDemo]); */

  // PAM add         <div> {image_div} </div>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Roost App
        </p>
        <div> {this_dir} </div>
        <div> {image_div} </div>
        <div> this will be a filelist </div>
        <Button onClick={buttonNothing} autoFocus>
          Do Nothing
        </Button>
      </header>
    </div>
  );
}

export default App;



