import React, { useEffect,useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import AuthAction from '../../../store/auth/auth.action'
// import img_logo from '../../../images/svg/logo.svg'
import { useHistory } from 'react-router-dom'
import axios from "axios";


const Login = (props) => {
	// const dispatch = useDispatch()
 
	// const auth = useSelector((state) => state.auth)
	//ค่าใน store
	const check_token = localStorage.getItem("Token")
	const history = useHistory();
	const [session, setSession] = useState(false)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [status, setStatus] = useState('')
	const [token, setToken] = useState("");
    const [name,setname] = useState('')
    const [surname,setSurname] = useState('')
	const [id,setId] = useState('')
	
	// const computed = {
	// 	showUppercaseUsername: () => {
	// 		return username.toUpperCase()
	// 	}
	// }
     
	// const methods = {
	// 	isValidUsername: () => {
	// 		if (username.length > 0) {
	// 			return true
	// 		}
	// 		return false
	// 	},
	// 	...bindActionCreators({ ...AuthAction }, dispatch)
	// 	//methods ของ redux
	// }

	const loginPSU = (e) => {
		e.preventDefault();
		axios
		  .post("http://localhost/psu_auth", {
			username,
			password,
		  })
		  .then((response) => {
			console.log(response.data.massage);
			if(response.data.massage){
				setStatus("username or Password incorrect")
			}

			console.log(response.data)
			if(response.data.PSU_PASSPORT.token){
				localStorage.setItem("Token", JSON.stringify(response.data.PSU_PASSPORT));
				setSession(true)
				setToken(response.data.PSU_PASSPORT.token);
			}
		   
			setname(response.data.PSU_PASSPORT.firstname)
			setSurname(response.data.PSU_PASSPORT.lastname)
			setId(response.data.PSU_PASSPORT.stID)
		  })
		  .catch((error) => {
			console.log(error);
		  });
	  };
	  if(check_token){
		history.push("/");
	}
	
	// const handLogin = ()=>{
	// 	//กรณี login สำเร็จ
	// 	if(loginPSU.username == username && loginPSU.password == password){
	// 		localStorage.setItem("Token",loginPSU.token)
	// 		history.push("/");
	// 	}
	// 	//กรณี ไม่พิมพ์ username หรือ password 
	// 	else if(username === '' && password === ''){
	// 		setStatus("Please Enter username or Password ")
	// 	}
	// 		//กรณี username หรือ password ไม่ถูกต้อง 
	// 	else{
	// 		setStatus("username or Password incorrect")
	// 	}
		
	// }

	//check token in Local storage
	// if(check_token){
	// 	history.push("/");
	// }
	return (
		<div className="admin-login">
			<div className="admin-login--box">
				<img
					src="https://onlinepngtools.com/images/examples-onlinepngtools/coffee-cup-background-removed.png"
					className="img-fluid mb-3"
					width="200px"
					alt="img_logo"
				/>
				
				{/* <p className="f-size-0_9">
					username : {fakeLogin.username} , password : {fakeLogin.password}
				</p> */}
				<p style={{color:"red"}}>{status}</p>
	
				<div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Username"
							onChange={({ target: { value } }) =>
								setUsername(value)
							}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							onChange={({ target: { value } }) =>
								setPassword(value)
							}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary btn-block"
						onClick={loginPSU}
					
					>
						Login
					</button>
					
				</div>
			</div>
		</div>
	)
}
export default Login