'use strict'
/**
*  Manage Peers connections
*
* @class NetworkPeers
* @package    NetworkPeers
* @copyright  Copyright (c) 2022 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import EventEmitter from 'events'


class NetworkPeers extends EventEmitter {

  constructor(store, swarm) {
    super()
    this.hello = 'peernetwork'
    this.peerHolder = {}
    this.peerConnect = {}
  }

  /**
   * public/piv key on DHT
   * @method networkKeys
   *
  */
  networkKeys = function () {
  }

  /**
   * connection listen
   * @method listenNetwork
   *
  */
  listenNetwork = function () {
  }

  /**
   * 
   * @method assessData data and act
   *
  */
  assessData = function (peer, data) {
  }

  /**
   * write message to network
   * @method writeTonetwork
   *
  */
  writeTonetwork = function (publickey) {
  }


  /**
   * join peer to peer private (server)
   * @method peerJoin
   *
  */
  peerJoin = function (peerContext) {
  }

  /**
   * already joined but keep track context data
   * @method peerAlreadyJoin
   *
  */
  peerAlreadyJoin = function (peerContext) {
  }


  /**
   * join peer to peer private (client)
   * @method peerJoinClient
   *
  */
  peerJoinClient = function () {
  }

  /**
   * listen for topics as a client
   * @method listenClient
   *
  */
  listenClient = async function (topic) {
  }

  /**
   * 
   * @method listen
   *
  */
  listen = function () {
  }

  /**
   * setup peers protocol
   * @method setupHyerPeers
   *
  */
  setupHyerPeers = function () {
  }

}

export default NetworkPeers