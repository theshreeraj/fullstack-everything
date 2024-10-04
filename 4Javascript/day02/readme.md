<!-- local , global , block -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
<p>lorem</p>


    <script>
        // global scope
      var x = 100;
      console.log(x);

      if (true) {
        var x = 300;
        console.log("this is inside if statement", x);
      }

      console.log("this is outside if statement", x);



      //   ------------------------------------

    //   function scope

      const y = 100;
      console.log("first value", y);

      function random() {
        const y = 500;

        console.log("y ka inside value", y);
      }

      random();

      console.log("y ka outside value", y);


    </script>
  </body>
</html>
