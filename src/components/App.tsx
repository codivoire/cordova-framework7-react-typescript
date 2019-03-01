import * as React from "react";
import { Framework7Params } from "framework7/components/app/app-class";
import { App as F7App, View, Statusbar as F7Statusbar } from "framework7-react";
import {
  ScreenOrientation,
  ScreenOrientationOriginal
} from "@ionic-native/screen-orientation";
import { StatusBar, StatusBarOriginal } from "@ionic-native/status-bar";
import {
  SplashScreen,
  SplashScreenOriginal
} from "@ionic-native/splash-screen";
import { Keyboard, KeyboardOriginal } from "@ionic-native/keyboard";

import { Platform, PlatformInterface } from "../services/Platform";
import SideNav from "./modals/SideNav";
import * as config from "../config.json";
import routes from "../routes";

export interface Props {}

export default class App extends React.Component<Props> {
  platform: PlatformInterface;

  screenOrientation: ScreenOrientationOriginal;
  statusBar: StatusBarOriginal;
  splashScreen: SplashScreenOriginal;
  keyboard: KeyboardOriginal;

  constructor(props: Props) {
    super(props);

    this.platform = Platform;
    this.screenOrientation = ScreenOrientation;
    this.statusBar = StatusBar;
    this.splashScreen = SplashScreen;
    this.keyboard = Keyboard;

    this._exitApp = this._exitApp.bind(this);
  }

  _exitApp() {
    this.platform.exitApp();
  }

  componentDidMount() {
    this.platform.ready(() => {
      if (this.platform.is("cordova")) {
        // hide splash screen
        this.splashScreen.hide();

        this.keyboard.hideFormAccessoryBar(true);

        // set status bar content to light
        this.statusBar.styleLightContent();

        // set to portrait
        this.screenOrientation.lock(
          this.screenOrientation.ORIENTATIONS.PORTRAIT
        );
      }
    });
  }

  render() {
    const f7params: Framework7Params = {
      id: config.appId,
      name: config.name,
      version: config.version,
      theme: "auto",
      touch: {
        disableContextMenu: false
      },
      routes
    };

    return (
      <F7App params={f7params}>
        <F7Statusbar />
        <SideNav exitApp={this._exitApp} />
        <View id="main-view" url="/" main className="ios-edges" />
      </F7App>
    );
  }
}
