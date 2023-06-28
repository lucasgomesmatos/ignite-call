import { Text, TextProps } from '@ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus aspernatur incidunt voluptas qui nesciunt distinctio deserunt voluptates. Odit eligendi eveniet aliquam possimus in dolorum est optio quod deleniti sint!"
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
};


