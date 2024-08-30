> npm i || npm install
`how to use the script`
+ First you have to replace your gmail and password from the code 
+ default password might not work on nodemailer 
+ then you have to check your google account 
+ there should be 2fa on
+ then you have to create a app password [App Password](https://myaccount.google.com/apppasswords "direct link")
+ after that paste that code in a script 
# HTML email template starter
```<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
@media only screen and (max-width: 600px) {
				img {
					height: 60%;
				}
			}
  /* Outlook-specific styles */
        /*[if mso]>
        <style type="text/css">
        .text-highlight { color: #5155ac !important; font-weight: bold !important; }
        .line { border-top: 1px solid #9f9f9f !important; }
        </style>
        <![endif]*/
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

   <tr>
					<td>
	</td>
				</tr>
			</table>
		</center>
	</body>
</html>
```
