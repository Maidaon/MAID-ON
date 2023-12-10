<?php
require 'config.php';

if (!empty($_SESSION["id"])) {
    $id = $_SESSION["id"];
    echo "Session ID: $id<br>";

    $result = mysqli_query($conn, "SELECT * FROM tbl_users WHERE id = $id");

    if (!$result) {
        die('Query failed: ' . mysqli_error($conn));
    }
    echo "Number of Rows: " . mysqli_num_rows($result) . "<br>";

    $row = mysqli_fetch_assoc($result);
    print_r($row);
} else {
    header("Location: login.php");
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Index</title>
  </head>
  <body>
    <h1>Welcome <?php echo $row["name"]; ?></h1>
    <a href="logout.php">Logout</a>
  </body>
</html>