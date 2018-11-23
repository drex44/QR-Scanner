import React from "react";
import { Container, Content, View, Spinner } from "native-base";
import { Dimensions } from "react-native";

let { height: screenHeight } = Dimensions.get("window");
screenHeight = screenHeight - 300;

export const Message = props => {
  return (
    <Container>
      <Content>
        <View
          style={{
            flex: 1,
            height: screenHeight,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {props.children}
        </View>
      </Content>
    </Container>
  );
};

export const SpinnerScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Spinner color="green" />
    </View>
  );
};
