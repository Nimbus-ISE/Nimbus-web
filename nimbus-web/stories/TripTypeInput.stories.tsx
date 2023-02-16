import TripTypeInput from "@/components/FormsElements/TripTypeInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "TripTypeInput",
    component: TripTypeInput,
} as ComponentMeta<typeof TripTypeInput>;

const Template: ComponentStory<typeof TripTypeInput> = (args) => (
    <TripTypeInput {...args} />
);

export const TripType = Template.bind({});
