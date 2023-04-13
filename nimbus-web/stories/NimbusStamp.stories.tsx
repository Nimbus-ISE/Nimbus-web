import NimbusStamp from "@/components/NimbusStamp";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "NimbusStamp",
    component: NimbusStamp,
} as ComponentMeta<typeof NimbusStamp>;

const Template: ComponentStory<typeof NimbusStamp> = (args) => <NimbusStamp />;

export const Location = Template.bind({});
