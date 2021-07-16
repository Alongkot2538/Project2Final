import React ,{useEffect,useState ,Fragment } from 'react'
import Mainmenu from '../../../components/Mainmenu'
import Header from '../../../components/master/Header'
import Footer from '../../../components/master/Footer'
import Breadcrumb from '../../../components/Breadcrumb'
import { useHistory } from 'react-router-dom'
import Tabletop from "tabletop";
import Sidebar from '../../../components/Sidebar'

const Dashboard = () => {
	const check_token = localStorage.getItem("Token");
	const history = useHistory();
	if(!check_token){
		history.push("/login");
	}

	const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
	
	//   key: "1-OF-mJ4r_hv6p6AkNepvD_N8i1ZhwaiAwThlblzc5Sc",
	  key: "1E1zZy1ggJIXjCXDAe2VId6KJNOISnF7y0wIi4zmIfkE",
	 

      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

	return (
		<div className="admin-template hide-menu">
			<Mainmenu />
			{/* <Sidebar/> */}
			<div className="admin-content">
				<Header dashboard={true} />
				<div className="admin-content--middle">
					<Breadcrumb header="Dashboard" />
					<div className="middle-body">
						<div className="container-fluid">
							<div className="card mb-5">
								<div className="card-body">

									
									<h1>data from google </h1>
										
										<ul>
     										{data.map((item, i) => (
											<Fragment key={i}>
											<li>ID -- {item.ID}</li>
											<li>NAME - {item.NAME}</li>
											<li>SURNAME - {item.SURNAME}</li>
											<br />
											</Fragment>
										))}
										</ul>
										
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		</div>
	)
}

export default Dashboard
