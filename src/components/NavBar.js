import React from 'react';
import { BellOutlined, HeartOutlined, MoneyCollectOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import MenuItem from './MenuItem';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const NavBar = () => {

  const auth = localStorage.getItem("IS_AUTH");
  const username = localStorage.getItem("AUCTION_USER")
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("AUCTION_TOKEN");
    localStorage.removeItem("AUCTION_USER")
    localStorage.removeItem("IS_AUTH")
    navigate("/")

  }
  const handleLogin = () =>
  {
    navigate("/login")
  }

  return (
    < Layout >
      <Header className="header">
        <div className="logo" >
          <span style={{ color: 'white' }}>Antique Auction</span>

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ float: 'right', width: '500px' }}>
            <Menu.Item>
              <MenuItem icon={BellOutlined} value={"Notification"} />
            </Menu.Item>
            <Menu.Item>
              <MenuItem icon={HeartOutlined} value={"Interested"} />
            </Menu.Item>
            <Menu.Item>
              <MenuItem icon={MoneyCollectOutlined} value={"Your Bids"} />
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" icon={<UserOutlined />} title={username != null ? username : "Account"}>
              {auth &&
                <Menu.Item key="one" value="Profile" >
                  Profile
                </Menu.Item>
              }
              {
                auth ?
                  <Menu.Item key="two" value="Logout" onClick={handleLogout}>
                    Logout
                  </Menu.Item>
                  :
                  <Menu.Item key="three" value="Login" onClick={handleLogin}>
                    Login
                  </Menu.Item>
              }


            </Menu.SubMenu>
          </Menu>
        </div>
      </Header>
    </Layout >
  )
};

export default NavBar;