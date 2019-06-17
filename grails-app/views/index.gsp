%{--
    *****************************************************************************
    Copyright 2019 Harman Connected Services
    ******************************************************************************
--}%

<!DOCTYPE html>
<html>
<head>
	<meta name="layout" content="main"/>
	<title>ITC - Where People Learn, Share and Build</title>
	%{--<g:applyLayout name="main">
		<r:require module="interTeamCommunicationJS" />
	</g:applyLayout>--}%

	%{--JavaScript Libraries--}%
	<script src="common/angular/angular.js"></script>
	<script src="common/angular/angular-resource.min.js"></script>
	<script src="common/angular/angular-ui-router.min.js"></script>
	<script src="common/angular/angular-common.js"></script>

	%{--StyleSheet--}%
	<link rel="stylesheet" href="css/style.css">

	%{--Home Application JavaScript--}%
	<script src="Sanchaar/app.js"></script>

	%{--Landing Page--}%
	<script src="Sanchaar/home/homeController.js"></script>
	<script src="Sanchaar/home/questionService.js"></script>


	%{--Ask Question Page--}%
	<script src="Sanchaar/askQuestion/askQuestionController.js"></script>
	<script src="Sanchaar/askQuestion/askQuestionService.js"></script>

	%{--AnswerSection--}%
	<script src="Sanchaar/answerSection/answerSectionService.js"></script>

	%{--Question Bank--}%
	<script src="Sanchaar/questionBank/questionBankController.js"></script>
	<script src="Sanchaar/questionBank/questionBankService.js"></script>

	%{--UserQuestion--}%
	<script src="Sanchaar/userQuestion/userQuestionController.js"></script>
	<script src="Sanchaar/userQuestion/userQuestionService.js"></script>

	%{--UserProfile--}%
	<script src="Sanchaar/userProfile/userProfileController.js"></script>
	<script src="Sanchaar/userProfile/userProfileService.js"></script>

	%{--Feedback--}%
	<script src="Sanchaar/feedback/feedbackController.js"></script>
	<script src="Sanchaar/feedback/feedbackService.js"></script>


</head>
<body>

</body>
</html>


