import CardItem from "@/components/SliderList/CardItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "CardItem",
    component: CardItem,
} as ComponentMeta<typeof CardItem>;

const Template: ComponentStory<typeof CardItem> = (args) => (
    <CardItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    image: "/images/bg.webp",
    name: "SAGITTARIUS A",
};
