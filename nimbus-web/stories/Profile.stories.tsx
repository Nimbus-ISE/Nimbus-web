import Profile from "@/components/Profile";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { customClaims } from "@/misc";

export default {
    title: "Profile",
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
    <Profile {...args} />
);

export const ShortPlanList = Template.bind({});
export const LongPlanList = Template.bind({});

ShortPlanList.args = {
    user: {
        ...customClaims,
        family_name: "P",
        given_name: "Nattakit",
        locale: "en",
        name: "Nattakit P",
        nickname: "search35453",
        picture:
            "https://lh3.googleusercontent.com/a/AEdFTp5a3gVM3PRFVmKChA74uW-FS210zmx4Lf7DAWwl4w=s96-c",
        updated_at: "2023-01-24T01:01:39.063Z",
    },
    planList: [
        {
            name: "test plan",
            day_plan: [[]],
            trip_params: {
                must_include: 50,
                start_date: "2023-04-20T00:00:00.000",
                end_date: "2023-04-22T00:00:00.000",
                trip_pace: 0,
                budget: 1,
                travel_method: "walk",
                tags: "Sports,Family,Hidden Gem,Must See Attraction",
            },
        },
        {
            name: "test plan 1",
            day_plan: [[]],
            trip_params: {
                must_include: 44,
                start_date: "2023-04-21T00:00:00.000",
                end_date: "2023-04-25T00:00:00.000",
                trip_pace: 1,
                budget: 3,
                travel_method: "drive",
                tags: "Nightlife,Family,Hidden Gem",
            },
        },
        {
            name: "test plan 2",
            day_plan: [[]],
            trip_params: {
                must_include: 78,
                start_date: "2023-05-12T00:00:00.000",
                end_date: "2023-05-14T00:00:00.000",
                trip_pace: 2,
                budget: 0,
                travel_method: "walk",
                tags: "Restaurant,Hidden Gem",
            },
        },
    ],
    recentlyViewedList: [
        {
            loc_id: 51,
            loc_name: "Wat Hua Lamphong",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Bkkwathualamphong090522a.jpg/1200px-Bkkwathualamphong090522a.jpg",
            view_count: 25,
        },
        {
            loc_id: 28,
            loc_name: "Samyan Mitrtown",
            url: "https://media.timeout.com/images/105781895/image.jpg",
            view_count: 20,
        },
        {
            loc_id: 34,
            loc_name: "CU Centenary Park",
            url: "https://ideas.ted.com/wp-content/uploads/sites/3/2018/07/featured_art_cu100_042.jpg",
            view_count: 19,
        },
        {
            loc_id: 29,
            loc_name: "Siam Paragon",
            url: "https://www.rli.uk.com/wp-content/uploads/2023/02/apply-tourist-card-to.jpg",
            view_count: 18,
        },
        {
            loc_id: 24,
            loc_name: "Chamchuri Square",
            url: "https://pmcu.co.th/wp-content/uploads/2022/08/220818-banner-csd-1024x480.jpg",
            view_count: 18,
        },
        {
            loc_id: 41,
            loc_name: "MBK Center",
            url: "https://a.cdn-hotels.com/gdcs/production26/d417/16464b49-90e2-4dbf-b39f-7625e1f796cb.jpg",
            view_count: 16,
        },
        {
            loc_id: 43,
            loc_name: "SEA LIFE Bangkok Ocean World",
            url: "https://img2.10bestmedia.com/Images/Photos/248598/p-siam-ocean-world_55_660x440_201406010221.jpg",
            view_count: 10,
        },
        {
            loc_id: 25,
            loc_name: "Chulalongkorn University",
            url: "https://www.chula.ac.th/wp-content/uploads/2018/01/chula-faculty-arts-hero-desktop-1024x640.jpg",
            view_count: 9,
        },
        {
            loc_id: 54,
            loc_name: "Khun Nai Talae Dong Seafood Buffet",
            url: "https://p4.isanook.com/tr/0/ud/286/1432493/gtrhy.jpg",
            view_count: 8,
        },
        {
            loc_id: 102,
            loc_name: "ถิงถิง Ting Ting บิงซูน้ำขิง บรรทัดทอง",
            url: "https://img.bester-global.com/report_images/large/945054.jpg",
            view_count: 8,
        },
        {
            loc_id: 27,
            loc_name: "centralwOrld",
            url: "https://a.cdn-hotels.com/gdcs/production56/d37/63a84547-cfdd-472b-9f7e-3e43481740a0.jpg",
            view_count: 8,
        },
        {
            loc_id: 47,
            loc_name: "U Center 1",
            url: "https://1.bp.blogspot.com/-YuMzU6nc9p0/VeRyHZ3KDzI/AAAAAAAAALo/w8wRbTX3084/s1600/_DSC8290.JPG",
            view_count: 7,
        },
        {
            loc_id: 72,
            loc_name: "Sam Yan Market",
            url: "https://i.ytimg.com/vi/1kPo3BCVr6M/maxresdefault.jpg",
            view_count: 6,
        },
        {
            loc_id: 42,
            loc_name: "Bangkok Art & Culture Centre",
            url: "https://a.cdn-hotels.com/gdcs/production195/d1488/9d35a7f4-4e03-400f-9d19-ddded423b381.jpg",
            view_count: 5,
        },
        {
            loc_id: 52,
            loc_name: "Dragon Town",
            url: "https://pmcu.co.th/wp-content/uploads/2021/06/209545642_1874832786029015_2092925874511066902_n-1024x683.jpg",
            view_count: 4,
        },
    ],
};

