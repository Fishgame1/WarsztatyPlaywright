import { FullConfig } from "@playwright/test";

async function globalTeardown(config: FullConfig) {
  console.log('I want to go home!')
}

export default globalTeardown;
