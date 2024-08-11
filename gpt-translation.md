---
title: GPT Translation of your text
description: Enter the text you want to translate using GPT Translation. You can include custom instructions and a glossary of special terms. GPT-4o-mini will handle the translation, ensuring it meets your specifications and translates accurately into your selected language
permalink: /gpt-translation/
---

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script>
$(document).ready(function() {
    $('#translate-button').on('click', function() {
        const sourceText = $('#source-text').val();
        const sourceLanguage = $('#source-language').val();
        const targetLanguage = $('#target-language').val();
        const instructions = $('#custom-instructions').val();

        if ($.trim(sourceText) === '') {
            alert('Please enter text to translate.');
            return;
        }

        // Example AJAX request
        $.ajax({
            url: 'https://api.docgpt.ai/free-tools/translation',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                sourceText: sourceText,
                sourceLanguage: sourceLanguage,
                targetLanguage: targetLanguage,
                instructions: instructions
            }),
            success: function(response) {
                $('#translated-text').val(response.translatedText);
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });
});
</script>
<script>
        function updateCharacterCount() {
            const textarea = document.getElementById('source-text');
            const charCountElement = document.getElementById('character-count');
            const maxLength = textarea.getAttribute('maxlength');
            const currentLength = textarea.value.length;
            const remainingChars = maxLength - currentLength;
            charCountElement.textContent = `${currentLength}/${maxLength} characters`;
        }
</script>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" id="bootstrap-css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.1/font/bootstrap-icons.min.css" rel="stylesheet">
  <style>
        .separator {
            height: 20px;
        }
        .translate-buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
        }
        .arrow-icon {
            font-size: 3rem; /* Make the icon larger */
            margin: 0 15px; /* Adjust spacing around the icon */
        }
        .textarea-container textarea {
            height: 180px;
        }
        .textarea-container-small textarea {
            height: 59px;
        }
        .word-input {
            width: calc(50% - 1rem);
            margin-right: 1rem;
        }
        .translate-remove-button {
            border: none;
            background: none;
        }
        .translate-remove-button i {
            font-size: 1.25rem;
        }
        .promotion-banner i {
            font-size: 1.5rem;
        }
        .form-control {
            height: 100%;
        }
        .translate-inputs-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem; /* Space between columns */
        }
        .form-group {
            flex: 1;
            min-width: 0; /* Prevents items from growing too large */
        }
        .textarea-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem; /* Space between textareas */
        }
        .textarea-container textarea {
            height: 180px;
        }
       .arrow-icon {
            font-size: 3rem;
            margin-top: 30px;
        }
    </style>

<div class="container mt-5">
        <div class="translate-buttons">
            <div class="form-group mr-3">
                <label for="source-language">Source Language</label>
                <select id="source-language" class="form-control">
                     <option value="auto">Automatic</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Estonian">Estonian</option>
                    <option value="Finnish">Finnish</option>
                    <option value="French">French</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Latvian">Latvian</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Russian">Russian</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Slovenian">Slovenian</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Chinese Simplified">Chinese Simplified</option>
                </select>
            </div>
            <div class="form-group mr-3">
                <label for="target-language">Target Language</label>
                <select id="target-language" class="form-control">
                     <option value="Arabic">Arabic</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="English" selected>English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Estonian">Estonian</option>
                    <option value="Finnish">Finnish</option>
                    <option value="French">French</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Latvian">Latvian</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Russian">Russian</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Slovenian">Slovenian</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Chinese Simplified">Chinese Simplified</option>
                </select>
            </div>
            <i class="bi bi-arrow-right arrow-icon"></i>
        </div>
        <div class="translate-inputs-container">
            <div class="form-group">
                <label for="source-text">Type to translate</label>
                <textarea oninput="updateCharacterCount();" id="source-text" class="form-control" placeholder="Type to translate" maxlength="200"></textarea>
                <small class="form-text text-muted character-count" id="character-count">0/200 characters</small>
            </div>
            <div class="form-group">
                <label for="translated-text">The translation will appear here</label>
                <textarea id="translated-text" class="form-control" placeholder="The translation will appear here" readonly></textarea>
            </div>
        </div>
        <div class="separator"></div>
        <button id="translate-button" class="btn btn-primary" style="margin-top:50px;">Translate</button>
        <div class="separator"></div>
        <div class="translate-glossary-container">
        <label for="custom-instructions">Custom instructions</label>
            <div class="form-group textarea-container-small">
                <textarea id="custom-instructions" class="form-control" placeholder="Enter custom instructions, such as voice or tone or glossary of special words..." maxlength="70"></textarea>
            </div>
        </div>
        <div class="separator"></div>
        <div class="promotion-banner">
            <p>Translated with GPT-4o-mini <i class="bi bi-translate"></i></p>
        </div>
    </div>