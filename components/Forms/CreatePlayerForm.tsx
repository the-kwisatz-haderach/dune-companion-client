import React from 'react'
import { View } from 'react-native'
import { TextInput, Button, Avatar, Text } from 'react-native-paper'
import { FormComponentProps } from './types'

const CreatePlayerForm: React.FC<FormComponentProps> = ({
  formState,
  onSubmit,
  onChange
}) => {
  return (
    <View>
      <Text>Select an avatar</Text>
      <Avatar.Icon icon="account-edit" />
      <TextInput
        value={formState.name.value}
        label={formState.name.label}
        onChangeText={(value) => {
          onChange('name', value)
        }}
      />
      <Button mode="contained" onPress={onSubmit}>
        Proceed
      </Button>
    </View>
  )
}

export default CreatePlayerForm
