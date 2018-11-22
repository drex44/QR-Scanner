import React from "react";

import { Container, Text } from "native-base";

import { Grid, Row } from "react-native-easy-grid";

import { AppLoading, Constants } from "expo";

class ResultScreen extends React.Component {
  static navigationOptions = {
    title: "Scan Detail"
  };
  render() {
    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Grid
          style={{
            alignItems: "center"
          }}
        >
          <Row>
            <Text>Result Screen</Text>
          </Row>
        </Grid>
      </Container>
    );
  }
}
export default ResultScreen;
