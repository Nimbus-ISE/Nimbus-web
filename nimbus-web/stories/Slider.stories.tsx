import Slider from "@/components/SliderList/Slider";
import { mockLocations } from "@/test_data/locationList";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Slider",
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: "TRENDING",
    shape: "rectangle",
    locationList: mockLocations,
};
