import PageIndicator from "@/components/PageIndicator/PageIndicator";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const list = [
    { name: "Location" },
    { name: "Dates" },
    { name: "Style" },
    { name: "Budget" },
    { name: "Tags" },
];

export default {
    title: "PageIndicator",
    component: PageIndicator,
} as ComponentMeta<typeof PageIndicator>;

const Template: ComponentStory<typeof PageIndicator> = (args) => (
    <PageIndicator {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    list: list,
};
