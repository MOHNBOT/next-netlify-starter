import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatGPT API Integration</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>Chat with ChatGPT 3.5 Turbo</h1>
    <form id="chat-form">
        <label for="user-input">Your message:</label>
        <input type="text" id="user-input" name="user-input">
        <button type="submit">Send</button>
    </form>
    <div id="response-container"></div>

    <script src="script.js"></script>
</body>
</html>
