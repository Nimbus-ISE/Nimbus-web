import UserWindow from "@/components/Navbar/UserWindow";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "UserWindow",
    component: UserWindow,
} as ComponentMeta<typeof UserWindow>;

const Template: ComponentStory<typeof UserWindow> = (args) => (
    <UserWindow {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    user: {
        name: "Woosh",
        "https://nimbus-ise.vercel.app/email": "woosh@gmail.com",
        picture:
            "https://lh3.googleusercontent.com/a/AGNmyxZdUFO-hnLZQ1VO-zR7aMwe6_UVV_ShEIcJ4lAdti0=s96-c",
        "https://nimbus-ise.vercel.app/premium_type": "None",
        "https://nimbus-ise.vercel.app/premium_expire": 1680912000000,
    },
};
