import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import styled from 'styled-components'

import home from '../HomePage'
import ReasoningRock from '../About/ReasoningRock'
import ProjectManager from '../About/ProjectManager'
import Questions from '../About/Questions'
import GivingBack from '../About/GivingBack'
import Apps from '../Apps'
import RefErr from '../RefErr'
import ContactMe from '../ContactMe'
import WebFixedEx from '../WebPages/WebFixedEx'
import WebStickyEx from '../WebPages/WebStickyEx'
import WebNavEx from '../WebPages/WebNavEx'
import WebHomeEx from '../WebPages/WebHomeEx'
import WebLoginEx from '../WebPages/WebLoginEx'
import Scalability from '../Philosophy/Scalability'
import Tools from '../WebDevelopment/Tools'
import ThemeEx from '../Customization/ThemeEx'
import Interoperability from '../Usability/Interoperability'
import UserInterface from '../Usability/UserInterface'
import UserExperience from '../Usability/UserExperience'
import Developmental from '../Philosophy/Developmental'
import DevScalability from '../WebDevelopment/DevScalability'
import ResponsiveDevelopment from '../WebDevelopment/ResponsiveDevelopment'
import DesignScalability from '../WebDesign/DesignScalability'
import Branding from '../WebDesign/Branding'
import Expectations from '../Mobile/Expectations'
import MobileApps from '../Mobile/MobileApps'
import MobileDev from '../Mobile/MobileDev'
import Theme from '../Customization/Theme'
import i18n from '../Customization/i18n'
import ResponsiveContainer from '../Nav';

const AppWrapper = styled.section`

`

const App = ({ history }) => {
  return (
    <AppWrapper>
      <ConnectedRouter history={history}>
        <ResponsiveContainer>
          <Switch>
            <Route exact path='/' component={home} />
            <Route path='/scalability' component={Scalability} />
            <Route path='/developmental' component={Developmental} />
            <Route path='/development_scalability' component={DevScalability} />
            <Route path='/responsive_development' component={ResponsiveDevelopment} />
            <Route path='/tools' component={Tools} />
            <Route path='/design_scalability' component={DesignScalability} />
            <Route path='/custom_theme' component={Theme} />
            <Route path='/interoperability' component={Interoperability} />
            <Route path='/user_interface' component={UserInterface} />
            <Route path='/user_experience' component={UserExperience} />
            <Route path='/homepage_example' component={WebHomeEx} />
            <Route path='/login_example' component={WebLoginEx} />
            <Route path='/sticky_example' component={WebStickyEx} />
            <Route path='/nav_example' component={WebNavEx} />
            <Route path='/fixed_example' component={WebFixedEx} />
            <Route path='/theme_example' component={ThemeEx} />
            <Route path='/i18n' component={i18n} />
            <Route path='/branding' component={Branding} />
            <Route path='/expectations' component={Expectations} />
            <Route path='/apps' component={Apps} />
            <Route path='/mobile_development' component={MobileDev} />
            <Route path='/mobile_apps' component={MobileApps} />
            <Route path='/contact' component={ContactMe} />
            <Route path='/reasoning_rock' component={ReasoningRock} />
            <Route path='/project_manager' component={ProjectManager} />
            <Route path='/questions' component={Questions} />
            <Route path='/giving_back' component={GivingBack} />
            <Route component={RefErr} />
          </Switch>
        </ResponsiveContainer>
      </ConnectedRouter>
    </AppWrapper>
  )
}

export default App
