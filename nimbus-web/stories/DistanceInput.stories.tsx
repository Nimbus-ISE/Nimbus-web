import DistanceInput from "@/components/FormsElements/DistanceInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "DistanceInput",
    component: DistanceInput,
} as ComponentMeta<typeof DistanceInput>;

const Template: ComponentStory<typeof DistanceInput> = (args) => (
    <DistanceInput {...args} />
);

export const Distance = Template.bind({});
