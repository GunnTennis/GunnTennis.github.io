<!DOCTYPE html>
<html>
<head>
    <title>Form Submission Result</title>
</head>
<body>
    <h2>Form Submission Details</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Collect and sanitize the input data
        $name = htmlspecialchars($_POST['Name']);
        $message = htmlspecialchars($_POST['Message']);
    
        // Specify the recipient email address
        $to = 'owner@example.com'; // Replace with the website owner's email address
    
        // Set the email subject
        $subject = 'New Message from Website Form';
    
        // Construct the email body
        $body = "You have received a new message from your website form:\n\n";
        $body .= "Name: " . $name . "\n";
        $body .= "Message: " . $message;
    
        // Set the email headers
        $headers = "From: no-reply@example.com"; // Replace with a valid 'From' address
    
        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "<p>Message sent successfully!</p>";
        } else {
            echo "<p>Message sending failed.</p>";
        }
    }
    ?>
</body>
</html>
