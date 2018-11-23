import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Container, Text, Footer } from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import { withNavigationFocus } from "react-navigation";
import { BarCodeScanner, Permissions } from "expo";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import SQL from "../components/SQL";
import { SpinnerScreen } from "../components/commons";

class ScannerScreen extends React.Component {
  static navigationOptions = {
    header: null //hide the header bar
  };

  state = {
    hasCameraPermission: null
  };

  async componentDidMount() {
    // ask for camera permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  saveToDB = qr => {
    SQL.AddQR(qr);
  };

  toggleFlash = data => {
    this.setState(prevState => ({
      flash: !prevState.flash
    }));
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.saveToDB(data);
    //change screen to Result and pass scanned qr
    this.props.navigation.navigate("Result", {
      qr: data
    });
  };

  render() {
    const buttonColor = "green";

    return this.state.hasCameraPermission === null ? (
      <SpinnerScreen />
    ) : this.state.hasCameraPermission === false ? (
      <Message>
        <Text>No access to camera</Text>
      </Message>
    ) : !this.state.scanned && this.props.isFocused ? (
      <Container>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          torchMode={this.state.flash ? "on" : "off"}
          style={styles.barcodeScanner}
        >
          <Footer style={styles.layerBottom}>
            <Grid>
              <Row style={styles.layerBottomRow}>
                <FontAwesome
                  size={25}
                  name="history"
                  color={buttonColor}
                  onPress={() => {
                    this.props.navigation.navigate("History");
                  }}
                />
                <MaterialCommunityIcons
                  size={25}
                  name={this.state.flash ? "flash" : "flash-off"}
                  onPress={this.toggleFlash}
                  color={buttonColor}
                />
              </Row>
            </Grid>
          </Footer>
        </BarCodeScanner>
      </Container>
    ) : (
      <SpinnerScreen />
    );
  }
}

const styles = StyleSheet.create({
  barcodeScanner: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flex: 1,
    justifyContent: "flex-end"
  },
  layerBottom: { backgroundColor: "transparent" },
  layerBottomRow: {
    justifyContent: "space-between",
    marginHorizontal: 70
  }
});

export default withNavigationFocus(ScannerScreen);
