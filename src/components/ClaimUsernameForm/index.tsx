import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAnnotation } from './style'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuario precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuario pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})
type ClaimuUsernameFormData = z.infer<typeof claimUsernameFormSchema>
export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimuUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()
  async function handleClaimUsername(data: ClaimuUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }
  return (
    // @ts-ignore
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuario desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}
