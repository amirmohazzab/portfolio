import {
    HomeRounded,
    PersonOutlined,
    TextSnippetRounded,
    TerminalRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {

    const tabs = [
        {label: "Main", icon: <HomeRounded />, ...tabProps(0)},
        {label: "About", icon: <PersonOutlined />, ...tabProps(1)},
        {label: "Resume", icon: <TextSnippetRounded />, ...tabProps(2)},
        {label: "Projects", icon: <TerminalRounded />, ...tabProps(3)},
        {label: "Contact", icon: <ConnectWithoutContactRounded />, ...tabProps(4)},
    ];

    return tabs;
}