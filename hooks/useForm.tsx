import { useReducer, useEffect } from 'react'
import formReducerFactory, { updateValue } from './formReducer'
import { UseFormHook } from './types'

const useForm: UseFormHook = (formSchema, submitHandler, options) => {
  const formReducer = formReducerFactory(formSchema)
  const [formState, dispatch] = useReducer(formReducer, formSchema)

  const onChange = (fieldKey: string, value: string | number | boolean) => {
    dispatch(updateValue({ fieldKey, value }))
  }

  const onSubmit = () => {
    const formValues = Object.keys(formState).reduce((formValues, fieldKey) => {
      formValues[fieldKey] = formState[fieldKey].value
      return formValues
    }, {})
    submitHandler(formValues)
  }

  useEffect(() => {
    console.log('new schema rerender!')
  }, [formSchema])

  return [formState, onSubmit, onChange]
}

export default useForm
