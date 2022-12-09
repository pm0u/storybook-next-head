import React from 'react'
import { Tester } from "./head-test";
import { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
  title: "Tester",
  Component: Tester
} as ComponentMeta<typeof Tester>

const Template: ComponentStory<typeof Tester> = (args: any) => <Tester {...args} />

export const Default = Template.bind({})