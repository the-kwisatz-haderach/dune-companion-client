import { UPDATE_VALUE } from '.'
import { FieldType, FieldTypeSchema } from '../schema/types'

export type UpdateFieldValueAction = <
  T extends { key: keyof FieldTypeSchema<any>; value?: any }
>(
  payload: T & { type: FieldType }
) => {
  type: typeof UPDATE_VALUE
  payload: T & { type: FieldType }
}
