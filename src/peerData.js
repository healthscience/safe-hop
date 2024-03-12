'use strict'
/**
*  Manage HyperBee  key store datastore
*
* @class PeerData
* @package    PeerData
* @copyright  Copyright (c) 2022 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import EventEmitter from 'events'
import b4a from 'b4a'

class PeerData extends EventEmitter {

  constructor(store, swarm) {
    super()
    this.hello = 'hyperbee'
    this.store = store
    this.swarm = swarm
    this.liveBees = {}
  }

  /**
   * pass on websocket to library
   * @method setWebsocket
   *
  */
  setWebsocket = function (ws) {
    this.wsocket = ws
  }

  /**
   * setup hypercore protocol
   * @method setupHyperbee
   *
  */
  setupHyperbee = async function () {
  }

  /**
   * save pair in keystore public network library
   * @method savePubliclibrary
   *
  */
  savePubliclibrary = async function (refContract) {
  }
  

  /**
   * save pair in keystore db
   * @method savePeerLibrary
   *
  */
  savePeerLibrary = async function (refContract) {
  }

  /**
   * save kbledger entry
   * @method saveKBLentry
   *
  */
  saveKBLentry = async function (ledgerEntry) {
  }

  /**
   * save HOPresults
   * @method saveHOPresults
   *
  */
  saveHOPresults = async function (refContract) {
  }

  /**
   * save chat history
   * @method saveBentochat
   *
  */
  saveBentochat = async function (chatHistory) {
  }

  /**
   * delete chat item
   * @method deleteBentochat
   *
  */
  deleteBentochat = async function (chat) {
  }

  /**
   * lookup peer bentospace layout default
   * @method getBentochat
   *
  */
  getBentochat = async function (key) {
  }

  /**
   * lookup range save chat history
   * @method getBentochatHistory
   *
  */
  getBentochatHistory = async function (range) {
  }

  /**
   * save space menu
   * @method saveSpaceHistory
   *
  */
  saveSpaceHistory = async function (spaceContract) {
  }

  /**
   * save space layout of bentobox
   * @method saveBentospace
   *
  */
  saveBentospace = async function (spaceContract) {
  }

  /**
   * lookup peer bentospace layout default
   * @method getBentospace
   *
  */
  getBentospace = async function (key) {
  }

  /**
   * delete nxp ref contract from peer library
   * @method deleteBentospace
   *
  */
  deleteBentospace = async function (space) {
  }

  /**
   * save space layout of bentobox
   * @method saveSolospace
   *
  */
  saveSolospace = async function (spaceContract) {
  }

  /**
   * lookup peer solospace layout default
   * @method getSolospace
   *
  */
  getSolospace = async function () {
  }

  /**
   * lookup specific result UUID
   * @method getPublicLibrary
   *
  */
  getPublicLibrary = async function (contractID) {
  }

  /**
   * lookup range query of db
   * @method getPublicLibraryRange
   *
  */
  getPublicLibraryRange = async function (range) {
  }

  /**
   * return the last entry into db
   * @method getPublicLibraryLast
   *
  */
  getPublicLibraryLast = async function (dataPrint) {
  }

  /**
   * lookup al peer library entries
   * @method getPeerLibrary
   *
  */
  getPeerLibrary = async function (contractID) {
  }

  /**
   * lookup al peer library range
   * @method getPeerLibraryRanage
   *
  */
  getPeerLibraryRange = async function () {
  }

  /**
   * lookup al peer library Last entry
   * @method getPeerLibraryLast
   *
  */
  getPeerLibraryLast = async function () {
  }

  /**
   * get all kbl entries
   * @method KBLentries
   *
  */
  KBLentries = async function (dataPrint) {
  }

  /**
   * lookup specific result UUID
   * @method peerResultsItem
   *
  */
  peerResultsItem = async function (dataPrint) {
  }

  /**
   * lookup specific result UUID
   * @method peerResults
   *
  */
  peerResults = async function () {
  }


  /**
   * get stream data for keystore db
   * @method getStreamHyperbeeDB
   *
  */
  getStreamHyperbeeDB = async function () {

  }

  /**
   * delete nxp ref contract from peer library
   * @method deleteRefcontPeerlibrary
   *
  */
  deleteRefcontPeerlibrary = async function (nxpID) {
  }


  /**
   * repicate the publiclibrary peer to peer
   * @method replicatePubliclibrary
   *
  */
  replicatePubliclibrary = async function (keylib) {
  }

  /**
   * update public library from peers public library
   * @method updatePublicLibrary
   *
  */
  updatePublicLibrary = async function (updateLib) {
  }

  /**
   * repicate the publiclibrary peer to peer
   * @method replicatePubliclibraryOLD
   *
  */
  replicatePubliclibraryOLD = async function (key) {
  }

  /**
   * get the network library reference contracts - all for now replicate source
   * @method getReplicatePublicLibrary
   *
  */
  getReplicatePublicLibrary = async function (nxp) {

  }

  /**
   * replicate the demo data to the peers results
   * @method replicateHOPresults
   *
  */
  replicateHOPresults = async function () {
 
  }

  /**
   * take nxp id from temporary pubic network library and add to peers public library
   * @method publicLibraryAddentry
   *
  */
  publicLibraryAddentry = async function (nxp) {
  }

}

export default PeerData