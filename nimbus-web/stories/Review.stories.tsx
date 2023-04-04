import Review from "@/components/PlanTab/Popups/Review";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Review",
    component: Review,
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    review: {
        author: "John Taobin",
        review_date: 1,
        review_rating: "4.4",
        review_text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cupiditate nesciunt, nostrum hic nulla, porro delectus harum veritatis odio placeat veniam inventore quibusdam. Harum optio quos facilis, deserunt porro accusamus?",
    },
};
