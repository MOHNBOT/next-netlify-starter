$('#chat-form').submit(function (event) {
    event.preventDefault();

    const userInput = $('#user-input').val();

    $.ajax({
        url: '/.netlify/functions/chatgpt',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'input': userInput }),
        success: function (data) {
            const generatedResponse = data.response;
            $('#response-container').html(`<p>ChatGPT: ${generatedResponse}</p>`);
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });

    $('#user-input').val('');
});
