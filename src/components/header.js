import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import About from '../pages/aboutUs/About';
import Contactus from '../pages/contactUs/Contactus';
import Home from '../pages/home/Home';
import CardDesign from '../pages/cardDesign/CardDesign';
import hallSearch from '../pages/hallSearch/Hall';
import './header.scss';
import logo from '../Assets/images/wh.png';
import Searchbar from './searchbar';
import Signup from '../pages/signup/Signup';
import SignIn from '../pages/signup/SignIn';
import Dealer from '../pages/Dealer/Dealer';
import DealerMain from '../pages/Dealer/DealerMain';
import UpdateProfile from '../pages/Dealer/Dealer-Dashboard/UpdateProfile';
import ViewProfile from '../pages/Dealer/Dealer-Dashboard/ViewProfile';
import AddServices from '../pages/Dealer/Dealer-Dashboard/AddServices';
import Orders from '../pages/Dealer/Dealer-Dashboard/Orders';
import viewServices from '../pages/Dealer/Dealer-Dashboard/ViewServices';
import ProtectiveRoute from './ProtectiveRoute';
import UpdateCustomerProfile from '../pages/Customer/UpdateProfile';
import CustomerOrdersView from '../pages/Customer/CustomerOrders';
import ViewCustomerProfile from '../pages/Customer/ViewProfile';
import CustomerMainPage from '../pages/Customer/Customer-main/Customer-main';
import Booking from '../pages/hallSearch/Booking';
import SaloonDealer from '../pages/saloonDealer/SaloonDealer';
import CarRental from '../pages/carRental/CarRental';
import cateringService from '../pages/cateringDealer/CateringDealer';
import photographyService from '../pages/photographyDealer/PhotographerDealer';
import Bookfood from '../pages/cateringDealer/Bookfood';
import Carbooking from '../pages/carRental/Carbooking';
import Bookingsaloon from '../pages/saloonDealer/Bookingsaloon';
import Bookphotographer from '../pages/photographyDealer/Bookingphotographer';
import viewOrderStatus from '../pages/Customer/ViewOrderStatus';
import Payment from '../pages/Customer/Payment';
import OrderStatus from '../pages/Dealer/Dealer-Dashboard/OrderStatus';
import AddHall from '../pages/Dealer/Dealer-Dashboard/AddHall';

const { SubMenu } = Menu;
const { Header, Content } = Layout;

function header2() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />

        <Menu
          theme="dark"
          className="main-navbar"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="0">
            <img className="logo-navbar" src={logo} alt="abc" />
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/home">
              <span className="page"> Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">
              <span className="page">About</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contact">
              <span className="page">Contact Us</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            className="page"
            title="Dealers"
            icon={<CaretDownOutlined />}
          >
            <Menu.ItemGroup key="g1">
              <Menu.Item key="5">
                <Link to="/photography">
                  <span className="photographerpage">Photographer</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/saloon-services">
                  <span className="saloonpage">Saloon</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/cateringservices">
                  <span>Catering</span>
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="7">
            <Link to="/cardDesigning">
              <span className="page">Card Design</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="17">
            <Link to="/sign-up">
              <span className="page">SignUp</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="8">
            <Searchbar />
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Layout style={{ background: 'white' }}>
          <Content />

          <Content
            className="site-layout-background"
            style={{ height: '1200px' }}
          >
            <Switch>
              <Route path="/contact" component={Contactus} />
              <Route path="/about" component={About} />

              <Route path="/cardDesigning" component={CardDesign} />
              <Route path="/hall-search" component={hallSearch} />
              <Route path="/sign-up" component={Signup} />

              <Route path="/sign-In" component={SignIn} />
              <Route path="/dealers" component={Dealer} />
              <ProtectiveRoute path="/dealer-main" component={DealerMain} />
              <Route path="/dealer-update-profile" component={UpdateProfile} />
              <Route path="/dealer-view-profile" component={ViewProfile} />
              <Route path="/dealer-add-services" component={AddServices} />

              <Route path="/dealer-view-orders" component={Orders} />
              <Route path="/dealer-view-services" component={viewServices} />
              <Route path="/customer-main" component={CustomerMainPage} />

              <Route path="/customer-profile" component={ViewCustomerProfile} />
              <Route
                path="/customer-update-profile"
                component={UpdateCustomerProfile}
              />
              <Route path="/customer-orders" component={CustomerOrdersView} />

              <Route path="/booking" component={Booking} />

              {/* saloon services */}
              <Route path="/saloon-services" component={SaloonDealer} />
              <Route path="/car-rental-services" component={CarRental} />
              <Route path="/cateringservices" component={cateringService} />
              <Route path="/photography" component={photographyService} />

              {/* //Booking */}
              <Route path="/book-catering" component={Bookfood} />
              <Route path="/car-booking" component={Carbooking} />
              <Route path="/booking-saloon" component={Bookingsaloon} />
              <Route
                path="/booking-photographer"
                component={Bookphotographer}
              />
              {/* //vieworderstatus */}
              <Route path="/view-Order-Status" component={viewOrderStatus} />
              <Route path="/customer-payment" component={Payment} />
              <Route path="/order-status" component={OrderStatus} />
              <Route path="/AddHall" component={AddHall} />

              <Route path={['/', '/home']} component={Home} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default header2;
