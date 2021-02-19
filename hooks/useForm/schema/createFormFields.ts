import {
  BaseFieldCreator,
  FieldCreatorFactory,
  FieldType,
  FormField,
  FormFieldBase
} from './types'

const createBaseField: BaseFieldCreator = (type) => ({
  type,
  label: '',
  error: '',
  disabled: false
})

const defaultValues: {
  [P in FieldType]: Omit<FormField<P>, keyof FormFieldBase>
} = {
  text: {
    value: '',
    placeholder: ''
  },
  checkbox: {
    value: false
  },
  radio: {
    value: ''
  },
  custom: {
    value: ''
  },
  number: {
    value: 0
  }
}

const fieldCreator: FieldCreatorFactory = (type) => (values) => ({
  ...createBaseField(type),
  ...defaultValues[type],
  ...values
})

const text = fieldCreator('text')
const custom = fieldCreator('text')
const checkbox = fieldCreator('checkbox')
const number = fieldCreator('number')
const radio = fieldCreator('radio')

const createField: Record<FieldType, ReturnType<FieldCreatorFactory>> = {
  text,
  checkbox,
  number,
  radio,
  custom
}

export default createField
