import { schemaCreator } from '../schema/createFormFields'
import { FieldTypeSchema, FormSchema } from '../schema/types'
import { isFieldTypeSchema } from '../typeguards'

const initFormReducer = <T extends FieldTypeSchema<any>>(
  initialState: FormSchema<T> | T
): FormSchema<T> =>
  isFieldTypeSchema(initialState) ? schemaCreator(initialState)() : initialState

export default initFormReducer
