import React from 'react'

const Breadcrumb = (props) => {
	let href = {
		ลูกค้า : "users",
		ร้านค้า : "shops",
		คูปอง : "vouchers"
	}
	return (
		<div className="middle-header">
			<h5>{props.header}</h5>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					{/* <li className="breadcrumb-item"> */}
						<a href={`/${href[props.header]}`}>หน้าหลัก</a>
					{/* </li> */}
					{' '}/{' '}
					{/* <li className="breadcrumb-item active" aria-current="page"> */}
						{props.header}
					{/* </li> */}
				</ol>
			</nav>
		</div>
	)
}
export default Breadcrumb
