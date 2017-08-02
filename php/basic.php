 <?php
$servername = "localhost";
$username = "cxn34558_web";
$password = "cxn34558";
$dbname = "cxn34558_loslenos";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, name FROM ingredient";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?> 