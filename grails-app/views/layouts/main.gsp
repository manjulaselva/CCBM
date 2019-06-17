%{--
    *****************************************************************************
    Copyright 2019 Harman Connected Services
    ******************************************************************************
--}%


<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><g:layoutTitle default="Grails"/></title>
    %{--Font Family Montserrat--}%
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    %{--Bootstrap Libraries--}%
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.0/css/all.css" integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h" crossorigin="anonymous">
    <link href="../css/style.css">
    <asset:stylesheet src="application.css"/>
	<asset:javascript src="application.js"/>
	<g:layoutHead/>
</head>

<body>

    <nav class="navbar fixed-top navbar-expand-lg navbar-light" style="background-color: #427cb4">
        <a class="navbar-brand" href="/Sanchaar" style="font-family: MyCustomFontName;font-weight: bold; font-size: 40px;color:white;">Sanchaar</a>
        <span style="color: #ffffff">
            <sub>v ${grailsApplication.metadata['app.version']}</sub>
        </span>
        <sec:ifLoggedIn>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item nav-item dropdown active">
                            <a class="nav-link dropdown-toggle" style="position: relative" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span id="greet" style="color: #000000">
                                    <g:loggedInUsername/></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <g:link class="dropdown-item" controller="logout" action="index"><i class="fas fa-sign-out-alt"> Logout</i></g:link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </sec:ifLoggedIn>



    </nav>
%{--<div class="container" ng-app="Sanchaar">

</div>--}%

%{--<ui-view>
    <i>Loading ....</i>
</ui-view>--}%
<div id="content" class="container-fluid" ng-app="Sanchaar">

    <div ui-view></div>
</div>


<footer class="footer">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-um-12 col-sm-12">
				<div class="copyrightbox pull-left">
                    <p>© <span id="year"> ${grailsApplication.metadata['app.copyright']}</span> HARMAN INTERNATIONAL INDUSTRIES, INCORPORATED.
						<br>
						<span>All Rights Reserved |
							<a href="http://www.harman.com/privacy-policy" target="_blank">Privacy Policy</a> |
							<a href="http://www.harman.com/terms-use" target="_blank">Terms of Use</a> |
						</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>

    <div id="spinner" class="spinner" style="display:none;"><g:message code="spinner.alt" default="Loading&hellip;"/></div>

    <g:layoutBody/>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>