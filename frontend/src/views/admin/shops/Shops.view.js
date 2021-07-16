import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Mainmenu from '../../../components/Mainmenu'
import Breadcrumb from '../../../components/Breadcrumb'
import Header from '../../../components/master/Header'
import Footer from '../../../components/master/Footer'
// import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
// import {app} from '../../../config/firebase.config'
// import Table from '../../../components/Table'
import axios from 'axios'

const Shops = (props) => {
	const history = useHistory();
	const check_token = localStorage.getItem("Token");
	const [shops, setShops] = useState([])
	const [image, setImage] = useState(null);
	if (!check_token) {
		history.push("/login");
	}
	useEffect(() => {
		// fetch()

	}, [])

	const [initialData, setInitialData] = useState(undefined);
	const [currentSheet, setCurrentSheet] = useState({});
	const [generatedObjects, setGeneratedObjects] = useState([]);

	// const handleUpload = (event) => {
	// 	const file = event.target.files[0];
	// 	readFile(file)
	// 		.then((readedData) => setInitialData(readedData))
	// 		.catch((error) => console.error(error));
	// };

	// const handleChange = event => {
	// 	this.setState({ filter: event.target.value });
	//   };

	// const  state = {
	// 	filter: "",
	// 	data: [
	// 	  {
	// 		fname: "Jayne",
	// 		lname: "Washington",
	// 		email: "jaynewashington@exposa.com",
	// 		gender: "female"
	// 	  },
	// 	  {
	// 		fname: "Peterson",
	// 		lname: "Dalton",
	// 		email: "petersondalton@exposa.com",
	// 		gender: "male"
	// 	  },
		  
	// 	]
	//   };
	
	//   handleChange = event => {
	// 	this.setState({ filter: event.target.value });
	//   };

	// const handleClick = () => {
	// 	const result = generateObjects(currentSheet);
	// 	setGeneratedObjects(result);
	// };


	// const handleChange = (e) => {
	// 	if (e.target.files[0]) {
	// 	  setImage(e.target.files[0]);
	// 	}
	//   };
	//   const onChange = (e) => {
	// 	if (image != null) {
	// 	  const storageRef = app.storage().ref()
	// 	  const fileRef = storageRef.child(image.name)
	// 	  fileRef.put(image).then(() => {
	// 		alert("Upload file Success")
	// 		console.log("Uploaded a file")
	// 	  })
	// 	}
	// 	else {
	// 	  alert("Please select file")
	// 	}
	//   }


	// const fetch = async () => {
	// 	let res = await axios.get(
	// 		// 'https://5ed5b9428769250016e63743.mockapi.io/shop'
	// 	)
	// 	setShops(res.data)
	// }
	return (
		<div className="admin-template hide-menu">
			<Mainmenu />
			<div className="admin-content">
				<Header />
				<div className="admin-content--middle">
					<Breadcrumb header="แบบฟอร์ม" />
					<div className="middle-body">
						<div className="container-fluid">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-start">
										<div>
											<h6 className="f-semibold mb-0">
												แบบเอกสาร
											</h6>

										</div>
										<div>
											<button
												type="button"
												className="btn btn-primary btn-sm f-size-0_9 px-4"
											>
												ค้นหา
											</button>{' '}

											<input
												type='file'
												accept='.xlsx'
												// onChange={handleUpload}
												// onChange={handleChange}
												id='upload'
												style={{ display: 'none' }}
											/>
											<button
												type="button"
												className="btn btn-primary btn-sm f-size-0_9 px-4"
												onClick={() => document.getElementById('upload').click()}
											// onClick={onChange}
											// onClick={()=>props.history.push('/shopcreate')}
											>
												+ เพิ่มแบบเอกสาร

											</button>
										</div>
									</div>
									{/* <input value={filter()} onChange={this.handleChange} /> */}
										
									{/* <ReactExcel
										initialData={initialData}
										onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
										activeSheetClassName='active-sheet'
										reactExcelClassName='react-excel'
									/> */}

									{generatedObjects.length > 0 && (
										<textarea
											cols={100}
											rows={50}
											value={JSON.stringify(generatedObjects, null, 2)}
											readOnly
											className='text-area'
										/>
									)}
									{/* <DashboardCard07/> */}
									{/* <Table
										header={[
											'id',
											'name',
											'location',
											'openPeriod',
											'type',
											'createdAt'
										]}
										body={shops}
										mode={2}
										{...props}
									/> */}
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

export default Shops
