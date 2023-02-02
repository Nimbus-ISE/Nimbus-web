import PageIndicator from "@/components/PageIndicator/PageIndicator";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const formArr: Array<IForm> = [
    { type: "Location", title: "Where would you like to go?" },
    { type: "Dates", title: "Select the dates" },
    { type: "Style", title: "What kind of trip?" },
    { type: "Budget", title: "What is your budget?" },
    { type: "Tags", title: "Select some tags" },
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
    formArr: formArr,
};
