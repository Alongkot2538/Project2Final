const manualAction = {
	login: ({ username, password }) => {
	
		return {
			
			payload: 'SOME_VALUE'
		}
	},
	logout: () => {
		
		return {
			
		}
	}
}

export default {
	...manualAction
}
