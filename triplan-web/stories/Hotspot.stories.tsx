import Hotspot from "@/components/Hotspot";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { places } from "@/public/data";

export default {
    title: "Hotspot",
    component: Hotspot,
} as ComponentMeta<typeof Hotspot>;

const Template: ComponentStory<typeof Hotspot> = (args) => (
    <Hotspot {...args} />
);

export const Primary = Template.bind({});

Primary.args = places;
