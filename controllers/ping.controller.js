'use strict'

const ping = {
      ping: (request, response) => {
           response.status(200).json("SUCCESSFUL PING")
        }
}

module.exports = ping