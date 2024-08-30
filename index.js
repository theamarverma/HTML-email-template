const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587, // TLS port
	secure: false, // use SSL (true for port 465, false for port 587)

	auth: {
		//replace your code
		user: '',
		pass: '',
	},
	tls: {
		rejectUnauthorized: false, // this helps if you're facing issues with self-signed certificates
	},
});
// async..await is not allowed in global scope, must use a wrapper
async function main() {
	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: '"Amar 👻" <arvsayhi@gmail.com>', // sender address
		to: 'skjesintanbir@gmail.com, amarverma.lnct@gmail.com', // list of receivers
		subject: 'Hello ✔', // Subject line
		text: 'Hello world?', // plain text body
		html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta
			http-equiv="Content-Type"
			content="text/html; charset=utf-8"
		/>
		<meta
			http-equiv="X-UA-Compatible"
			content="IE=edge"
		/>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<link
			rel="preconnect"
			href="https://fonts.googleapis.com"
		/>
		<link
			rel="preconnect"
			href="https://fonts.gstatic.com"
			crossorigin
		/>
		<link
			href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
			rel="stylesheet"
		/>
		<title>Email template</title>
		<style type="text/css">
			img {
				border: 0;
				height: auto;
				line-height: 100%;
				outline: none;
				text-decoration: none;
			}
			table {
				border-collapse: collapse !important;
				border-spacing: 0;
			}
			body {
				height: 100% !important;
				margin: 0 !important;
				padding: 0 !important;
				width: 100% !important;
			}
			/* iOS BLUE LINKS */
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}
			/* GMAIL BLUE LINKS */
			u + #body a {
				color: inherit;
				text-decoration: none;
				font-size: inherit;
				font-family: inherit;
				font-weight: inherit;
				line-height: inherit;
			}
			/* SAMSUNG MAIL BLUE LINKS */
			#MessageViewBody a {
				color: inherit;
				text-decoration: none;
				font-size: inherit;
				font-family: inherit;
				font-weight: inherit;
				line-height: inherit;
			}
			td {
				padding: 0;
			}
			.wrapper {
				width: 100%;
				table-layout: fixed;
			}
			.main {
				width: 100%;
				max-width: 600px;
				margin: 0 auto;
				border-spacing: 0;
				font-family: 'Poppins', sans-serif;
				color: black;
				overflow: hidden;
			}

			.line {
				border-top: 1px solid #9f9f9f;
				height: 1px;
				width: 185px;
			}
			.text-highlight {
				color: #5155ac;
				font-weight: 700;
			}

			/* Responsive Styles */
			@media only screen and (max-width: 600px) {
				img {
					height: 60%;
				}
			}
		</style>
	</head>
	<body style="margin: 0 !important; padding: 0 !important">
		<center class="wrapper">
			<table
				class="main"
				width="100%"
				border="0"
				cellpadding="0"
				cellspacing="0"
			>
				<!-- Row Banner -->
				<tr>
					<td>
						<img
							src="https://i.ibb.co/tbWgJ36/image-1.png"
							alt="people-banner"
							style="width: 100%; display: block"
						/>
					</td>
				</tr>
				<tr>
					<td>
						<img
							src="https://i.ibb.co/0yFQ7Dr/Rectangle-1-1.png"
							alt="rectangle"
							style="width: 100%; display: block"
						/>
					</td>
				</tr>
				<!-- Background Image Table -->
				<tr>
					<td
						style="
							background-image: url('https://i.ibb.co/xS4xYSJ/Top-page-bg.png');
							background-size: cover;
							background-position: center;
						"
					>
						<table
							width="100%"
							cellpadding="0"
							cellspacing="0"
						>
							<tr>
								<td>
									<img
										src="https://i.ibb.co/gRnQ35y/Synapse-Logo-03-1.png"
										alt="SynapseLogo"
										style="
											display: block;
											margin: auto;
											padding: 30px 10px 0px 10px;
										"
									/>
								</td>
							</tr>
							<tr>
								<td
									align="left"
									valign="top"
									style="padding: 0px 20px"
								>
									<h1>Who are we?</h1>
									<p style="line-height: 1.5rem; padding-right: 3rem">
										We are your premier destination for comprehensive workforce
										solutions. At Synapse, we pride ourselves on offering a
										diverse range of services tailored to meet all your
										staffing, payroll, and training needs.
									</p>
									<table
										cellpadding="0"
										cellspacing="0"
										role="presentation"
										style="padding: 20px"
									>
										<tr>
											<td
												align="center"
												style="padding-right: 30px"
											>
												<div style="font-weight: 600">Check us out:</div>
											</td>
											<td style="padding-right: 30px">
												<a
													href="https://www.linkedin.com/company/synapse-org/?viewAsMember=true"
													style="
														display: inline-block;
														padding: 8px 16px;
														background-color: #fbf6ff;
														border: 2px solid #000000;
														border-radius: 8px;
														text-decoration: none;
														color: #000000;
														font-size: 16px;
														line-height: 24px;
														box-shadow: 0px 1px 11px rgba(117, 120, 194, 0.25);
													"
												>
													<img
														src="https://i.ibb.co/5BDzXXL/image.png"
														alt="linkedin"
														style="vertical-align: middle; margin-right: 5px"
													/>
													LinkedIn
												</a>
											</td>
											<td>
												<a
													href="https://www.synapse-org.com/"
													style="
														display: inline-block;
														padding: 8px 16px;
														background-color: #fbf6ff;
														border: 2px solid #000000;
														border-radius: 8px;
														text-decoration: none;
														color: #000000;
														font-size: 16px;
														line-height: 24px;
														box-shadow: 0px 1px 11px rgba(117, 120, 194, 0.25);
													"
												>
													<img
														src="https://i.ibb.co/mFZsFvF/image.png"
														alt="website"
														style="vertical-align: middle; margin-right: 5px"
													/>
													Website
												</a>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td
									align="center"
									style="padding: 40px 0"
								>
									<img
										src="https://i.ibb.co/fHfnnL6/Artboard-2-1.png"
										alt="artboard"
										style="border-radius: 50%"
									/>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table
							style="
								background-image: url('https://i.ibb.co/Mkx1hLQ/Rectangle-59.png');
								background-size: cover;
								background-position: center;
								width: 600px;
								height: 633px;
							"
						>
							<tr>
								<td>
									<table
										cellpadding="0"
										cellspacing="0"
										role="presentation"
									>
										<tr style="height: 3rem">
											<td style="padding-left: 40px">
												<div class="line"></div>
											</td>
											<td style="text-align: center">
												<span
													style="
														padding: 20px 10px 0px 10px;
														font-size: 16px;
														color: #000;
														text-align: center;
														font-weight: 600;
													"
													>S E R V I C E S</span
												>
											</td>
											<td style="padding-left: 20px">
												<div class="line"></div>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									<table>
										<tr>
											<td
												style="padding-left: 30px"
												align="left"
											>
												<img
													src="https://i.ibb.co/0nwqpft/image.png"
													alt="people-svg"
												/>
											</td>
											<td style="padding-left: 20px">
												<h1>Staffing</h1>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									<div style="padding: 10px 30px">
										Whether you're seeking temporary
										<span class="text-highlight">contractual support</span> for
										a short-term project or aiming to build a long-term,
										high-performing team, our
										<span class="text-highlight"
											>permanent staffing solutions</span
										>, we are there to assist you!
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<table>
										<tr>
											<td style="padding-left: 30px; padding-top: 20px">
												<a
													style="
														display: inline-block;
														padding: 10px 32px;
														background-color: #5155ac;
														border: 2px solid #000000;
														border-radius: 8px;
														text-decoration: none;
														color: #fff;
														font-size: 16px;
														font-weight: 600;
														line-height: 24px;
														box-shadow: 0px 1px 11px rgba(117, 120, 194, 0.25);
													"
													href="https://www.synapse-org.com/ContactUs"
													>Enquire</a
												>
											</td>
											<td style="padding-left: 30px; padding-top: 20px">
												<a
													style="
														display: inline-block;
														padding: 10px 16px;
														background-color: #fbf6ff;
														border: 2px solid #000000;
														border-radius: 8px;
														text-decoration: none;
														color: #000000;
														font-size: 16px;
														line-height: 24px;
														box-shadow: 0px 1px 11px rgba(117, 120, 194, 0.25);
													"
													href="https://www.synapse-org.com/Staffing"
													>Learn more</a
												>
											</td>
										</tr>
									</table>
								</td>
							</tr>

							<tr>
								<td>
									<table>
										<tr>
											<td
												style="padding-left: 30px"
												align="left"
											>
												<img
													src="https://i.ibb.co/NL1kpQD/image.png"
													alt="payroll"
												/>
											</td>
											<td style="padding-left: 20px">
												<h1>Payroll</h1>
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td>
									<p style="padding: 10px 30px">
										Our expert team conducts
										<span class="text-highlight">thorough audits</span> to
										identify areas for improvement and then implements
										<span class="text-highlight">strategic restructuring</span>
										to optimize your payroll system.
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<table>
										<tr>
											<td style="padding-left: 30px; padding-bottom: 60px">
												<a
													style="
														display: inline-block;
														padding: 10px 32px;
														background-color: #5155ac;
														border: 2px solid #000000;
														border-radius: 8px;
														text-decoration: none;
														color: #fff;
														font-size: 16px;
														font-weight: 600;
														line-height: 24px;
														box-shadow: 0px 1px 11px rgba(117, 120, 194, 0.25);
													"
													href="https://www.synapse-org.com/ContactUs"
													>Enquire</a
												>
											</td>
											<td style="padding-left: 30px; padding-bottom: 60px">
												<a
													style="
														display: inline-block;
														padding: 10px 16px;
														background-color: #fbf6ff;
														border: 2px solid #000000;
														border-radius: 8px;
														text-decoration: none;
														color: #000000;
														font-size: 16px;
														line-height: 24px;
														box-shadow: 0px 1px 11px rgba(117, 120, 194, 0.25);
													"
													href="https://www.synapse-org.com/Payroll"
													>Learn more</a
												>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<!-- Add more rows as needed -->
			</table>
		</center>
	</body>
</html>



`, // html body
	});

	console.log('Message sent: %s', info.messageId);
	// Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
