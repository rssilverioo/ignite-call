import { Text } from './styles'

interface TextProps {
  prefix?: string
  placeholder?: string
  type?: string
}

export default function TextInput({ prefix, ...props }: TextProps) {
  return (
    <Text>
      {prefix && <span>{prefix}</span>}
      <input {...props} />
    </Text>
  )
}
