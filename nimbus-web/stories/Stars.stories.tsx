import Stars from "@/components/Stars";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Stars",
    component: Stars,
} as ComponentMeta<typeof Stars>;

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;

export const Primary = Template.bind({});

Primary.args = { size: 96, rating: 4.4 };
