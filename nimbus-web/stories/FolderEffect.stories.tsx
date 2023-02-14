import FolderEffect from "@/components/Presets/FolderEffect";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "FolderEffect",
    component: FolderEffect,
} as ComponentMeta<typeof FolderEffect>;

const Template: ComponentStory<typeof FolderEffect> = (args) => (
    <FolderEffect />
);

export const Date = Template.bind({});
