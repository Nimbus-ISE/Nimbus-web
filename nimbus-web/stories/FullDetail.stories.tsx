import FullDetailCard from "@/components/FullDetailCard/FullDetailCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "FullDetailCard",
    component: FullDetailCard,
} as ComponentMeta<typeof FullDetailCard>;

const Template: ComponentStory<typeof FullDetailCard> = (args) => (
    <FullDetailCard {...args} />
);

export const fullDetailCard = Template.bind({});

fullDetailCard.args = {
    data: {
        title: "test",
        image: ["", ""],
        address: "test",
        openTime: "test",
        tag: "test",
        rate: 5,
        info: "test",
    },
};
