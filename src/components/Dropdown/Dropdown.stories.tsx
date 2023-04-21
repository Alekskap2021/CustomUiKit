import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown as MyDropdown } from "./Dropdown";

export default {
  title: "ReactComponentLibrary/Dropdown",
  component: MyDropdown,
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
    children: {
      description:
        "Контент всплывающей подсказки. Может быть как текстом, так и любой HTML структурой",
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
    tooltipClassName: {
      description: "Передача класса элементу всплывающего окна для кастомизации извне",
    },
    btnClassName: {
      description: "Передача класса кнопке-триггеру для кастомизации извне",
    },
    label: { description: "Текст кнопки", defaultValue: "Click me!" },
    border: { description: "Формат скругления", defaultValue: "brick" },
    view: { description: "Цвет заднего фона", defaultValue: "primary" },
    size: { description: "Размер шрифта и внутренних отступов", defaultValue: "m" },
    loading: { description: "Смена контента внутри кнопки на loader", defaultValue: false },
    disabled: { description: "Отключает все события и наведение на элементе", defaultValue: false },
    clip: {
      description: "Прозрачный фон, цвет текста внутри и обводка принимают значения view",
      defaultValue: false,
    },
    fullSize: { description: "Растянуть элемент на 100% ширины родителя", defaultValue: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Выпадающая по клику подсказка. Может являтся любой html структурой. Зоны роста - добавить темы для скролла, дать возможность пользователю кастомизировать скролл извне. Добавить виды анимаций для появления всплывающей подсказки",
      },
    },
  },
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
} as ComponentMeta<typeof MyDropdown>;

const Template: ComponentStory<typeof MyDropdown> = (args) => <MyDropdown {...args} />;

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: "Click me!",
  children: "some text",
};
