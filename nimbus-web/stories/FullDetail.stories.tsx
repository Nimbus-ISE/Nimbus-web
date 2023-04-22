import FullDetailCard from "@/components/FullDetailCard/FullDetailCard";
import Profile from "@/pages/profile";
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
        loc_id: 41,
        loc_name: "MBK Center",
        address: "444 Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330",
        lat: 13.7447982,
        lng: 100.5300244,
        description:
            "Sprawling shopping complex with over 2000 shops, restaurants, cafes & department stores.",
        province: "Krung Thep Maha Nakhon ",
        location_rating: "4.3",
        tags: "Must See Attraction, Shopping, Mall, Luxury, Market",
        url: [
            "https://a.cdn-hotels.com/gdcs/production26/d417/16464b49-90e2-4dbf-b39f-7625e1f796cb.jpg",
            "https://www.prachachat.net/wp-content/uploads/2022/01/MBK-Center.jpg",
        ],
        reviews: [
            {
                author: "Md Arifur Rahman",
                review_date: 1677196800000,
                review_text: "",
                review_rating: "4.0",
                review_url:
                    "https://lh3.googleusercontent.com/a-/ACB-R5RZ64LCQkwHiQ3hUc2D-KDJign0CVS2v2ZLP3_YPw=s128-c0x00000000-cc-rp-mo-ba3",
            },
            {
                author: "Daniel Kadlec",
                review_date: 1677196800000,
                review_text: "",
                review_rating: "3.0",
                review_url:
                    "https://lh3.googleusercontent.com/a-/ACB-R5Tcl41lGuBXYV7qcfA9oeoHc2BAJfx6H9GLfa_gPg=s128-c0x00000000-cc-rp-mo-ba4",
            },
            {
                author: "Jaymin Sukhadia",
                review_date: 1677196800000,
                review_text:
                    "Amazing complex full of fashion and electronics hubs to choose from.. you will find the best products at very reasonable prices.. off course you can bargain with your skills. A must visit place if you are in Bangkok. You can also rent stroller for your little one from the information desk. It’s free of cost, you just need to fill out one form and deposit any of your ID card for security purpose. MBK Center has got many options for food and drinks on each level.",
                review_rating: "5.0",
                review_url:
                    "https://lh3.googleusercontent.com/a-/ACB-R5T_S6A8G48ZzF7775j2pTnqXbNB3QY0Nf2vhqr0=s128-c0x00000000-cc-rp-mo-ba3",
            },
            {
                author: "B. Wyss",
                review_date: 1677196800000,
                review_text: "Hier findetsich alles wenn man Shoppen will!",
                review_rating: "4.0",
                review_url:
                    "https://lh3.googleusercontent.com/a-/ACB-R5T8d67zT79GdFTei7TMXWLFAygE_G5v-K-6JC6ptx4=s128-c0x00000000-cc-rp-mo-ba3",
            },
            {
                author: "Ahmed Mandira",
                review_date: 1677196800000,
                review_text: "",
                review_rating: "5.0",
                review_url:
                    "https://lh3.googleusercontent.com/a-/ACB-R5RfcMhpldGniDS0PIIdMlBLEckc4AnIXhyQclyuxw=s128-c0x00000000-cc-rp-mo-ba2",
            },
        ],
    },
};
