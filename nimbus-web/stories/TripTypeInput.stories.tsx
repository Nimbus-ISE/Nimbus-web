import TripPaceInput from "@/components/FormComponents/TripTypeInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "TripPaceInput",
    component: TripPaceInput,
} as ComponentMeta<typeof TripPaceInput>;

const Template: ComponentStory<typeof TripPaceInput> = (args) => (
    <TripPaceInput {...args} />
);

export const TripPace = Template.bind({});
