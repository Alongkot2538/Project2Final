import React, { Suspense } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import RouterHandler from '../handlers/mainRouter.handler'

const routerMain = () => (
	<Suspense fallback={<div />}>
		<RouterHandler />
	</Suspense>
)

export default routerMain
