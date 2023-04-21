import SavedPlanCard from "@/components/Cards/SavedPlanCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "SavedPlanCard",
    component: SavedPlanCard,
} as ComponentMeta<typeof SavedPlanCard>;

const Template: ComponentStory<typeof SavedPlanCard> = (args) => (
    <SavedPlanCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    planParams: {
        name: "test plan",
        day_plan: [
            [
                {
                    type: "location",
                    loc_id: 34,
                    arrival_time: "09:00:00",
                    leave_time: "10:30:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 180,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 46,
                    arrival_time: "10:33:00",
                    leave_time: "11:18:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 240,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 110,
                    arrival_time: "11:22:00",
                    leave_time: "12:22:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 0,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 107,
                    arrival_time: "12:22:00",
                    leave_time: "13:07:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 0,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 50,
                    arrival_time: "13:07:00",
                    leave_time: "14:37:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 0,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 104,
                    arrival_time: "14:37:00",
                    leave_time: "15:22:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 360,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 55,
                    arrival_time: "15:28:00",
                    leave_time: "16:28:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 120,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 105,
                    arrival_time: "16:30:00",
                    leave_time: "17:00:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 60,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 94,
                    arrival_time: "17:01:00",
                    leave_time: "17:16:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 240,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 49,
                    arrival_time: "17:20:00",
                    leave_time: "17:50:00",
                },
            ],
            [
                {
                    type: "location",
                    loc_id: 52,
                    arrival_time: "09:00:00",
                    leave_time: "11:00:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 60,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 113,
                    arrival_time: "11:01:00",
                    leave_time: "13:01:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 120,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 48,
                    arrival_time: "13:03:00",
                    leave_time: "14:03:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 300,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 72,
                    arrival_time: "14:08:00",
                    leave_time: "15:38:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 780,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 51,
                    arrival_time: "15:51:00",
                    leave_time: "16:21:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 360,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 24,
                    arrival_time: "16:27:00",
                    leave_time: "17:57:00",
                },
            ],
            [
                {
                    type: "location",
                    loc_id: 74,
                    arrival_time: "09:00:00",
                    leave_time: "10:30:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 2220,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 76,
                    arrival_time: "11:07:00",
                    leave_time: "11:52:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 240,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 109,
                    arrival_time: "11:56:00",
                    leave_time: "12:56:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 720,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 41,
                    arrival_time: "13:08:00",
                    leave_time: "15:08:00",
                },
                {
                    type: "travel_dur",
                    travel_dur: 960,
                    travel_type: "walk",
                },
                {
                    type: "location",
                    loc_id: 28,
                    arrival_time: "15:24:00",
                    leave_time: "17:54:00",
                },
            ],
        ],
        trip_params: {
            must_include: 50,
            start_date: "2023-04-20T00:00:00.000",
            end_date: "2023-04-22T00:00:00.000",
            trip_pace: 1,
            budget: 2,
            travel_method: "walk",
            tags: "Sports,Nightlife,Family,Hidden Gem",
        },
    },
};
