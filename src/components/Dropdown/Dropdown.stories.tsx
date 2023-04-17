import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "ReactComponentLibrary/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: "Click me!",
  child: "Hello world!",
};
