import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import { Button as MyButton } from "./Button";
import { ButtonTypes, LinkTypes, ButtonLinkTypes } from "../../types/ButtonTypes";
import "./Button.css";

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: MyButton,
  args: {
    label: "Click me!!",
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Кнопка. Разные формы, цвета, размеры и состояния. Зоны роста - реализовать возможность передачи иконок, их позиционирования. Добавить возможность оставлять только иконку без текста",
      },
    },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const Default: Story<ButtonLinkTypes> = Template.bind({});
Default.argTypes = {
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
};

export const ButtonPrimary: Story<Pick<ButtonTypes, "view">> = Template.bind({});
ButtonPrimary.args = {
  view: "primary",
};

export const ButtonSuccess: Story<Pick<ButtonTypes, "view">> = Template.bind({});
ButtonSuccess.args = {
  view: "success",
};

export const ButtonDanger: Story<Pick<ButtonTypes, "view">> = Template.bind({});
ButtonDanger.args = {
  view: "danger",
};

export const ButtonClear: Story<Pick<ButtonTypes, "view">> = Template.bind({});
ButtonClear.args = {
  view: "clear",
};

export const ButtonLoading: Story<Pick<ButtonTypes, "loading">> = Template.bind({});
ButtonLoading.args = {
  loading: true,
};

export const ButtonDisabled: Story<Pick<ButtonTypes, "disabled">> = Template.bind({});
ButtonDisabled.args = {
  disabled: true,
};

export const ButtonBrick: Story<Pick<ButtonTypes, "border">> = Template.bind({});
ButtonBrick.args = {
  border: "brick",
};

export const ButtonRound: Story<Pick<ButtonTypes, "border">> = Template.bind({});
ButtonRound.args = {
  border: "round",
};

export const ButtonClipped: Story<Pick<ButtonTypes, "clip">> = Template.bind({});
ButtonClipped.args = {
  clip: true,
};

export const ButtonFullSize: Story<Pick<ButtonTypes, "fullSize">> = Template.bind({});
ButtonFullSize.args = {
  fullSize: true,
};

export const ButtonXS: Story<Pick<ButtonTypes, "size">> = Template.bind({});
ButtonXS.args = {
  size: "xs",
};

export const ButtonS: Story<Pick<ButtonTypes, "size">> = Template.bind({});
ButtonS.args = {
  size: "s",
};

export const ButtonM: Story<Pick<ButtonTypes, "size">> = Template.bind({});
ButtonM.args = {
  size: "m",
};

export const ButtonL: Story<Pick<ButtonTypes, "size">> = Template.bind({});
ButtonL.args = {
  size: "l",
};
