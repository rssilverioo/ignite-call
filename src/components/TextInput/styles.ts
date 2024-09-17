import { styled } from '@ignite-ui/react'

export const Text = styled('div', {
  background: '$gray900',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  padding: ' 0 0 0 $4 ',
  color: '$gray500',

  input: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    boxShadow: 'none',
    opacity: 1,
    color: '$gray100',
    flex: 1,
  },
})

export const Prefix = styled('span', {
  color: '$gray200',
  opacity: 0.5,
  fontFamily: 'Roboto',
  marginRight: '$2',
  display: 'flex',
  alignItems: 'center',
})
