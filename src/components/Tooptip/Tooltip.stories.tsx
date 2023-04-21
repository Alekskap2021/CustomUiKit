import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip as MyTooltip } from "./Tooltip";

export default {
  title: "ReactComponentLibrary/Tooltip",
  component: MyTooltip,
  tags: ["autodocs"],
  argTypes: {
    theme: {
      description: "Тема для всплывающей подсказки. Определяет цвет заднего фона и текста",
      defaultValue: "light",
    },
    borderStyle: {
      description:
        "Цвет и толщина обводки для подсказкию Задается в формате css. Например 1px solid red",
      defaultValue: "",
    },
    tooltipClassName: {
      description: "Передача класса элементу всплывающего окна для кастомизации извне",
    },
    children: {
      description:
        "Триггер для всплывающей подсказки. должен являтся DOM элементом. При передаче нескольких DOM элементов каждый из них будет являтся Tooltip",
    },
    tooltip: {
      description:
        "Окно всплывающей подсказки. Может быть как текстом, так и любой HTML структурой",
    },
    preferSide: {
      description:
        "Выбор стороны отображения подсказки относительно триггера. В значении auto автоматически считается и выбирается предпочтительная облать. При любых других значениях подскаска всегда отображется в выбранном месте",
      defaultValue: "auto",
    },
    withArrow: {
      description: "Определяет, нужно ли показывать стрелку, которая указывает на центр триггера",
      defaultValue: true,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Выпадающая по наведению подсказка. Как триггер, так и сама пожсказка может являтся любой html структурой. Зоны роста - такие же, как у компонента Dropdown",
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
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

const Template: ComponentStory<typeof MyTooltip> = (args) => <MyTooltip {...args} />;

export const Tooltip = Template.bind({});
Tooltip.args = {
  tooltip: "Hello world!",
  children: (
    <span
      className="someClass"
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
