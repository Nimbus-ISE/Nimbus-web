import FullDetailCard from "@/components/FullDetailCard/FullDetailCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "FullDetailCard",
    component: FullDetailCard,
} as ComponentMeta<typeof FullDetailCard>;

const Template: ComponentStory<typeof FullDetailCard> = (args) => (
    <FullDetailCard {...args} />
);

export const RealDataExample = Template.bind({});

RealDataExample.args = {
    location: {
        loc_id: 24,
        loc_name: "Chamchuri Square",
        description:
            "Lively mall & gathering place for university students offering various shops, eateries & services.",
        province: "Krung Thep Maha Nakhon ",
        location_rating: "4.2",
        url: [
            "https://pmcu.co.th/wp-content/uploads/2022/08/220818-banner-csd-1024x480.jpg",
            "https://property.cbre.co.th/stocks/property/h0x532/5d/ji/fcyu5djib7/chamchuri.jpg",
            "https://pmcu.co.th/wp-content/uploads/2021/01/91583755.jpg",
        ],
        reviews: [
            {
                author: "Chattrarat Ponghiransmith",
                review_date: 1677024000000,
                review_text: "",
                review_rating: "5.0",
            },
            {
                author: "Fuad Saleh",
                review_date: 1677024000000,
                review_text: "",
                review_rating: "5.0",
            },
            {
                author: "komsan jun",
                review_date: 1677024000000,
                review_text:
                    "Convenient parking, wide, comfortable walk, delicious food, good atmosphere",
                review_rating: "5.0",
            },
            {
                author: "승규",
                review_date: 1677024000000,
                review_text:
                    "A shopping mall that is located after visiting the snake farm and going to the station. There are many Japanese restaurants and there are banks, so you can exchange money. The exchange rate is not very good. If you are not in a hurry, currency exchange is not recommended.",
                review_rating: "4.0",
            },
            {
                author: "Md. Khan",
                review_date: 1677110400000,
                review_text: "",
                review_rating: "5.0",
            },
        ],
    },
};
