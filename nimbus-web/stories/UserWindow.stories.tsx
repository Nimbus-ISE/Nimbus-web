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
        email: "woosh@gmail.com",
        picture:
            "https://lh3.googleusercontent.com/a/AEdFTp6iLiISrRmP7tzgSxUEBAX9Vj_SFZproPM2vXcprG8=s96-c",
    },
};
