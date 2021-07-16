import React from 'react'
// import DropdownButton from 'react-bootstrap/DropdownButton'
{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link> */ }
const Mainmenu = () => {
	return (
		<div className="admin-menus">
			<div className="admin-menus--header">
				<div className="admin-profile">
					<img
						src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-admin-rolls-glyph-black-icon-png-image_691507.jpg"
						className="admin-profile--image"
						alt="images"
					/>
					<div className="admin-profile--name">Admin ABC</div>
					<div className="dropdown">
						<a
							href="/#"
							className="dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Administrator
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="/#">
								แก้ไขโปรไฟล์
							</a>
							<a className="dropdown-item" href="/#">
								เปลี่ยนรหัสผ่าน
							</a>
						</div>
					</div>
					{/* <div class="dropdown">
						<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
							<span class="caret"></span></button>
						<ul class="dropdown-menu">
							<li><a href="#">HTML</a></li>
							<li><a href="#">CSS</a></li>

						</ul>
					</div> */}

				</div>
				<button
					type="button"
					id="hide-menu"
					className="btn-hide-menu"
					onClick={() => {
						try {
							document
								.getElementsByClassName('admin-template')[0]
								.classList.add('hide-menu')
						} catch (err) { }
					}}
				/>
			</div>
			<ul className="admin-menus--list">
				<li>
					<a href="/dashboard" className="item">
						<span className="icon">
							<i className="fas fa-th-large" />
						</span>
						Dashboard
					</a>
				</li>
				<li>
					<a href="/shops" className="item">
						<span className="icon">
							<i className="fas fa-th-large" />
						</span>
						ติดต่อ
					</a>
				</li>
				<li>
					<a href="/users" className="item">
						<span className="icon">
							<i className="fas fa-th-large" />
						</span>
						เซ็นเอกสาร <span className="notify">5</span>
					</a>
				</li>
				{/* <li>
					<a href="/vochers" className="item">
						<span className="icon">
							<i className="fas fa-th-large" />
						</span>
						คูปอง <span className="notify">5</span>
					</a>
				</li> */}
			</ul>
		</div>
	)
}
export default Mainmenu
