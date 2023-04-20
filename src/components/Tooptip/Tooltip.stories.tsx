import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";

export default {
  title: "ReactComponentLibrary/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ margin: "5em 0" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur <Story />
          elit. Pariatur illum in excepturi similique esse ducimus autem voluptate vel, reiciendis
          veniam nihil eum laudantium ad, vero perspiciatis non molestias, omnis veritatis.
          Mollitia, nam temporibus dignissimos, deleniti voluptas dolorum eligendi in,
          necessitatibus asperiores <Story />
          non. Non, harum, cupiditate quibusdam, id provident impedit autem voluptatibus assumenda
          <Story />
          perferendis a in praesentium quaerat eum! Nisi ex a architecto in qui aut soluta. Autem,
          velit! Illum nisi id earum incidunt consectetur aperiam asperiores at voluptatibus iure
          minus, commodi dolorem et suscipit atque eaque? Animi, consectetur. Minus in distinctio
          maiores error, inventore fuga temporibus reprehenderit ex quia soluta dicta alias sunt
          voluptatibus, aspernatur esse <Story />, sapiente culpa dolor. Magni perspiciatis neque
          minima, quibusdam voluptates deleniti ipsam. Ut exercitationem aperiam omnis quibusdam
          saepe aliquam veritatis sed, consequatur laborum laudantium autem doloribus aliquid odio
          ratione voluptas, eius animi? Iure inventore tenetur tempora recusandae expedita amet,
          laboriosam saepe deleniti? Expedita commodi dolorum libero porro quibusdam fugit tenetur
          ad nam unde quas ipsum, repudiandae iusto consequuntur et tempore quisquam quae ut optio
          facilis minima quidem placeat, quasi aliquid qui! Commodi. Explicabo eum voluptas
          temporibus recusandae repudiandae consectetur perferendis quod enim, obcaecati deleniti
          provident omnis eius blanditiis doloremque laborum dicta sapiente totam distinctio facilis
          itaque, necessitatibus tempore! Recusandae quia labore architecto. Laborum, ipsam fugit.
          Sequi labore recusandae eligendi, assumenda vero rerum nisi deserunt facilis non at
          reiciendis itaque vel voluptatum alias dolore et voluptatibus possimus laboriosam
          molestias qui asperiores sunt illum. Ipsam accusamus doloremque provident, necessitatibus,
          veniam ex quibusdam consequatur facere odit ad dolore placeat unde, tenetur ratione
          quisquam error debitis nemo doloribus perspiciatis. Dolore ad exercitationem repellat
          recusandae, perspiciatis assumenda. Nobis dicta voluptates cupiditate enim dolorem
          accusantium odit porro at corrupti laudantium assumenda ipsam est ducimus voluptatem magni
          laborum eos nihil, eaque quod, distinctio, maxime dignissimos ad. Minima, quas tenetur!
        </p>
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  tooltip: "Hello world!",
  children: (
    <span
      style={{
        textDecoration: "underline",
        color: "blue",
        padding: "5px",
        boxSizing: "border-box",
      }}
    >
      Hello
    </span>
  ),
  preferSide: "auto",
};
