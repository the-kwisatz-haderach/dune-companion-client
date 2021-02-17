import React from 'react'
import { View } from 'react-native'
import { Switch, HelperText, Button, ToggleButton } from 'react-native-paper'
import { UseFormHook } from '../../hooks/useForm/types'
import { SetConditionsSchema } from './schema/game.schema'

type Props = UseFormHook<SetConditionsSchema>

const CreateGameForm: React.FC<Props> = ({
  formState,
  submitForm,
  updateField
}) => {
  return (
    <View>
      <HelperText>Maximum players</HelperText>
      <ToggleButton.Row
        value={formState.maxPlayers.value.toString()}
        onValueChange={(value) => {
          updateField('maxPlayers', +value)
        }}
      >
        <ToggleButton icon="numeric-2" value="2" />
        <ToggleButton icon="numeric-3" value="3" />
        <ToggleButton icon="numeric-4" value="4" />
        <ToggleButton icon="numeric-5" value="5" />
        <ToggleButton icon="numeric-6" value="6" />
      </ToggleButton.Row>
      <HelperText>Turns duration</HelperText>
      <ToggleButton.Row
        value={formState.maxTurns.value.toString()}
        onValueChange={(value) => {
          updateField('maxTurns', +value)
        }}
      >
        <ToggleButton icon="numeric-5" value="5" />
        <ToggleButton icon="numeric-6" value="6" />
        <ToggleButton icon="numeric-7" value="7" />
        <ToggleButton icon="numeric-8" value="8" />
        <ToggleButton icon="numeric-9" value="9" />
        <ToggleButton icon="numeric-10" value="10" />
      </ToggleButton.Row>
      <HelperText>Advanced mode</HelperText>
      <Switch
        value={formState.advancedMode.value}
        onValueChange={() => {
          updateField('advancedMode', !formState.advancedMode.value)
        }}
      />
      <Button mode="contained" onPress={submitForm}>
        Create lobby
      </Button>
    </View>
  )
}

export default CreateGameForm
