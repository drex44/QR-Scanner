import React from "react";
import { Container, Text } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { Constants } from "expo";

class ResultScreen extends React.Component {
  static navigationOptions = {
    title: "Scan Detail"
  };
  render() {
    const qr = this.props.navigation.getParam("qr", "NO-QR");

    return (
      <Container style={{ marginTop: Constants.statusBarHeight }}>
        <Grid
          style={{
            alignItems: "center"
          }}
        >
          <Row>
            <Text>{qr}</Text>
          </Row>
        </Grid>
      </Container>
    );
  }
}
export default ResultScreen;
