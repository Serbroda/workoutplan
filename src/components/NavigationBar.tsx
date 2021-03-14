import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity } from "react-native";
import { Svg, Ellipse, Path } from "react-native-svg";

let width = Dimensions.get("window").width;

const NavigationBar = () => {
  let height = Platform.OS === "ios" ? 44 + 20 : 44;
console.log(width)
  return (
    <>
      <View style={{backgroundColor: 'red', height: height}}></View>
      <View>
          <Svg height="400" width={width + 2}>
            <Path d={"M 0 50 C 25 100 " + width / 1.5 + " 100 " + width + " 0 L 0 0"}
                  stroke="red" strokeWidth="4" fill="red"/>
          </Svg>
      </View>

      <View style={[styles.container, {
        height: height
      }]}>
        <TouchableOpacity onPress={() => console.log("Test")}>
          <View style={styles.leftButton}>
            <Text>
              Left
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.title}>
          <Text numberOfLines={1}>
            Center
          </Text>
        </View>

        <TouchableOpacity onPress={() => console.log("Test")}>
          <View style={styles.rightButton}>
            <Text>
              Right
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    width: width,
    //backgroundColor: true ? "red" : "#FFFFFF"
  },
  leftButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 90,
    paddingTop: 1,
    paddingLeft: 8
  },
  title: {
    flex: 1,
    alignItems: "center",
    paddingTop: 1,
    justifyContent: "center",
    width: width - 200,
    overflow: "hidden"
  },
  rightButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 90,
    paddingTop: 1,
    paddingRight: 8
  },
  oval: {
    width: width,
    height: width / 2,
    borderRadius: 50,
    backgroundColor: "red",
  }
});

export default NavigationBar;
