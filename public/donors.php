<!DOCTYPE html>
<html>
<head>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-96169999-1', 'auto');
		ga('send', 'pageview');
	</script>
	<title>Questioning Meat</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./css/materialize.min.css">
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway|Sansita|Kalam" rel="stylesheet">
	<link rel="shortcut icon" href="favicon.ico">
</head>
<body>
	<div style="padding: 100px; padding-top: 0px;">
		<h1 style="color: darkgreen;">Donors:</h1>
		<p>
			<?php
			$myfile = fopen("./files/names.txt", "r") or die("Unable to open file!");
			$number = 1;
			// Output one character until end-of-file
			while(!feof($myfile)) {
				echo "$number. " . fgets($myfile) . "<br>";
				$number++;
			}
			fclose($myfile);
			?>
		</p>
	</div>
	<script type="text/javascript" src="./js/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="./js/materialize.min.js"></script>
	<script type="text/javascript" src="./js/custom.js"></script>
</body>
</html>