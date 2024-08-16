import 'flexlayout-react/style/light.css'

import React from 'react'
import Description from '@/pages/user/coding/Description'

import {
  BorderNode,
  IJsonModel,
  ITabSetRenderValues,
  Layout,
  Model,
  TabNode,
  TabSetNode,
} from 'flexlayout-react'
import { Button } from '@/components/ui/button'

const json: IJsonModel = {
  global: {
    splitterSize: 8,
    tabEnableClose: false,
    tabEnableRename: false,
    tabDragSpeed: 0.2,
    tabSetMinWidth: 36,
    tabSetMinHeight: 36,
    tabSetTabStripHeight: 36,
  },
  borders: [],
  layout: {
    type: 'row',
    children: [
      {
        type: 'tabset',
        weight: 46.61803713527851,
        children: [
          {
            type: 'tab',
            component: 'description',
          },
          {
            type: 'tab',
            component: 'editorial',
          },
          {
            type: 'tab',
            component: 'solutions',
          },
          {
            type: 'tab',
            component: 'submissions',
          },
        ],
        active: true,
        selected: 0,
      },
      {
        type: 'row',
        weight: 53.38196286472149,
        children: [
          {
            type: 'tabset',
            weight: 50,
            children: [
              {
                type: 'tab',
                component: 'code',
                enableRenderOnDemand: false,
              },
            ],
            selected: 0,
          },
          {
            type: 'tabset',
            weight: 50,
            children: [
              {
                type: 'tab',
                component: 'testcase',
              },
              {
                type: 'tab',
                component: 'result',
              },
            ],
            selected: 0,
          },
        ],
      },
    ],
  },
}

const model = Model.fromJson(json)

const CodingLayout = () => {
  const setLayoutRef = React.useRef<Layout>(null)

  const factory = (node: TabNode) => {
    var component = node.getComponent()

    if (component === 'description') {
      return <Description />
    }
  }

  const onRenderTab = (node: TabNode, renderValues: any) => {
    if (node.getComponent() === 'description') {
      renderValues.content = <Button>Submit</Button>
    }
  }

  return (
    <Layout
      ref={setLayoutRef}
      model={model}
      onRenderTab={onRenderTab}
      factory={factory}
      realtimeResize
    />
  )
}

export default CodingLayout
