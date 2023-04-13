import Profile from "@/components/Profile";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Profile",
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
    <Profile {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    user: {
        family_name: "P",
        given_name: "Nattakit",
        locale: "en",
        name: "Nattakit P",
        nickname: "search35453",
        picture:
            "https://lh3.googleusercontent.com/a/AEdFTp5a3gVM3PRFVmKChA74uW-FS210zmx4Lf7DAWwl4w=s96-c",
        updated_at: "2023-01-24T01:01:39.063Z",
    },
};