LongPlanList.args = {
    user: {
        ...customClaims,
        family_name: "P",
        given_name: "Nattakit",
        locale: "en",
        name: "Nattakit P",
        nickname: "search35453",
        picture:
            "https://lh3.googleusercontent.com/a/AEdFTp5a3gVM3PRFVmKChA74uW-FS210zmx4Lf7DAWwl4w=s96-c",
        updated_at: "2023-01-24T01:01:39.063Z",
    },
    planList: [
        {
            name: "test plan",
            day_plan: [[]],
            trip_params: {
                must_include: 50,
                start_date: "2023-04-20T00:00:00.000",
                end_date: "2023-04-22T00:00:00.000",
                trip_pace: 0,
                budget: 1,
                travel_method: "walk",
                tags: "Sports,Family,Hidden Gem,Must See Attraction",
            },
        },
        {
            name: "test plan 1",
            day_plan: [[]],
            trip_params: {
                must_include: 44,
                start_date: "2023-04-21T00:00:00.000",
                end_date: "2023-04-25T00:00:00.000",
                trip_pace: 1,
                budget: 3,
                travel_method: "drive",
                tags: "Nightlife,Family,Hidden Gem",
            },
        },
        {
            name: "test plan 2",
            day_plan: [[]],
            trip_params: {
                must_include: 78,
                start_date: "2023-05-12T00:00:00.000",
                end_date: "2023-05-14T00:00:00.000",
                trip_pace: 2,
                budget: 0,
                travel_method: "walk",
                tags: "Restaurant,Hidden Gem",
            },
        },
        {
            name: "test plan 3",
            day_plan: [[]],
            trip_params: {
                must_include: 22,
                start_date: "2023-04-20T00:00:00.000",
                end_date: "2023-04-22T00:00:00.000",
                trip_pace: 0,
                budget: 1,
                travel_method: "walk",
                tags: "Sports,Family,Hidden Gem,Must See Attraction",
            },
        },
        {
            name: "test plan 4",
            day_plan: [[]],
            trip_params: {
                must_include: 33,
                start_date: "2023-04-21T00:00:00.000",
                end_date: "2023-04-25T00:00:00.000",
                trip_pace: 1,
                budget: 3,
                travel_method: "drive",
                tags: "Nightlife,Family,Hidden Gem",
            },
        },
        {
            name: "test plan 5",
            day_plan: [[]],
            trip_params: {
                must_include: 55,
                start_date: "2023-05-12T00:00:00.000",
                end_date: "2023-05-14T00:00:00.000",
                trip_pace: 2,
                budget: 0,
                travel_method: "walk",
                tags: "Restaurant,Hidden Gem",
            },
        },
        {
            name: "test plan 6",
            day_plan: [[]],
            trip_params: {
                must_include: 2,
                start_date: "2023-04-20T00:00:00.000",
                end_date: "2023-04-22T00:00:00.000",
                trip_pace: 0,
                budget: 1,
                travel_method: "walk",
                tags: "Sports,Family,Hidden Gem,Must See Attraction",
            },
        },
        {
            name: "test plan 7",
            day_plan: [[]],
            trip_params: {
                must_include: 23,
                start_date: "2023-04-21T00:00:00.000",
                end_date: "2023-04-25T00:00:00.000",
                trip_pace: 1,
                budget: 3,
                travel_method: "drive",
                tags: "Nightlife,Family,Hidden Gem",
            },
        },
        {
            name: "test plan 8",
            day_plan: [[]],
            trip_params: {
                must_include: 67,
                start_date: "2023-05-12T00:00:00.000",
                end_date: "2023-05-14T00:00:00.000",
                trip_pace: 2,
                budget: 0,
                travel_method: "walk",
                tags: "Restaurant,Hidden Gem",
            },
        },
    ],
    recentlyViewedList: [
        {
            loc_id: 51,
            loc_name: "Wat Hua Lamphong",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Bkkwathualamphong090522a.jpg/1200px-Bkkwathualamphong090522a.jpg",
            view_count: 25,
        },
        {
            loc_id: 28,
            loc_name: "Samyan Mitrtown",
            url: "https://media.timeout.com/images/105781895/image.jpg",
            view_count: 20,
        },
        {
            loc_id: 34,
            loc_name: "CU Centenary Park",
            url: "https://ideas.ted.com/wp-content/uploads/sites/3/2018/07/featured_art_cu100_042.jpg",
            view_count: 19,
        },
        {
            loc_id: 29,
            loc_name: "Siam Paragon",
            url: "https://www.rli.uk.com/wp-content/uploads/2023/02/apply-tourist-card-to.jpg",
            view_count: 18,
        },
        {
            loc_id: 24,
            loc_name: "Chamchuri Square",
            url: "https://pmcu.co.th/wp-content/uploads/2022/08/220818-banner-csd-1024x480.jpg",
            view_count: 18,
        },
        {
            loc_id: 41,
            loc_name: "MBK Center",
            url: "https://a.cdn-hotels.com/gdcs/production26/d417/16464b49-90e2-4dbf-b39f-7625e1f796cb.jpg",
            view_count: 16,
        },
        {
            loc_id: 43,
            loc_name: "SEA LIFE Bangkok Ocean World",
            url: "https://img2.10bestmedia.com/Images/Photos/248598/p-siam-ocean-world_55_660x440_201406010221.jpg",
            view_count: 10,
        },
        {
            loc_id: 25,
            loc_name: "Chulalongkorn University",
            url: "https://www.chula.ac.th/wp-content/uploads/2018/01/chula-faculty-arts-hero-desktop-1024x640.jpg",
            view_count: 9,
        },
        {
            loc_id: 54,
            loc_name: "Khun Nai Talae Dong Seafood Buffet",
            url: "https://p4.isanook.com/tr/0/ud/286/1432493/gtrhy.jpg",
            view_count: 8,
        },
        {
            loc_id: 102,
            loc_name: "ถิงถิง Ting Ting บิงซูน้ำขิง บรรทัดทอง",
            url: "https://img.bester-global.com/report_images/large/945054.jpg",
            view_count: 8,
        },
        {
            loc_id: 27,
            loc_name: "centralwOrld",
            url: "https://a.cdn-hotels.com/gdcs/production56/d37/63a84547-cfdd-472b-9f7e-3e43481740a0.jpg",
            view_count: 8,
        },
        {
            loc_id: 47,
            loc_name: "U Center 1",
            url: "https://1.bp.blogspot.com/-YuMzU6nc9p0/VeRyHZ3KDzI/AAAAAAAAALo/w8wRbTX3084/s1600/_DSC8290.JPG",
            view_count: 7,
        },
        {
            loc_id: 72,
            loc_name: "Sam Yan Market",
            url: "https://i.ytimg.com/vi/1kPo3BCVr6M/maxresdefault.jpg",
            view_count: 6,
        },
        {
            loc_id: 42,
            loc_name: "Bangkok Art & Culture Centre",
            url: "https://a.cdn-hotels.com/gdcs/production195/d1488/9d35a7f4-4e03-400f-9d19-ddded423b381.jpg",
            view_count: 5,
        },
        {
            loc_id: 52,
            loc_name: "Dragon Town",
            url: "https://pmcu.co.th/wp-content/uploads/2021/06/209545642_1874832786029015_2092925874511066902_n-1024x683.jpg",
            view_count: 4,
        },
    ],
};
