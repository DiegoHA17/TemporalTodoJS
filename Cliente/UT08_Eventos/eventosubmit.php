<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    echo "¡Hola, " . $name . "! Tu formulario ha sido enviado correctamente.";
} else {
    echo "No se ha recibido ningún dato.";
}
?>