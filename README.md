# MMM-CountDown

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) which can count down the days to a date/event.

I've never written anything for Node.js before, so hopefully this isn't a total mess, if it is - feel free to lend a hand :)

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-CountDown',
            config: {
                event: "New Millenium",
                date: "3000-01-01"
            }
        }
    ]
}
```

## Configuration options

| Option           | Description
|----------------- |-----------
| `event`        | *Required* Name of event to count down to (displayed above counter)
| `date`        | *Required* Date to count down to (YYYY-MM-DD)

If either of the above are missing, the module will count down to the New Millenium (3000-01-01)
