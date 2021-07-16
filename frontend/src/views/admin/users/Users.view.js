import React, { useEffect, useState, useRef } from 'react'
import Mainmenu from '../../../components/Mainmenu'
import Breadcrumb from '../../../components/Breadcrumb'
import Header from '../../../components/master/Header'
import Footer from '../../../components/master/Footer'
// import Footer from '../../../components/master/Footer'
import { useHistory } from 'react-router-dom'
// import Popup from 'reactjs-popup'
// import SignaturePad from 'react-signature-canvas'
import axios from 'axios'
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import PDF from './PDF'
import New from './New'


const Users = (props) => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const history = useHistory();
	const check_token = localStorage.getItem("Token");
	if (!check_token) {
		history.push("/login");
	}
	useEffect(() => {
		setIsLoading(true)
		// fetch()
		setIsLoading(false)
	}, [])
	// const fetch = async () => {
	// 	let res = await axios.get(
	// 		'https://5ed5b9428769250016e63743.mockapi.io/profile'
	// 	)
	// 	setUsers(res.data)
	// }

	const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url

	const sigCanvas = useRef({});
	const clear = () => sigCanvas.current.clear();
	// const close = () => sigCanvas.current.close();
	const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

	const styles = StyleSheet.create({
		page: {
			flexDirection: 'row',
			backgroundColor: '#E4E4E4'
		},
		section: {
			margin: 105,
			padding: 105,
			flexGrow: 1,

		}
	});
	
	
	if (isLoading) {
		return <p>loading....</p>
	} else {
		return (
			<div className="admin-template hide-menu">
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" /> 
				 {/* add bulma */}
				<Mainmenu />
				<div className="admin-content">
					<Header />
					<div className="admin-content--middle">
						<Breadcrumb header="เซ็นเอกสาร" />
						<div className="middle-body">
							<div className="container-fluid">
								<div className="card">
									<div className="card-body">
										<div className="d-flex justify-content-between align-items-start">
											{/* <div >
												<h6 className="f-semibold mb-0">
													คำร้อง

													<button
													type="button"
													className="btn btn-primary btn-sm f-size-0_9 px-4"
												>
													ค้นหา
												</button>{' '}
												<button
													type="button"
													className="btn btn-primary btn-sm f-size-0_9 px-4"

												>
													+ เพิ่มคำร้อง
												</button>
												</h6>

											</div> */}
											<New />
											<div>
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
}

export default Users