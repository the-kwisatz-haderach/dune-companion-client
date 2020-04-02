import React from 'react'
import { Appbar } from 'react-native-paper'
import { BackButton } from 'react-router-native'

const withAppbar = (
  WrappedComponent: React.ComponentType,
  title: string,
  subtitle = ''
) => {
  const hocComponent = ({ ...props }) => (
    <>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title={title} subtitle={subtitle} />
      </Appbar.Header>
      <WrappedComponent {...props} />
    </>
  )

  return hocComponent
}

export default withAppbar
