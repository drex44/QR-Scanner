import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Text,
  List,
  ListItem,
  Spinner,
  Content,
  Left,
  Right,
  Body,
  Button
} from "native-base";
import { Constants } from "expo";
import SQL from "../components/SQL";
import { Message } from "../components/commons";

class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qrs: [], fetching: true };
  }

  static navigationOptions = {
    title: "History"
  };

  async componentDidMount() {
    let qrs = await SQL.GetQRS();
    this.setState({ qrs, fetching: false });
  }

  render() {
    let { qrs, fetching } = this.state;

    if (fetching) {
      return (
        <Message>
          <Spinner color="green" />
        </Message>
      );
    } else if (qrs === null || qrs.length === 0) {
      return (
        <Message>
          <Text>No records</Text>
        </Message>
      );
    } else
      return (
        <Container>
          <Content>
            {qrs.map(qr => (
              <QRListItem key={qr.id} qr={qr} {...this.props} />
            ))}
          </Content>
        </Container>
      );
  }
}

export const QRListItem = props => {
  return (
    <List>
      <ListItem thumbnail>
        <Left>
          <MaterialCommunityIcons name="qrcode" size={70} color="green" />
        </Left>
        <Body>
          <Text numberOfLines={2}>{props.qr.value}</Text>
          <Text>{props.qr.date}</Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => {
              props.navigation.navigate("Result", {
                qr: props.qr.value
              });
            }}
          >
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    </List>
  );
};

export default HistoryScreen;
