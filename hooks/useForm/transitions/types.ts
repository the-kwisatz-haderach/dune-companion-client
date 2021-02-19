import { Reducer } from 'react'
import { FormActions, UPDATE_VALUE } from '.'
import { FieldType, FieldTypeSchema, FormSchema } from '../types'

export type FormReducerFactory = <T extends FieldTypeSchema<T>>(
  initialState: FormSchema<T>
) => Reducer<typeof initialState, FormActions>

export type UpdateFieldValueAction = <
  T extends { key: keyof FieldTypeSchema<any>; value?: any }
>(
  payload: T & { type: FieldType }
) => {
  type: typeof UPDATE_VALUE
  payload: T & { type: FieldType }
}
