import { Component } from 'react'
import { View, Slot } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <slot-container>
          <Slot name="before">在之前</Slot>
          <Slot name="after">在之后</Slot>
        </slot-container>
      </View>
    )
  }
}
