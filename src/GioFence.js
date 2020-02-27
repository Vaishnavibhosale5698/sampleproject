import MapView, { Marker, Overlay, Polygon, Circle } from "react-native-maps";
import React, { Component } from "react";
import { StyleSheet, View, Image, ToastAndroid } from "react-native";
import GeoFencing from "react-native-geo-fencing";

export default class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitute: 0,
      lat: 22.7196,
      lng: 75.8577,
      timestamp: null
    };
    /* markers: [{
        title: 'Captain',
        descripton:"indore",
        latitude:0,
        longitude: 0,
        timestamp: null
       },
      {
        title: 'Captain',
        descripton:"indore",
        latitude: 23.1793,
        longitude: 75.7849

      }]*/
  }

  componentDidMount() {
    //-------------------- Start Get current location of user---------//

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitute: position.coords.longitude,
          timestamp: position.timestamp
        });
      },

      error => {
        console.log(error);
      },
      { enableHighAccuracy: false, timeout: 50000 }
    );
    //-----------------End current location of user--------//

    //-----------------Start geo fencing-------------//

    //-------Set fencing boundary for particular area--------------//
    polygon = [
      { lat: this.state.latitude, lng: this.state.longitute },
      { lat: this.state.lat, lng: this.state.lng },
      { lat: 22.7192, lng: 75.852 },
      { lat: this.state.latitude, lng: this.state.longitute }
      // last point has to be same as first point
    ];
    //-----------------End boundary of area--------------------//

    //-----------------another user point-----------//
    let point = {
      lat: 22.7192,
      lng: 75.852
    };

    //-----------------point end of user-------------//

    // set point and polygon on containsLocation method

    GeoFencing.containsLocation(point, polygon)
      .then(() => ToastAndroid.show("User is within area", ToastAndroid.SHORT))
      .catch(() =>
        ToastAndroid.show("User is not within area", ToastAndroid.SHORT)
      );
  }

  //--------------------End geo fencing ------------//

  // console.log("latitude is=="+this.state.latitude);
  // console.log("longitute is=="+this.state.longitute)

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitute,
            latitudeDelta: 0.015 * 5,
            longitudeDelta: 0.0121 * 5
          }}
          showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled={true}
          showsScale={true}
        >
          {/*Circle Draw and set radius */}
          <MapView.Circle
            key={(this.state.latitude + this.state.longitute).toString()}
            center={{
              latitude: this.state.latitude,
              longitude: this.state.longitute
            }}
            radius={1500}
            strokeWidth={2}
            strokeColor={"red"}
            fillColor={"rgba(230,238,255,0.5)"}
            // onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
          />

          {/*this.state.markers.map(marker => (
        <MapView.Marker
          coordinate={{longitude: marker.longitude, latitude: marker.latitude}}
          title={marker.title}
          description={marker.description}
        />
  ))*/}
          {/* Marker Add */}
          <MapView.Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitute
            }}
            title={"Captain"}
            description={"indore"}
            //image={require("./images/login-logo.png")}
            //pinColor={"gray"}
          />
          {/* 

          <MapView.Marker
            coordinate={{ latitude: 23.1793, longitude: 75.7849 }}
            title={"Captain"}
            description={"indore"}
            centerOffset={{ x: 20, y: 70 }}
          /> */}

          <Image
            source={require("./images/ic_log_in_top.png")}
            style={{ width: 70, height: 70, marginTop: 10, paddingLeft: 10 }}
          />
          {/*<Overlay 
            image="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
            bounds={[
              [23.1793, 75.7849], 
              [this.state.latitude, this.state.longitute]
            ]}
          />*/}
        </MapView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});