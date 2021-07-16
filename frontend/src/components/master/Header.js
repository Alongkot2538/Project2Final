import React from 'react'
import {useHistory} from "react-router-dom"

const Header = (props) => {
	const history = useHistory();
const handLogout = ()=>{
	localStorage.removeItem("Token")
	history.push("/login");
}
	return (
		<div
			className={
				props.dashboard
					? 'admin-content--topbar bg-white shadow-sm'
					: ' admin-content--topbar'
			}
		>
			<button
				id="toggle-menu"
				type="button"
				className="admin-menus--toggle"
				onClick={() => {
					try {
						document
							.getElementsByClassName('admin-template')[0]
							.classList.toggle('hide-menu')
					} catch (err) {}
				}}
			>
				<span />
				<span />
				<span />
			</button>
			<img 
			src="https://upload.wikimedia.org/wikipedia/commons/2/28/Prince_of_Songkla_University_Emblem.png"
				// src="https://onlinepngtools.com/images/examples-onlinepngtools/coffee-cup-background-removed.png"
				className="logo"
				alt="logo"
			/>
			<a href="/login" className="text-fade-06" onClick = {handLogout}>
				<i className="fas fa-sign-out-alt" /> ออกจากระบบ
			</a>
		</div>
	)
}
export default Header
