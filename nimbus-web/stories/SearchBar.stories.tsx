import SearchBar from "@/components/Search/SearchBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "SearchBar",
    component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar />;

export const Primary = Template.bind({});
