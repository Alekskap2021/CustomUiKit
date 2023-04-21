import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button as MyButton } from "./Button";
import "./Button.css";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: MyButton,
  argTypes: {
    as: { description: "Определяет, что отрендерит компоент в DOM дереве", defaultValue: "button" },
    label: { description: "Текст кнопки", defaultValue: "Click me!" },
    border: { description: "Формат скругления", defaultValue: "brick" },
    view: { description: "Цвет заднего фона", defaultValue: "primary" },
    size: { description: "Размер шрифта и внутренних отступов", defaultValue: "m" },
    loading: { description: "Смена контента внутри кнопки на loader", defaultValue: false },
    href: {
      description:
        "Обязательный аттрибут для ссылки. Доступен только в том случае, если проп `as` стоит в `link`",
      defaultValue: false,
    },
    disabled: { description: "Отключает все события и наведение на элементе", defaultValue: false },
    clip: {
      description: "Прозрачный фон, цвет текста внутри и обводка принимают значения view",
      defaultValue: false,
    },
    fullSize: { description: "Растянуть элемент на 100% ширины родителя", defaultValue: false },
  },
  parameters: {
    docs: {
      //   description: {
      //     component: "Кнопка. Разные формы, цвета, размеры и состояния.",
      //   },
      description: {
        component:
          "Кнопка. Разные формы, цвета, размеры и состояния. Зоны роста - реализовать возможность передачи иконок, их позиционирования. Добавить возможность оставлять только иконку без текста",
      },
    },
  },
} as ComponentMeta<typeof MyButton>;

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const Button = Template.bind({});
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
Button.args = {
  label: "Click me!!",
};
