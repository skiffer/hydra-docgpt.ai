---
layout: docs_layouts/default
title: How to use the CREATE_FILE_ON_DRIVE function to create various file types in Google Drive directly from Google Sheets
nav_order: 5
parent: GPT for Sheets
permalink: /docs/gpt-for-sheets/creating-files-in-google-drive-from-sheets
description: Learn how to use the CREATE_FILE_ON_DRIVE function to create various file types in Google Drive directly from Google Sheets
---

# How to use the CREATE_FILE_ON_DRIVE function to create various file types in Google Drive directly from Google Sheets - <a href="/gpt-for-sheets/" target="_blank">GPT for Google Sheets</a>


### Before you have started
1. Install <a href="https://workspace.google.com/marketplace/app/gpt_for_docs_sheets_forms_slides/466607203252" target="_blank">GPT for Sheets Add-On</a>
2. <a href="/gpt-for-sheets/" target="_blank">Upgrade subscription to Pro User plan</a>
3. Please click on the 'Refresh Account' button located: Extensions > GPT for Sheets, Docs, Slides, Forms > Refresh Account


## =CREATE_FILE_ON_DRIVE(fileName, content, mimeType)

Allows users to create a file in Google Drive with the specified content and MIME type. This function supports various file formats such as HTML, Word (DOCX), plain text, and more. By default, the function will create an HTML file if no MIME type is specified.

> **Important**: Before using, you need to authorize the application to access your Google Drive.

> [Click here to Authorize Application](#) <!-- This link will dynamically be updated to the authorization URL using Inside the GPT for Sheets add-on. -->

Ensure that you have also enabled access to Google Drive through your app's permissions.

### Arguments:

> - **fileName** (required): The name of the file to be created, including its extension (e.g., `document.docx`).
> - **content** (required): The content to be written into the file. This could be text, HTML, or any other content depending on the file type.
> - **mimeType** (optional): The MIME type of the file. If not provided, it defaults to `text/html`.

### Examples:

#### Example 1: Create an HTML File (Default)

This will create an HTML file named `index.html` in Google Drive with the content `<h1>Hello World!</h1>`.

> =CREATE_FILE_ON_DRIVE("index.html", "<h1>Hello World!</h1>")
> =CREATE_FILE_ON_DRIVE("index.html", A11)
> =CREATE_FILE_ON_DRIVE("index.html", A11 & B11)

#### Example 2: Create a Microsoft Word Document (DOCX)

This example creates a Word document with the filename `MyDocument.docx` and the specified content. The MIME type for a Word document is `application/vnd.openxmlformats-officedocument.wordprocessingml.document`.

> =CREATE_FILE_ON_DRIVE("MyDocument.docx", "This is the content of my Word document.", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")

#### Example 3: Create a Plain Text File

The following example creates a plain text file with the name `example.txt` and the content `"This is a plain text file."`.

> =CREATE_FILE_ON_DRIVE("example.txt", "This is a plain text file.", "text/plain")

#### Example 4: Create a PDF File

This will create a PDF file named `example.pdf` with the content `"This is a PDF file."`. The MIME type used here is `application/pdf`.

> =CREATE_FILE_ON_DRIVE("example.pdf", "This is a PDF file.", "application/pdf")

### Notes:

> - The function will create the file in your Google Drive root directory by default.
> - You can specify different file types using the appropriate MIME types for the files.
> - Ensure that your Google Drive account has proper permissions, and you have authorized the application to create files.

