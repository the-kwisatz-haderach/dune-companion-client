import { mapValues } from 'lodash'
import createField from './createFormFields'
import { FieldType, FieldTypeSchema, FormSchema } from './types'

type PartialValues<T extends {}> = { [K in keyof T]: Partial<T[K]> }

type FormSchemaCreator = <T extends FieldTypeSchema<any>>(
  fields: T
) => (options?: PartialValues<FormSchema<T>>) => FormSchema<T>

const createFormSchema: FormSchemaCreator = (fields) => {
  const fieldValues = mapValues(fields, (fieldType) => createField[fieldType]())
}

export default createFormSchema
