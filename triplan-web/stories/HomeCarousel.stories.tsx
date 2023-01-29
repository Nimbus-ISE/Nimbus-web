import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "HomeCarousel",
    component: HomeCarousel,
} as ComponentMeta<typeof HomeCarousel>;

const Template: ComponentStory<typeof HomeCarousel> = (args) => (
    <HomeCarousel />
);

export const Primary = Template.bind({});
