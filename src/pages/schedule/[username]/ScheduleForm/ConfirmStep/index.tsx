import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa no minimo 3 caracteres' }),
  email: z.string().email().min(3, { message: 'Digite um email valido' }),
  observations: z.string().nullable(),
})
type ConfirmFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
    defaultValues: {},
  })
  function handelConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }
  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handelConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          16 de setembro de 2024
        </Text>
        <Text>
          <Clock />
        </Text>
      </FormHeader>
      <label>
        <Text size="sm">Nome completo</Text>
      </label>
      <TextInput placeholder="Seu nome" {...register('name')} />
      {errors?.name && <FormError size="sm">{errors?.name?.message}</FormError>}
      <label>
        <Text size="sm">Endereco de email</Text>
      </label>
      <TextInput
        type="email"
        placeholder="johndoe@example.com"
        {...register('email')}
      />
      {errors?.email && (
        <FormError size="sm">{errors.email?.message}</FormError>
      )}
      <label>
        <Text size="sm" {...register('observations')}>
          Observacoes
        </Text>
      </label>
      <TextArea />

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
