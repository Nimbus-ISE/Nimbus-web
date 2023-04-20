import UpgradeCard from "@/components/UpgradeCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "UpgradeCard",
    component: UpgradeCard,
} as ComponentMeta<typeof UpgradeCard>;

const Template: ComponentStory<typeof UpgradeCard> = (args) => (
    <UpgradeCard {...args} />
);

export const Starter = Template.bind({});
export const Monthly = Template.bind({});
export const Yearly = Template.bind({});

const data = [
    {
        backgroundColor: "#ffffff",
        color: "#333333",
        planName: "STARTER",
        priceStr: "FREE",
        list: [
            "1 Plan Save Slot",
            "Plan up to 3 days per trip",
            "View other users profile",
        ],
    },
    {
        backgroundColor: "#00c2b2",
        color: "#ffffff",
        planName: "MONTHLY",
        priceStr: "150฿",
        list: [
            "10 Plan Save Slot",
            "Plan up to 1 month per trip",
            "View other users save plan",
        ],
        buttonVisible: true,
    },
    {
        backgroundColor: "#00c4cc",
        color: "#ffffff",
        planName: "YEARLY",
        priceStr: "100฿",
        list: [
            "Unlimited Plan Save Slot",
            "Plan up to any duration",
            "All benefits of monthly plan",
        ],
        buttonVisible: true,
    },
];

Starter.args = data[0];

Monthly.args = data[1];

Yearly.args = data[2];
