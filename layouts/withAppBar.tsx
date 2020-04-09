import React from 'react'
import { Appbar } from 'react-native-paper'
import { withRouter } from 'react-router-native'

const withAppbar = (
  WrappedComponent: React.ComponentType,
  title: string,
  subtitle = ''
) => {
  const hocComponent = withRouter(({ history, ...props }) => {
    return (
      <>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => history.goBack()} />
          <Appbar.Content title={title} subtitle={subtitle} />
          <Appbar.Action icon="home" onPress={() => history.push('/')} />
        </Appbar.Header>
        <WrappedComponent {...props} />
      </>
    )
  })

  return hocComponent
}

export default withAppbar
