import { Client } from '@microsoft/microsoft-graph-client'
import { toast } from 'react-toastify'

const emailTemplateFollowUp2 = require('./emailTemplateFollowUp2')

const FollowUpEmail1 = async threadId => {
  try {
    const token = localStorage.getItem('accessToken')

    if (token) {
      const client = Client.init({
        authProvider: async done => {
          done(null, token)
        }
      })

      const emailData = {
        comment: `Reply : ${emailTemplateFollowUp2}`

        //comment: 'Sending a message as reply of a same mail'
      }

      await client.api(`/me/messages/${threadId}/replyAll`).post(emailData)
    }
  } catch (error) {
    console.log('Error', error)
  }
}

export default FollowUpEmail1
