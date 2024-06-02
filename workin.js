javascript:(function(){
    var newHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Text Message Window</title>
<style>
    /* CSS for styling */
    #contacts {
        background-color: #f2f2f2;
        padding: 10px;
    }
    #messages {
        padding: 10px;
        margin-bottom: 10px;
    }
    .message {
        padding: 5px;
        margin-bottom: 5px;
    }
    .outgoing {
        text-align: right;
    }
    .incoming {
        text-align: left;
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
    .clearfix {
        clear: both;
    }
</style>
</head>
<body>

<div id="contacts">
    <h2>Contacts</h2>
    <p>Joe: 848-555-1212</p>
</div>

<div id="messages">
    <!-- Messages will be appended here -->
</div>

<div class="left">
    <input type="text" id="messageInputLeft" placeholder="Type your message...">
    <button class="sendButton" data-direction="0" onclick="sendMessageLeft()">Send Left</button>
</div>

<div class="right">
    <input type="text" id="messageInputRight" placeholder="Type your message...">
    <button class="sendButton" data-direction="1" onclick="sendMessageRight()">Send Right</button>
</div>

<div class="clearfix"></div>

<script>
    var Shega = ""
    // JavaScript for functionality
    function sendMessageLeft() {
        sendMessage("0");
    }

    function sendMessageRight() {
        sendMessage("1");
    }

    function sendMessage(direction) {
        var messageInput;
        if (direction === "0") {
            messageInput = document.getElementById("messageInputLeft");
            Shega = messageInput.value
            fartingMessages()
        } else {
            messageInput = document.getElementById("messageInputRight");
        }

        var messageText = messageInput.value.trim();

        if (messageText === "") {
            alert("Please enter a message.");
            return;
        }

        // Create a new message element
        var messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        messageElement.classList.add("message");

        if (direction === "0") {
            messageElement.classList.add("outgoing");
        } else {
            messageElement.classList.add("incoming");
        }

        // Append the message to the messages container
        document.getElementById("messages").appendChild(messageElement);

        // Save the message to local storage
        saveMessage(messageText, direction);

        // Clear the input field
        messageInput.value = "";
    }

    function saveMessage(message, direction) {
        // Load existing messages from local storage or create an empty array
        var messages = JSON.parse(localStorage.getItem("messages")) || [];

        // Add the new message to the array
        messages.push({ text: message, direction: direction });

        // Save the updated messages back to local storage
        localStorage.setItem("messages", JSON.stringify(messages));
    }

    function fartingMessages() {
        var e = "https://www.textnow.com/api/users/silly2821/messages",
            t = {
                from_name: "Bob Jones",
                has_video: !1,
                contact_value: "+18452436193",
                contact_type: 1,
                message: Shega,
                read: 1,
                to_name: "(845) 243-6193",
                message_direction: 2,
                message_type: 1,
                new: !0,
                date: "2024-01-15T15:35:38.907Z"
            },
            n = "";
        for (var o in t) {
            n.length && (n += "&");
            n += encodeURIComponent(o) + "=" + encodeURIComponent(t[o])
        }
        var r = new XMLHttpRequest;
        r.open("POST", e, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), r.onreadystatechange = function() {
            4 === r.readyState
        }, r.onerror = function() {
            alert("Request failed!")
        }, r.ontimeout = function() {
            alert("Request timed out!")
        }, r.onabort = function() {
            alert("Request aborted!")
        }, r.send(n)
    }
    function loadMessages() {
        // Load messages from local storage
        var messages = JSON.parse(localStorage.getItem("messages")) || [];

        // Display messages in the messages container
        var messagesContainer = document.getElementById("messages");
        messages.forEach(function(message) {
            var messageElement = document.createElement("div");
            messageElement.textContent = message.text;
            messageElement.classList.add("message");

            if (message.direction === "0") {
                messageElement.classList.add("outgoing");
            } else {
                messageElement.classList.add("incoming");
            }

            messagesContainer.appendChild(messageElement);
        });
    }
    // Load messages when the page is loaded
    window.onload = function() {
        loadMessages();
        
    };
</script>

</body>
</html>

	`;
    
    document.open();
    document.write(newHTML);
    document.close();
})();   
