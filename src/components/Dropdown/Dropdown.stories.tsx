import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "ReactComponentLibrary/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ margin: "1em 0" }}>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Story style={{ margin: "0 auto" }} />
          <Story style={{ margin: "0 auto" }} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat accusantium voluptates
          laborum at, accusamus nulla ipsa facilis nobis dolorum corporis vero impedit voluptatibus
          et. Voluptatem ipsa libero, velit soluta magnam sequi natus ad ut fugiat harum expedita
          tenetur at, aliquam odit. Eligendi aliquid ex voluptatem, accusamus quos magni omnis quas
          ea numquam ut excepturi nostrum optio alias nisi aut. Quas reiciendis ipsa sapiente
          beatae! Officia debitis labore incidunt, fugiat, ipsa esse molestias optio dolores,
          repudiandae nesciunt minus aperiam vel tenetur. Est nisi suscipit error corrupti
          repudiandae totam, rerum aliquid perspiciatis debitis reiciendis fuga architecto cum atque
          molestiae tenetur harum nam!
        </p>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Story style={{ margin: "0 auto" }} />
          <Story style={{ margin: "0 auto" }} />
          <Story style={{ margin: "0 auto" }} />
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat accusantium voluptates
          laborum at, accusamus nulla ipsa facilis nobis dolorum corporis vero impedit voluptatibus
          et. Voluptatem ipsa libero, velit soluta magnam sequi natus ad ut fugiat harum expedita
          tenetur at, aliquam odit. Eligendi aliquid ex voluptatem, accusamus quos magni omnis quas
          ea numquam ut excepturi nostrum optio alias nisi aut. Quas reiciendis ipsa sapiente
          beatae! Officia debitis labore incidunt, fugiat, ipsa esse molestias optio dolores,
          repudiandae nesciunt minus aperiam vel tenetur. Est nisi suscipit error corrupti
          repudiandae totam, rerum aliquid perspiciatis debitis reiciendis fuga architecto cum atque
          molestiae tenetur harum nam!
        </p>
        {/* <Story /> */}
      </div>
    ),
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: "Click me!",
  child: "Hello world! Hello world Hello worldHello world",
};
