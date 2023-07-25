// import React from 'react';
// import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
// import { Tooltip as MyTooltip } from './Tooltip';
// import { TooltipTypes } from '../../types/TooltipTypes';

// const mainDecorator = (StoryFn) => (
//     <div>
//         <p>
//             Lorem ipsum dolor sit amet consectetur
//             <StoryFn />
//             elit. Pariatur illum in excepturi similique esse ducimus autem voluptate vel, reiciendis
//             veniam nihil eum laudantium ad, vero perspiciatis non molestias, omnis veritatis.
//             Mollitia, nam temporibus dignissimos, deleniti voluptas dolorum eligendi in,
//             necessitatibus asperiores
//             <StoryFn />
//             non. Non, harum, cupiditate quibusdam, id provident impedit autem voluptatibus assumenda
//             <StoryFn />
//             perferendis a in praesentium quaerat eum! Nisi ex a architecto in qui aut soluta. Autem,
//             velit! Illum nisi id earum incidunt consectetur aperiam asperiores at voluptatibus iure
//             minus, commodi dolorem et suscipit atque eaque? Animi, consectetur. Minus in distinctio
//             maiores error, inventore fuga temporibus reprehenderit ex quia soluta dicta alias sunt
//             voluptatibus, aspernatur esse
//             <StoryFn />, sapiente culpa dolor. Magni perspiciatis neque minima, quibusdam voluptates
//             deleniti ipsam. Ut exercitationem aperiam omnis quibusdam saepe aliquam veritatis sed,
//             consequatur laborum laudantium autem doloribus aliquid odio ratione voluptas, eius
//             animi? Iure inventore tenetur tempora recusandae expedita amet, laboriosam saepe
//             deleniti?
//         </p>
//     </div>
// );

// export default {
//     title: 'Components/Tooltip',
//     component: MyTooltip,
//     tags: ['autodocs'],
//     parameters: {
//         docs: {
//             description: {
//                 component:
//                     'Выпадающая по наведению подсказка. Как триггер, так и сама пожсказка может являтся любой html структурой. Зоны роста - такие же, как у компонента Dropdown',
//             },
//         },
//         layout: 'centered',
//     },
//     decorators: [
//         (StoryComp) => (
//             <div style={{ margin: '2rem 0' }}>
//                 <StoryComp />
//             </div>
//         ),
//     ],
// } as ComponentMeta<typeof MyTooltip>;

// const Template: ComponentStory<typeof MyTooltip> = (args) => <MyTooltip {...args} />;

// export const Default: Story<TooltipTypes> = Template.bind({});
// Default.args = {
//     tooltip: 'Hello world!',
//     children: (
//         <span
//             className="someClass"
//             style={{
//                 textDecoration: 'underline',
//                 color: 'blue',
//                 padding: '5px',
//                 boxSizing: 'border-box',
//             }}
//         >
//             Hello
//         </span>
//     ),
//     preferSide: 'auto',
// };
// Default.argTypes = {
//     theme: {
//         description: 'Тема для всплывающей подсказки. Определяет цвет заднего фона и текста',
//         defaultValue: 'light',
//     },
//     borderStyle: {
//         description:
//             'Цвет и толщина обводки для подсказкию Задается в формате css. Например 1px solid red',
//         defaultValue: '',
//     },
//     tooltipClassName: {
//         description: 'Передача класса элементу всплывающего окна для кастомизации извне',
//     },
//     children: {
//         description:
//             'Триггер для всплывающей подсказки. должен являтся DOM элементом. При передаче нескольких DOM элементов каждый из них будет являтся Tooltip',
//     },
//     tooltip: {
//         description:
//             'Окно всплывающей подсказки. Может быть как текстом, так и любой HTML структурой',
//     },
//     preferSide: {
//         description:
//             'Выбор стороны отображения подсказки относительно триггера. В значении auto автоматически считается и выбирается предпочтительная облать. При любых других значениях подскаска всегда отображется в выбранном месте',
//         defaultValue: 'auto',
//     },
//     withArrow: {
//         description: 'Определяет, нужно ли показывать стрелку, которая указывает на центр триггера',
//         defaultValue: true,
//     },
// };
// Default.decorators = [mainDecorator];

// export const TooltipLink: Story<Pick<TooltipTypes, 'children' | 'tooltip'>> = Template.bind({});
// TooltipLink.args = {
//     tooltip: 'Watch the video!',
//     children: (
//         <a
//             className="someClass"
//             href="https://www.youtube.com/feed/subscriptions"
//             target="_blank"
//             rel="noreferrer"
//         >
//             I`am link
//         </a>
//     ),
// };
