<?php
session_start();
if (!isset($_SESSION['users_id'])) {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 class="text-4xl">INI DASHBOARD YA</h1>
    <button id="logoutButton">Logout</button>

    <script>
      document.getElementById("logoutButton").addEventListener('click', async () => {
        try {
          const response = await fetch('http://localhost/pbl/api-coba/auth', {
            method: 'DELETE',
          });
          const result = await response.json();
          window.location.reload();
          alert(result.message);
        } catch (error) {
          console.error("Error : ", error);
        }
      })
    </script>
  </body>
</html>
