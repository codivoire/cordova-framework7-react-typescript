import * as React from "react";
import { Page, Navbar, Block } from "framework7-react";

import RegisterBackButtonAction from "../../services/RegisterBackButtonAction";

export interface Props {}

export default class NotFoundPage extends React.Component<Props> {
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
        <Navbar title="Not found" backLink="Back" />
        <Block strong>
          <h3>Sorry</h3>
          <p>Requested content not found.</p>
        </Block>
      </Page>
    );
  }
}
