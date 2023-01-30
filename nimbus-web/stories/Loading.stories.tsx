import Loading from "../components/Loading";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Loading",
    component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading />;

export const Primary = Template.bind({});
