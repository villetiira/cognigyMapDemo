initWebchat(
    "https://endpoint-trial.cognigy.ai/b168c8e1d84be07fc594357ba64db8ce62584ebc972ed4748ebc086304c2c58d",
    {
        settings: {
            engagementMessageText: "Hello Belsimpel!",
            engagementMessageDelay: 3000,
            enableUnreadMessagePreview: true,
            enableUnreadMessageBadge: true,
            getStartedButtonText: "",
            getStartedText: "",
            designTemplate: 2
        }
    }
    ).then((webchat) => {
        webchat.open();
    });