import { ComponentStory, ComponentMeta } from "@storybook/react";
import FolderSmall from "@/components/PlanTab/FolderSmall";

export default {
    title: "FolderSmall",
    component: FolderSmall,
} as ComponentMeta<typeof FolderSmall>;

const Template: ComponentStory<typeof FolderSmall> = (args) => (
    <div className="grid place-items-center min-h-screen h-full pt-24 bg-green-300 text-black grid-cols-12">
        <FolderSmall {...args} />
    </div>
);

export const Primary = Template.bind({ props: "lorem" });
