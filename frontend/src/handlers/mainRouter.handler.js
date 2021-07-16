import React, { lazy } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import routerConfig, { generalRouter } from '../config/router.config'

class route extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			routes: this.generateRouter(true)
		}
	}

	componentDidUpdate(preProps) {
		if (preProps.userInfo !== this.props.userInfo) {
			this.generateRouter()
		}
	}

	generateRouter = (isReturn) => {
		let routes = []

		// Route public
		routerConfig.General.forEach((publicRoute, i) => {
			if (publicRoute.private) {
				routes = [
					...routes,
					
				]
			} else {
				routes = [
					...routes,
					<Route
						key={`routerGeneral${i}`}
						exact
						path={publicRoute.path}
						render={(prop) => {
							const { pathname } = prop.location
							if (
								(pathname === generalRouter.login ||
									pathname === generalRouter.register ||
									pathname === generalRouter.forget) &&
								this.props.isAuth
							) {
								return <Redirect to={generalRouter.home}  />
							
							
							}
							return <publicRoute.component {...prop} />
						}}
					/>
				]
			}
			
		})

		if (isReturn) {
			return routes
		}
		return this.setState({ routes })
	}

	render() {
		return (
			<Switch>
				{this.state.routes}
				<Route
					path="*"
					exact
					render={() => {
						if (!this.props.isAuth) {
							return <Redirect to={generalRouter.login} />
						}
						return <Redirect to={generalRouter.home} />
					}}
				/>
			</Switch>
		
		)
	}
}

const mapStateToProps = ({ auth }) => ({ ...auth })

export default connect(mapStateToProps)(route)
