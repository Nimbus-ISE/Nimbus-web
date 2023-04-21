import ProfileCard from "@/components/ProfileCard/ProfileCard";
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
    user: {
        family_name: "P",
        given_name: "Nattakit",
        locale: "en",
        name: "Nattakit P",
        nickname: "search35453",
        picture:
            "https://lh3.googleusercontent.com/a/AEdFTp5a3gVM3PRFVmKChA74uW-FS210zmx4Lf7DAWwl4w=s96-c",
        updated_at: "2023-01-24T01:01:39.063Z",
        "https://nimbus-ise.vercel.app/premium_type": "None",
        "https://nimbus-ise.vercel.app/premium_expire": 1682047709922,
        "https://nimbus-ise.vercel.app/email": "hello123@gmail.com",
    },
};
