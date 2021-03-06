import * as React from "react";
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  List,
  ListItem
} from "framework7-react";

import RegisterBackButtonAction from "../../services/RegisterBackButtonAction";

export interface Props {}

export default class SettingsPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    // handle back button
    RegisterBackButtonAction(this.$f7router);
  }

  render() {
    return (
      <Page>
        <Navbar title="Settings" backLink="Back" />
        <Block strong>
          <p>Here is your blank Framework7 app. Let's see what we have here.</p>
        </Block>
        <BlockTitle>Navigation</BlockTitle>
        <List>
          <ListItem link="/about/" title="About" />
        </List>
      </Page>
    );
  }
}
