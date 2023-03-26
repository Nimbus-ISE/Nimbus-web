import LocationInput from "@/components/FormsElements/LocationInput";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "LocationInput",
    component: LocationInput,
} as ComponentMeta<typeof LocationInput>;

const Template: ComponentStory<typeof LocationInput> = (args) => (
    <LocationInput />
);

export const Location = Template.bind({});
