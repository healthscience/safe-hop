'use strict'
/**
*  Manage LedgerData  key store datastore
*
* @class LedgerData
* @package    LedgerData
* @copyright  Copyright (c) 2024 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import EventEmitter from 'events'

class LedgerData extends EventEmitter {

  constructor(core, swarm) {
    super()
    this.hello = 'LedgerData'
    this.liveLedger = {}
  }

  /**
   * setup hypercore protocol
   * @method startKBLedger
   *
  */
  startKBLedger = async function () {

  }

  /**
   * save kbledger entry
   * @method saveKBLentry
   *
  */
  saveKBLentry = async function (ledgerEntry) {

  }

}

export default LedgerData