import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import AboutUs from './aboutus';
import HomePage from './home';
import SendUs from './send';
import Fees from './fees';
import Help from './help';
import Recieve from './recieve';
import LogIn from './loginnn/login';
import LeftAlignment from './features/pageheader/leftalignment';
import LogIn2 from './loginnn/login2';
import LogIn3 from './loginnn/login3';
import SignIn from './signinnn/signin';
import SignIn2 from './signinnn/signin2';
import SignIn3 from './signinnn/signin3';
import HeaderDark from './features/header/headerdark';
import HeaderPrimary from './features/header/headerprimary';
import HeaderTransparent from './features/header/headertransparent';
import LightverSion from './features/navigationdropdown/lightversion';
import Darkversion from './features/navigationdropdown/darkversion';
import Alternateversion from './features/secondnavigation/alternateversion';
import Defaultversion from './features/secondnavigation/defaultversion';
import Primaryversion from './features/navigationdropdown/primaryversion';
import CenterAlignment from './features/pageheader/centeralignment';
import CustomBackground from './features/pageheader/custombackground';
import CustomBackground2 from './features/pageheader/custombackground2';
import DarkVersion from './features/pageheader/darkversion';
import PrimaryVersion from './features/pageheader/primaryversion';
import AlternateVersionFooter from './features/footer/alternateversion';
import DarkVersionFooter from './features/footer/darkversion';
import LightVersionDefault from './features/footer/lightversiondefault';
import PrimaryVersionFooter from './features/footer/primaryversion';
import LayoutBoxed from './features/layoutboxed';
import MyProfile from './folder/acount/myprofile';
import CashBank from './folder/acount/cashbank';
import Notification from './folder/acount/notification';
import Elements from './folder/other/elements';
import Elements2 from './folder/other/elements2';
import ContactUs from './folder/other/contact';
import Dashboard from './folder/dashbord/dashboard';
import Transaction from './folder/dashbord/transaction';
import SendMoney from './folder/dashbord/sendmoney/sendmoney';
import SendMoneyConfirm from './folder/dashbord/sendmoney/sendmoneyconfirm';
import SendMoneySucces from './folder/dashbord/sendmoney/sendmoneysucces';
import RequestMoney from './folder/dashbord/requestmoney/requestmoney';
import RequestMoneyConfirm from './folder/dashbord/requestmoney/requestmoneyconfirm';
import RequestMoneySucces from './folder/dashbord/requestmoney/requestmoneysucces';
import DepositeMoney from './folder/dashbord/depositemoney/depositemoney';
import DepositeMoneyConfirm from './folder/dashbord/depositemoney/depositemoneyconfirm';
import DepositeMoneySuccess from './folder/dashbord/depositemoney/depositemoneysucces';
import WidthDrawMoney from './folder/dashbord/withdarwmoney/widthdrawmoney';
import WidthDrawMoneyConfirm from './folder/dashbord/withdarwmoney/widthdrawmoneyconfirm';
import WidthDrawMoneySuccess from './folder/dashbord/withdarwmoney/widthdrawmoneysucces';
class App extends Component {
  render() {
    const { match } = this.props;
    console.log(match.url, 'match.url match.url', `${match.url}/about-us`);

    return (
      <Suspense>
        <Switch>
          <Redirect
            exact
            from={`${match.url}/home`}
            to={`${match.url}/`}
          />
          <Route
            path={`${match.url}/`}
            render={props => <HomePage {...props} />}
          />
          <Route
            path={`${match.url}about-us`}
            render={props => <AboutUs {...props} />}
          />
          <Route
            path={`${match.url}send-us`}
            render={props => <SendUs {...props} />}
          />


          <Route
            path={`${match.url}fees`}
            render={props => <Fees {...props} />}
          />


          <Route
            path={`${match.url}help`}
            render={props => <Help {...props} />}
          />
          <Route
            path={`${match.url}recieve`}
            render={props => <Recieve {...props} />}
          />
          <Route
            path={`${match.url}login`}
            render={props => <LogIn {...props} />}
          />

          <Route
            path={`${match.url}login2`}
            render={props => <LogIn2 {...props} />}
          />
          <Route
            path={`${match.url}login3`}
            render={props => <LogIn3 {...props} />}
          />
          <Route
            path={`${match.url}signin`}
            render={props => <SignIn {...props} />}
          />
          <Route
            path={`${match.url}signin2`}
            render={props => <SignIn2 {...props} />}
          />
          <Route
            path={`${match.url}signin3`}
            render={props => <SignIn3 {...props} />}
          />
          <Route
            path={`${match.url}headerdark`}
            render={props => <HeaderDark{...props} />}
          />
          <Route
            path={`${match.url}headerprimary`}
            render={props => <HeaderPrimary{...props} />}
          />
          <Route
            path={`${match.url}headertransparent`}
            render={props => <HeaderTransparent{...props} />}
          />
          <Route
            path={`${match.url}lightversion`}
            render={props => <LightverSion{...props} />}
          />
          <Route
            path={`${match.url}darkversion`}
            render={props => <Darkversion{...props} />}
          />
          <Route
            path={`${match.url}primaryversion`}
            render={props => <Primaryversion{...props} />}
          />
          <Route
            path={`${match.url}alternateversion`}
            render={props => <Alternateversion{...props} />}
          />
          <Route
            path={`${match.url}defaultversion`}
            render={props => <Defaultversion{...props} />}
          />

          <Route
            path={`${match.url}leftalignment`}
            render={props => <LeftAlignment{...props} />}
          />
          <Route
            path={`${match.url}centeralignment`}
            render={props => <CenterAlignment{...props} />}
          />
          <Route
            path={`${match.url}custombackground`}
            render={props => <CustomBackground{...props} />}
          />
          <Route
            path={`${match.url}custombackground2`}
            render={props => <CustomBackground2{...props} />}
          />
          <Route
            path={`${match.url}darkversion`}
            render={props => <DarkVersion{...props} />}
          />
          <Route
            path={`${match.url}lightversion`}
            render={props => <LightverSion{...props} />}
          />
          <Route
            path={`${match.url}primaryversion`}
            render={props => <PrimaryVersion{...props} />}
          />
          <Route
            path={`${match.url}alternateversionfooter`}
            render={props => <AlternateVersionFooter{...props} />}
          />
          <Route
            path={`${match.url}darkversionfooter`}
            render={props => <DarkVersionFooter{...props} />}
          />
          <Route
            path={`${match.url}lightversiondefault`}
            render={props => <LightVersionDefault{...props} />}
          />
          <Route
            path={`${match.url}primaryversiondefooter`}
            render={props => <PrimaryVersionFooter{...props} />}
          />
          <Route
            path={`${match.url}layoutboxed`}
            render={props => <LayoutBoxed{...props} />}
          />
          <Route
            path={`${match.url}myprofile`}
            render={props => <MyProfile{...props} />}
          />
          <Route
            path={`${match.url}cashbank`}
            render={props => <CashBank{...props} />}
          />
          <Route
            path={`${match.url}notification`}
            render={props => <Notification{...props} />}
          />
          <Route
            path={`${match.url}elements`}
            render={props => <Elements{...props} />}
          />
          <Route
            path={`${match.url}elements2`}
            render={props => <Elements2{...props} />}
          />
          <Route
            path={`${match.url}contactus`}
            render={props => <ContactUs{...props} />}
          />
          <Route
            path={`${match.url}dashboard`}
            render={props => <Dashboard{...props} />}
          />
          <Route
            path={`${match.url}transaction`}
            render={props => <Transaction{...props} />}
          />
          <Route
            path={`${match.url}sendmoney`}
            render={props => <SendMoney{...props} />}
          />
          <Route
            path={`${match.url}sendmoneyconfirm`}
            render={props => <SendMoneyConfirm{...props} />}
          />
          <Route
            path={`${match.url}sendmoneysuccess`}
            render={props => <SendMoneySucces{...props} />}
          />
          <Route
            path={`${match.url}requestmoney`}
            render={props => <RequestMoney{...props} />}
          />
          <Route
            path={`${match.url}requestmoneyconfirm`}
            render={props => <RequestMoneyConfirm{...props} />}
          />
          <Route
            path={`${match.url}requestmoneysuccess`}
            render={props => <RequestMoneySucces{...props} />}
          />
          <Route
            path={`${match.url}depositemoney`}
            render={props => <DepositeMoney{...props} />}
          />
          <Route
            path={`${match.url}depositemoneyconfirm`}
            render={props => <DepositeMoneyConfirm{...props} />}
          />
          <Route
            path={`${match.url}depositemoneysuccess`}
            render={props => <DepositeMoneySuccess{...props} />}
          />
          <Route
            path={`${match.url}withdrawmoney`}
            render={props => <WidthDrawMoney{...props} />}
          />
          <Route
            path={`${match.url}withdrawmoneyconfirm`}
            render={props => <WidthDrawMoneyConfirm{...props} />}
          />
          <Route
            path={`${match.url}withdrawmoneysucces`}
            render={props => <WidthDrawMoneySuccess{...props} />}
          />
          {/* <Redirect to="/error" /> */}

        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
