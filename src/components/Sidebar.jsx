"use client";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import report from '../../public/report.svg'
import workspace from '../../public/Grid.svg'
import setting from '../../public/Settings.svg'
import logo from '../../public/zaglogo.svg'
import Image from "next/image";

const { Sider } = Layout;

const Sidebar = ({ children }) => {
  const router = useRouter();
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    setSelectedKeys([router.pathname]);
  }, [router.pathname]);

  const handleMenuClick = (key) => {
    router.push(key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="bg">
      <Layout style={{} } className="site-layout">
        <Sider
          style={{
              background: colorBgContainer,
              margin: "0px",
            }}
          className="min-h-screen"
        >
            <div className="flex justify-center items-center">
                <Image src={logo} className="mt-5 mb-8" alt="" />,
            </div>
          <Menu
            selectedKeys={selectedKeys}
            onClick={({ key }) => {
              handleMenuClick(key);
            }}
            mode="inline"
            defaultSelectedKeys={["2"]}
            items={[
              {
                key: "#",
                icon: <Image src={report} alt="" />,
                label: "Reports",
              },
              {
                key: "/home",
                icon: <Image src={workspace} alt="" />,
                label: "Workspace",
                className:"bg-indigo-100 text-blue-600"
              },
              {
                key: "/",
                icon: <Image src={setting} alt="" />,
                label: "Setting",
              },
              ]}
          />
        </Sider>

        
        <div
          className=""
          style={{
            // background: "linear-gradient(180deg, #FFF 0%, #F1FBFF 100%)",
            width: "100%"
            // overflow: "initial",
          }}
        >
          <main>{children}</main>
        </div>
      </Layout>
    </div>
  );
};

export default Sidebar;
