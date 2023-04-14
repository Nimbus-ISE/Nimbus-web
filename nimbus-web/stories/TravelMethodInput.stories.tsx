import TravelMethodInput from "@/components/FormsElements/TravelMethodInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "TravelMethodInput",
    component: TravelMethodInput,
} as ComponentMeta<typeof TravelMethodInput>;

const Template: ComponentStory<typeof TravelMethodInput> = (args) => (
    <TravelMethodInput />
);

export const Distance = Template.bind({});
