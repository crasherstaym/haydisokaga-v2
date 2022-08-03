dmx.config({
  "index": {
    "flow1": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "text",
            "name": "username"
          },
          {
            "type": "text",
            "name": "password"
          }
        ]
      }
    ]
  }
});
