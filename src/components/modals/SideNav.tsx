import * as React from "react";
import {
  Page,
  View,
  Panel,
  Block,
  BlockTitle,
  List,
  ListItem,
  Icon
} from "framework7-react";

export interface Props {
  exitApp: () => void;
}

export default class SideNav extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { exitApp } = this.props;

    return (
      <Panel left cover>
        <View>
          <Page>
            <BlockTitle>Left Panel</BlockTitle>
            <Block strong>
              <p>Left panel content goes here</p>
            </Block>
            <List>
              <ListItem link="#" title="Exit App" onClick={exitApp}>
                <Icon slot="media" ion="ios-power" />
              </ListItem>
            </List>
          </Page>
        </View>
      </Panel>
    );
  }
}
