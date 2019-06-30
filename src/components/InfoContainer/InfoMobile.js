import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Dropdown,
} from 'semantic-ui-react'
import { website, about, mobile } from './menuItems'
import HomepageHeading from './Heading'

/*
TODO: Heads up! 
 * We using React Static to prerender our docs with server side rendering,
 * this is a quite simple solution. For more advanced usage please check
 * Responsive docs under the "Usage" section.
 */ 
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/**
 * *=======================================================
 * *****************DROPDOWN LOOKUP TABLE******************
 * **====================================================**
 * **||              *WEBSITE DROPDOWN*                ||**
 * **||            *VALUES FROM 1 TO 99*  (0 static)   ||**
 * ****==================================================****
 * ****MENU             TEXT                  VALUE****
 * *  philosophy:     'Scalability'             13
 * *                  'Developmental'           15
 * *  development:    'Scalability'             23
 * *                  'Responsive'              25
 * *                  'Tools'                   28
 * *  design:         'Scalability'             33
 * *                  'Theming'                 35
 * *  interface:      'Interoperability'        42
 * *                  'User Interface'          44
 * *                  'User Experience'         46
 * *  examples:       'Login'                   51
 * *                  'Homepage'                52
 * *                  'Navigation'              54
 * *                  'Theme'                   55
 * *                  'Content'                 56
 * *                  'Sticky'                  58
 * *  customization:  'Branding'                71
 * *                  'Internationalization'    73
 * **====================================================**
 * **||             *MOBILE DROPDOWN*                  ||**
 * **||         *VALUES FROM 101 TO 149* (100 static)  ||**
 * ****================================================****
 *  * *               'Development'            110
 *  * *               'Expectations'           120
 *  * *               'Apps'                   130
 *  * *               'Limitations'            140
 * **====================================================**
 * **||              *ABOUT DROPDOWN*                  ||**
 * **||         *VALUES FROM 151 TO 199* (150 static)  ||**
 * ****================================================****
 *  * *               'Reasoning Rock Studios' 110
 *  * *               'Expectations'           120
 *  * *               'Apps'                   130
 *  * *               'Limitations'            140
 */

/* 
TODO: Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, 
 * it can be implemented easily. It can be more complicated, but you can create 
 * really flexible markup.
 */

export default class MobileContainer extends Component {
  state = { value: 0 }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {

    const { children } = this.props
    const { phone } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
        
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}