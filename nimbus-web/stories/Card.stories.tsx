import Card from "@/components/Cards/Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const card = Template.bind({});

card.args = {
    location: {
        loc_id: 27,
        loc_name: "centralwOrld",
        full_tag_list: "Must See Attraction,Shopping,Mall,Luxury,Temple",
        filtered_tag_list: "Must See Attraction,Mall,Luxury",
        url: "https://a.cdn-hotels.com/gdcs/production56/d37/63a84547-cfdd-472b-9f7e-3e43481740a0.jpg",
        est_time_stay: 3,
        price_level: 0,
        lat: 13.7460002,
        lng: 100.5399162,
        rating: "4.5",
    },
};
