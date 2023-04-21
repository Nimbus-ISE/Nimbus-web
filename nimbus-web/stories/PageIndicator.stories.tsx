import PageIndicator from "@/components/PageIndicator/PageIndicator";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { formArr } from "@/misc";

export default {
    title: "PageIndicator",
    component: PageIndicator,
} as ComponentMeta<typeof PageIndicator>;

const Template: ComponentStory<typeof PageIndicator> = (args) => (
    <PageIndicator {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    formArr: formArr,
};
