import TagsSelection from "@/components/FormsElements/TagsSelection";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "TagsSelection",
    component: TagsSelection,
} as ComponentMeta<typeof TagsSelection>;

const Template: ComponentStory<typeof TagsSelection> = (args) => (
    <TagsSelection />
);

export const Tags = Template.bind({});
