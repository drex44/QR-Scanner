import React from "react";
import { TextInput } from "react-native";
import { Container, Text, Button } from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";
import { AppLoading, Constants } from "expo";
import SQL from "../components/SQL";

class ScannerScreen extends React.Component {
  static navigationOptions = {
    header: null //hide the header bar
  };
  saveToDB = qr => {
    SQL.AddQR(qr);
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
            <Text>Scanner Screen</Text>
          </Row>
          <Row>
            <TextInput
              placeholder="Type here to the qr..."
              onChangeText={qr => this.setState({ qr })}
            />
          </Row>
          <Row>
            <Button
              onPress={() => {
                this.saveToDB(this.state.qr);
              }}
            >
              <Text>Add to db</Text>
            </Button>
          </Row>
          <Row>
            <Button onPress={() => this.props.navigation.navigate("History")}>
              <Text>History</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate("Result")}>
              <Text>Result</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default ScannerScreen;
