export default () => `
<form action="https://formspree.io/xoqkeygo" method="POST">
<label for="first-name">First Name:</label>
<input type="text" name="first-name" id="first-name"/>

<label for="last-name">Last Name:</label>
<input type="text" name="last-name" id="last-name"/>

<label for="email">Email:</label>
<input type="text" name="email" id="email" required />

<label for="Message">Message:</label>
<textarea name="Message" rows="15" cols="80" id="Message"></textarea>

<input type="submit" name="submit" value="Submit" class="submit-button"/>
</form>`;

// In form action put formspree link!