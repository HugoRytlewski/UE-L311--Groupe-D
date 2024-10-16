<!DOCTYPE html>
<!-- Réagencement des lignes pour une vision plus claire et ajout de "lang" pour rendre le site accessible -->
<html lang="fr"> 
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Ajout de cette ligne pour rendre la page responsive -->
        <!-- Correction du titre -->
        <title>Time</title> 
        <!--Correction des liens -->
        <link href="https://fonts.googleapis.com/css?family=Aldrich&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/style.css">
        <!--Ajout "defer" pour faire en sorte que le script se charge après l'analyse de la page html -->
        <script src="assets/js/script.js" defer></script>
    </head>

<!-- Réagencement des lignes comme précedemment -->

    <body>
        <div id="wrapper">
            <div class="inside">
                <div class="timer">
                    <span id="hours">00</span>
                    <span id="minutes">00</span>
                    <span id="seconds">00</span>
                </div>
                <div class="controls">
                    <button class="button pause"></button>
                </div>
            </div>
        </div>
    <body>
</html>