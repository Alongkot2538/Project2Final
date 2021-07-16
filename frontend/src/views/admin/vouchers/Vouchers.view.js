import React, { useEffect, useState } from 'react'
import Mainmenu from '../../../components/Mainmenu'
import Breadcrumb from '../../../components/Breadcrumb'
import Header from '../../../components/master/Header'
import Footer from '../../../components/master/Footer'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Vouchers = (props) => {
	const [vouchers, setvouchers] = useState([])
	const history = useHistory();
	const check_token = localStorage.getItem("Token");
	if(!check_token){
		history.push("/login");
	}
	useEffect(() => {
		fetch()
	}, [])

	const fetch = async () => {
		let res = await axios.get(
			'https://5ed5b9428769250016e63743.mockapi.io/voucher'
		)
		setvouchers(res.data)
	}
	return (
		<div className="admin-template hide-menu">
			<Mainmenu />
			<div className="admin-content">
				<Header />

				<div className="admin-content--middle">
					<Breadcrumb header="คูปอง" />

					<div className="middle-body">
						<div className="container-fluid">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-start">
										<div>
											<h6 className="f-semibold mb-0">
												คูปอง
											</h6>
											<p className="f-size-0_9">
												ออร์เตอร์มาเฟียศากยบุตรเพทนาการลาติน
												ฟลุก ดีพาร์ทเมนท์โปรเจกต์
												ยะเยือกพล็อตบอดีเฟอร์รี แยมโรล
											</p>
										</div>
										<div>
											<button
												type="button"
												className="btn btn-primary btn-sm f-size-0_9 px-4"
											>
												ค้นหา
											</button>{' '}
											<button
												type="button"
												className="btn btn-primary btn-sm f-size-0_9 px-4"
												onClick={()=>props.history.push('/vouchercreate')}
											>
												+ เพิ่มคูปอง
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Vouchers
