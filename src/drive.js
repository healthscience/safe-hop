'use strict'
/**
*  Manage SafeDrive  file datastore
*
* @class SafeDrive
* @package    SafeDrive
* @copyright  Copyright (c) 2024 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
import EventEmitter from 'events'
import fs from 'fs'
import b4a from 'b4a'
import Fileparser from './fileParser.js'
import csv from 'csv-parser'

class SaveDrive extends EventEmitter {

  constructor(core, swarm) {
    super()
    this.hello = 'savedrive'
    this.drive = {}
    this.fileUtility = new Fileparser('')
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
   * setup safedrive protocol
   * @method safeDrive
   *
  */
  safeDrive = async function () {
    // A local drive provides a safe interface to a local directory)
  }


  /**
   * safe stream write
   * @method safeWritestream 
   *
   */
  safeWritestream = async function (fileData) {
  }

  /**
   * produce list of files in folder
   * @method listFilesFolder 
   *
  */
  listFilesFolder = function (folder) {
  }

  /**
   * navigate folders and files
   * @method safeCSVmanager
   *
   */
  safeCSVmanager = async function (fileData) {
  }

  /**
   * save to safe file
   * @method safeJSONsaveBlind 
   *
  */
  safeJSONsaveBlind = async function (name, data) {
  }

  /**
   * save csv data to safe file
   * @method saveCSVfilecontent 
   *
  */
  saveCSVfilecontent = async function (fData) {
    // extract header info first
    let headerInfo = this.fileUtility.webCSVparse(fData)
    let safePath = 'csv/' + fData.data[0].name
    let confirmSave = await this.drive.put(safePath, fData.data[0].content)
    let saveStatus = {}
    saveStatus.save = confirmSave
    saveStatus.headerinfo = headerInfo
    return saveStatus
  }


  /**
   * save to safe file
   * @method safeFilesave 
   *
   */
  safeFilesave = async function (path, name, data) {
    // File writes
    let safePath = path + '/' + name
    var dataUrl = data
    // var buffer = Buffer.from(dataUrl, 'base64')
    fs.writeFileSync('data.csv', dataUrl)
    if (path === 'text/csv') {
      await this.drive.put(safePath, fs.readFileSync('data.csv', 'utf-8'))
      // now remove the temp file for converstion
      fs.unlink('data.csv', (err => {
        if (err) console.log(err);
        else {
          console.log('file deleted csv')
        }
      }))
    } else if (path === 'json') {
      await this.drive.put(safePath, data)
    } else if (path === 'sqlite') {
      var dataUrl = data.split(",")[1]
      var buffer = Buffer.from(dataUrl, 'base64')
      fs.writeFileSync('tempsql.db', buffer)
      await this.drive.put(safePath, fs.readFileSync('tempsql.db'))
      fs.unlink('tempsql.db', (err => {
        if (err) console.log(err);
        else {
          console.log('file deleted temp sqlite')
        }
      }))
    }


    return safePath
  }

  /**
   * read file nav to folder
   * @method safeReadfile 
   *
   */
  safeReadfile = async function (path) {
    // File reads
    const entry = await this.drive.get(path)
    entry.on('data',  function(chunk) {
    })
    return true
  }

  /**
   * rebuidl file and give directory location
   * @method safeLocalfile
   *
   */
  safeLocalfile = async function (path) {
    // File reads to buffer and recreate file
    // const bufFromGet2 = await this.drive.get(path)
    const { value: entry } = await this.drive.entry(path)
    const blobs = await this.drive.getBlobs()
    const bufFromEntry = await blobs.get(entry.blob)

    let localFile = 'localdb'
    // fs.writeFileSync(localFile, bufFromGet2)
    fs.writeFileSync(localFile, bufFromEntry)
    return localFile
  }

  /**
  *  taken in csv file and read per line
  * @method readCSVfile
  *
  */
  readCSVfile = async function (fpath, headerSet) {
    // const rs2 = this.drive.createReadStream(fpath) // 'text/csv/testshed11530500.csv') // '/blob.txt')
    // rs2.pipe(process.stdout) // prints file content
    const rs = this.drive.createReadStream(fpath) // 'text/csv/testshed11530500.csv') // '/blob.txt')
    return new Promise((resolve, reject) => {
      const results = []
      //this.drive.createReadStream(fpath)
        rs.pipe(csv({ headers: headerSet.headerset, separator: headerSet.delimiter, skipLines: headerSet.dataline }))
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results)
        })
    })
  }

  /**
   * replicate a safe
   * @method safeReplicate 
   *
  */
  safeReplicate = async function (type) {
  }

}

export default SafeDrive