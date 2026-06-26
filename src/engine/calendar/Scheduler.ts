export class Scheduler {
    async run(): Promise<void> {
        await this.processFixtures();

            await this.processTransfers();

                await this.processContracts();

                    await this.processInjuries();

                        await this.processSuspensions();

                            await this.processTraining();

                                await this.processPlayerDevelopment();

                                    await this.processFinances();

                                        await this.processBoard();

                                            await this.processAutosave();
                                              }

                                                private async processFixtures(): Promise<void> {
                                                    // TODO
                                                      }

                                                        private async processTransfers(): Promise<void> {
                                                            // TODO
                                                              }

                                                                private async processContracts(): Promise<void> {
                                                                    // TODO
                                                                      }

                                                                        private async processInjuries(): Promise<void> {
                                                                            // TODO
                                                                              }

                                                                                private async processSuspensions(): Promise<void> {
                                                                                    // TODO
                                                                                      }

                                                                                        private async processTraining(): Promise<void> {
                                                                                            // TODO
                                                                                              }

                                                                                                private async processPlayerDevelopment(): Promise<void> {
                                                                                                    // TODO
                                                                                                      }

                                                                                                        private async processFinances(): Promise<void> {
                                                                                                            // TODO
                                                                                                              }

                                                                                                                private async processBoard(): Promise<void> {
                                                                                                                    // TODO
                                                                                                                      }

                                                                                                                        private async processAutosave(): Promise<void> {
                                                                                                                            // TODO
                                                                                                                              }
                                                                                                                              }

                                                                                                                              export const scheduler = new Scheduler();
}