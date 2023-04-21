import FullDetailCard from "@/components/FullDetailCard/FullDetailCard";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import Profile from "@/pages/profile";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "ProfileCard",
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const RealDataExample = Template.bind({});

RealDataExample.args = {
    data: {
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F11%2F22%2Flove-is-blind-bartise-112222-3.jpg",
        name: "Chicken Soup",
        createAt: "01/01/2023",
    },
};
