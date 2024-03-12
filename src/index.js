'use strict'
/**
*  Safe data interface
*
* @class SafeWorker
* @package    SafeWorker
* @copyright  Copyright (c) 2022 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import EventEmitter from 'events'
import os from 'os'
import b4a from 'b4a'

// import { Node } from 'hyperBeeBee/lib/messages.js'
import DataWorker from './peerData.js'
import DriveWorker from './drive.js'
import PeerWorker from './peers.js'

class SafeWorker extends EventEmitter {

  constructor() {
    super()
    this.hello = 'Safe'
    this.store = {}
    this.swarm = {}
    this.BeeBeeData = {}
    this.DriveFiles = {}
    this.core1 = {}
    this.core2 = {}
    this.core3 = {}
    this.discKeypeer = ''
    this.readcore = null
    this.warmPeers = []
    this.startSafe()
    this.networkListeners()
  }

  /**
   * setup Safe protocol
   * @method startSafe
   *
  */
  startSafe = async function () {

  }

  /**
   * bring SafeNetwork Connection live
   * @method activateSafeNetwork
   *
  */
  activateSafeNetwork = async function () {

    this.emit('hcores-active')
  }

  /**
   * pass on websocket to library
   * @method setWebsocket
   *
  */
  setWebsocket = function (ws) {
    this.wsocket = ws
    this.BeeBeeData.setWebsocket(ws)
    this.DriveFiles.setWebsocket(ws)
  }


  /**
  * listen for outputs from workers
  * @method networkListeners
  *
  */
  networkListeners = function () {
    this.Peers.on('peer-network', (data) => {
      this.wsocket.send(JSON.stringify(data))
    })
    // peer connection active
    this.Peers.on('peer-connect', (data) => {
      this.Peers.writeTonetwork(data)
    })
    // data for BeeBeeBeeBee
    this.Peers.on('BeeBeeBeeBee-data', (data) => {
      this.emit('peer-topeer', data)
    })
    // new warm incoming peer
    this.Peers.on('connect-warm', (data) => {
      let peerId = {}
      peerId.name = 'new-peer'
      peerId.publickey = data
      peerId.datastore = ''
      this.warmPeers.push(peerId)
      this.emit('peer-incoming', peerId)
    })
  }

  /**
  * manage flow to network of peers and data
  * @method networkPath
  *
  */
  networkPath = function (message) {
    if (message.action === 'share') {
      if (message.task === 'peer-join') {
        // has the peer joined already?
        let peerMatch = false
        for (let wpeer of this.warmPeers) {
          if (wpeer.publickey = message.data.publickey) {
            peerMatch = true
          }
        }
        if (peerMatch === true) {
          this.Peers.peerAlreadyJoin(message.data)
          this.Peers.writeTonetwork(message.data.publickey)
        } else {
          this.warmPeers.push(message.data)
          this.Peers.peerJoin(message.data)
        }
      } else if (message.task === 'peer-write') {
        this.emit('peer-write', message.data)
      } else if (message.task === 'topic') {
        // this.Peers.peerTopic(message.data.topic)
      }
    }
  }
  
}

export default SafeWorker