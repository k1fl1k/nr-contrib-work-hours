# Node-RED Working Hours Check

This Node-RED project provides a custom **"working-hours-check"** node that allows you to check whether a given timestamp falls within working hours (9:00 AM - 6:00 PM). The node will return `true` if the timestamp is within the working hours, and `false` if it's outside.

## Project Structure

This Node-RED flow includes:

1. **Inject Node**: This node sends a timestamp to the system for checking.
2. **Working Hours Check Node**: A custom node that checks if the timestamp falls within the working hours (9:00 AM to 6:00 PM).
3. **Debug Node**: Displays the result (`true` or `false`) based on whether the timestamp is within working hours.

## Prerequisites

Ensure you have the following installed before using this project:

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [Node-RED](https://nodered.org/) (version 4.x or higher)

### Installation

To use this project, follow these steps:

1. **Install Node-RED**:
    - If you haven’t installed Node-RED, you can follow the installation instructions from the official website: [Node-RED Installation Guide](https://nodered.org/docs/getting-started/).

2. **Download/Clone this Project**:
    - Clone this project or copy the provided flow and import it into your Node-RED instance.

3. **Import Flow**:
    - Open Node-RED in your browser (`http://localhost:1880`).
    - Click on the menu (top right corner) and select **Import**.
    - Paste the JSON flow (provided below) into the text area and click **Import**.
    - Click **Deploy** to start using the flow.

### Flow JSON

Here’s the JSON for the flow:

```json
[
    {
        "id": "f02994d3719930f1",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "c9d072b8.6702b",
        "type": "inject",
        "z": "f02994d3719930f1",
        "name": "Inject Timestamp",
        "props": [
            {
                "p": "timestamp",
                "v": "2025-03-01T08:00:00",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "x": 390,
        "y": 200,
        "wires": [
            [
                "fb9bafdf.5dbdd8"
            ]
        ]
    },
    {
        "id": "fb9bafdf.5dbdd8",
        "type": "working-hours-check",
        "z": "f02994d3719930f1",
        "input_key": "timestamp",
        "output_key": "in_working_hours",
        "x": 650,
        "y": 200,
        "wires": [
            [
                "f1e0e7c7.6e10d8"
            ]
        ]
    },
    {
        "id": "f1e0e7c7.6e10d8",
        "type": "debug",
        "z": "f02994d3719930f1",
        "name": "Debug Output",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 870,
        "y": 200,
        "wires": []
    },
    {
        "id": "8a14f02bd3666bd6",
        "type": "inject",
        "z": "f02994d3719930f1",
        "name": "Inject Timestamp",
        "props": [
            {
                "p": "timestamp",
                "v": "2025-03-01T11:00:00",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "x": 390,
        "y": 340,
        "wires": [
            [
                "d78edd3e6cef97a7"
            ]
        ]
    },
    {
        "id": "d78edd3e6cef97a7",
        "type": "working-hours-check",
        "z": "f02994d3719930f1",
        "input_key": "timestamp",
        "output_key": "in_working_hours",
        "x": 650,
        "y": 340,
        "wires": [
            [
                "a6c8b1e946a429e7"
            ]
        ]
    },
    {
        "id": "a6c8b1e946a429e7",
        "type": "debug",
        "z": "f02994d3719930f1",
        "name": "Debug Output",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 870,
        "y": 340,
        "wires": []
    }
]
```

### How It Works

1. **Inject Timestamp**: The **Inject** node allows you to set a timestamp (e.g., `2025-03-01T08:00:00`) manually. It will send the timestamp when you press the **Inject** button.

2. **Working Hours Check**: The **working-hours-check** node takes the timestamp from the **Inject** node and checks if the time falls within working hours (9:00 AM - 6:00 PM). It returns `true` if the timestamp is within working hours and `false` if it's outside.

3. **Debug Output**: The **Debug** node outputs the result of the working hours check (`true` or `false`) in the **Debug** tab in Node-RED.

### Example Use Cases

- **Check if an event is within working hours**: You can send a timestamp of an event and check if it occurs within working hours.
- **Automation of notifications**: Use this flow to automate notifications based on whether certain events happen during working hours.

### Customization

- **Modify Inject Timestamp**: You can manually change the timestamp in the **Inject** node to any time you wish to test.
- **Output Key**: Modify the output key in the **working-hours-check** node if you want the result to be stored under a different key.

### Troubleshooting

- If the flow is not working as expected, check the **Debug** tab for any errors or unexpected behavior.
- Make sure the timestamp format is valid. It should be in ISO 8601 format (`YYYY-MM-DDTHH:MM:SS`).

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
