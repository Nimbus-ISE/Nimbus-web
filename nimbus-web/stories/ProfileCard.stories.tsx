import ProfileCard from "@/components/Slider";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "ProfileCard",
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    image: "/images/bg.webp",
    name: "SAGITTARIUS A",
};
