<!DOCTYPE html>
<html lang="en">
    <?php
        echo ("hello");
    ?>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>js</title>
    </head>
    <body>
        <h1 id="welcome-el"></h1>
        <h2>People entered:</h2>
        <h3 id="count-el">0</h3>
        <p id="save-el">Previous entries: <p>
        <input type="submit" id="increment-btn" value="Increment" onclick="increment()"></input>
        <input type="submit" id="save-btn" value="Save" onclick="save()"></input>


        <script src="index.js">
        </script>
    </body>
</html>