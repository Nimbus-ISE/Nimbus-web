import { ComponentStory, ComponentMeta } from "@storybook/react";
import FolderFull from "@/components/PlanTab/FolderFull";

export default {
    title: "FolderFull",
    component: FolderFull,
} as ComponentMeta<typeof FolderFull>;

const Template: ComponentStory<typeof FolderFull> = (args) => (
    <FolderFull {...args} />
);

export const Primary = Template.bind({ props: "lorem" });
