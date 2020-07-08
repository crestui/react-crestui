import { Component } from 'react'
import { createPortal } from 'react-dom'
// eslint-disable-next-line no-unused-vars
import { portalRoot, defaultZIndex, PortalProps } from './portal-props'

export class PortalClass extends Component<PortalProps> {
  el: HTMLDivElement | null

  constructor(props: PortalProps) {
    super(props)

    // Use a ternary operator to make sure that the document object is defined
    this.el =
      typeof document !== `undefined` ? document.createElement('div') : null
  }

  componentDidMount = () => {
    if (portalRoot === null || this.el === null) {
      return
    }
    portalRoot.appendChild(this.el)
    console.info(`Add new child`)
  }

  componentWillUnmount = () => {
    if (portalRoot === null || this.el === null) {
      return
    }
    console.info(`Remove new child`)
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    const zIndex =
      this.props.zIndex === undefined || this.props.zIndex === null
        ? defaultZIndex
        : this.props.zIndex
    // Check that this.el is not null before using ReactDOM.createPortal
    if (this.el) {
      this.el.style.zIndex = zIndex.toString()
      this.props.onElement(this.el)
      console.info(`Rendering class component of Portal`)
      return createPortal(children, this.el)
    } else {
      return null
    }
  }
}

export default PortalClass
