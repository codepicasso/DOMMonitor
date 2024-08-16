# DOM Monitor Extension

## Overview
This project includes a browser extension that monitors DOM changes across any websites and logs these changes to a local server.

## Installation

### Browser Extension
1. Clone the repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode by toggling the switch in the top-right corner.
4. Click on "Load unpacked" and select the `extension` directory from the cloned repository.

### Server
1. Navigate to the `server` directory in your command line interface.
2. Run `npm install` to install dependencies.
3. Start the server by running `node server.js`.

## Testing
1. With the extension installed and the server running, navigate to any website in Chrome.
2. Make changes to the website DOM (e.g., modify elements via Chrome's Developer Tools).
3. Check the console of your server to see the logged notifications of DOM changes.
4. Additionally, the `notifications.log` file in the server directory will accumulate all change logs.
