/* eslint-disable react/prop-types */
/* eslint-disable no-sparse-arrays */
import { Divider, Spacer, Stack } from "@chakra-ui/layout";
import { RiDashboardLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import NavItem from "./nav-item";
// import SectionDivider from "./section-divider";
// import { FaIntercom, FaJira, FaSlack } from "react-icons/fa";
import IntegrationItem from "./integration-item";
import { FiPower } from "react-icons/fi";
import CollapsedItem from "./collapsed-item";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { routes } = getRoutesAndIntegrations();
  const isOpen = useSelector(state => state.sidebar.isOpen);
  
  const NavAction = isOpen ? CollapsedItem : NavItem;
  const IntegrationAction = isOpen ? CollapsedItem : IntegrationItem;

  return (
    <Stack
      layerStyle="card"
      rounded="xl"
      w={isOpen ? "60px" : "250px"}
      transition="width .4s ease-in-out"
      py={8}
      shadow="md"
      minH="full"
      spacing={2}
      fontSize="sm"
      display={["none", , "initial"]}
      overflowX={isOpen ? "initial" : "clip"}
      whiteSpace="nowrap"
    >
      {routes.map((props, rid) => (
        <NavAction
          key={`nav-item-${rid}`}
          active={window.location.pathname === props.href} // You may need to replace this line with your own routing logic
          {...props}
        />
      ))}
      {/* {isOpen ? <Divider /> : <SectionDivider>Integrations</SectionDivider>}
      {integrations.map((props, iid) => (
        <IntegrationAction key={`int-item-${iid}`} {...props} />
      ))} */}
      <Spacer />
      <Divider display={{ md: "none" }} />
      <NavAction name="Logout" icon={FiPower} />
    </Stack>
  );
};

export default Sidebar;

function getRoutesAndIntegrations() {
  const routes = [
    { name: "Dashboard", href: "/dashboard/department", icon: RiDashboardLine },
    { name: "Profile", href: "/dashboard/department/profile", icon: CiUser },
    { name: "Courier", href: "/dashboard/department/courier", icon: TbTruckDelivery },
    { name: "Tracker", href: "/dashboard/department/tracker", icon: CiLocationOn },
  ];

  return { routes };
}