import Navbar from "../components/Navbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const user = {
    family_name: "P",
    given_name: "Nattakit",
    locale: "en",
    name: "Nattakit P",
    nickname: "search35453",
    picture:
        "https://lh3.googleusercontent.com/a/AEdFTp5a3gVM3PRFVmKChA74uW-FS210zmx4Lf7DAWwl4w=s96-c",
    updated_at: "2023-01-24T01:01:39.063Z",
};

export default {
    title: "Navbar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const login = Template.bind({});
export const logout = Template.bind({});
export const loginLoading = Template.bind({});
export const logoutLoading = Template.bind({});

login.args = {
    user: undefined,
    isLoading: false,
};

logout.args = {
    user: user,
    isLoading: false,
};

loginLoading.args = {
    user: undefined,
    isLoading: true,
};

logoutLoading.args = {
    user: user,
    isLoading: true,
};
