import app from "./app";
import config from "./config";

async function main() {
  app.listen(config.port, () => {
    console.log(`BOOKKI LISTENING ON PORT ${config.port} 👌`);
  });
}

main();
