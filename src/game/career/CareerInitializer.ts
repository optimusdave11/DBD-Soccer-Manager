import { contractDatabase } from "../contracts/ContractDatabase";

import { preseasonManager } from "../preseason/PreseasonManager";
import { inboxManager } from "../inbox/InboxManager";
import { dashboardManager } from "../dashboard/DashboardManager";

export class CareerInitializer {

  initialize(

    manager: any,

    club: any,

    managerContract: any

  ): void {

    /*
     * Manager
     */

    manager.clubId =
      club.clubId;

    /*
     * Contract
     */

    managerContract.personId =
      manager.id;

    contractDatabase.add(
      managerContract
    );

    /*
     * Preseason
     */

    preseasonManager.generate(
      club.clubId
    );

    /*
     * Inbox
     */

    inboxManager.initialize(
      manager,
      club
    );

    /*
     * Dashboard
     */

    dashboardManager.initialize();

    /*
     * TODO
     *
     * Generate player contracts.
     * Generate transfer window.
     * Generate fixtures.
     * Generate finances.
     * Save career.
     */

  }

}

export const careerInitializer =
  new CareerInitializer();