<form id="form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const data = `Name: ${name}\nEmail: ${email}`;
        const blob = new Blob([data], { type: 'text/plain' });
        const anchor = document.createElement('a');

        anchor.href = URL.createObjectURL(blob);
        anchor.download = 'form-data.txt';
        anchor.click();
    });
</script>
