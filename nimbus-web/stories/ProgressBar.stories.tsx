import ProgressBar from "@/components/PageIndicator/ProgressBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "ProgressBar",
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <ProgressBar {...args} />
);

export const Primary = Template.bind({});

Primary.args = { ratio: 0.5 };
