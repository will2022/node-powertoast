import toast from "../lib/esm.mjs";

console.log("Default transport: " + `${toast.isWinRTAvailable ? "WinRT" : "Powershell"}`);

toast({
  disableWinRT: false,
  appID: "Microsoft.XboxApp_8wekyb3d8bbwe!Microsoft.XboxApp",
  title: "Dummy",
  message: "Hello World",
  icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/480/winner.jpg",
  cropIcon: true,
  attribution: "Achievement",
  timeStamp: "1568710924",
  onClick: "bingmaps:?q=sushi",
  button: [
    { text: "1", onClick: "bingmaps:?q=sushi" },
    { text: "2", onClick: "bingmaps:?q=sushi", contextMenu: true },
    { text: "3", onClick: "bingmaps:?q=sushi" },
    { text: "4", onClick: "bingmaps:?q=sushi" },
    { text: "5", onClick: "bingmaps:?q=sushi" },
    { text: "6", onClick: "bingmaps:?q=sushi" },
  ],
  silent: false,
  audio: "ms-winsoundevent:Notification.Achievement",
  progress: {
    header: "up",
    footer: "down",
    percent: 0,
  },
  uniqueID: "id0",
  group: {
    id: "id1",
    title: "group",
  },
  headerImg: "../screenshot/example.png",
  callback: {
    keepalive: 8000,
    onActivated: () => {
      console.log("activated");
    },
    onDismissed: (reason) => {
      console.log(reason);
    },
  },
})
  .then(() => {
    console.log("ok");
  })
  .catch((err) => {
    console.log(err);
  });
