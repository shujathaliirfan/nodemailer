var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
 var name = req.body.name
 var email = req.body.email
  var message = req.body.message
  // var content = `name: ${name} \n email: ${email} \n message: ${message} `
  var content= `<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_5275377665128817231bodyTable" style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:#e9eaec">
  <tbody><tr>
      <td align="center" valign="top" id="m_5275377665128817231bodyCell" style="height:100%;margin:0;padding:50px 50px;width:100%">
          
          
          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_5275377665128817231templateContainer" style="border-collapse:collapse;border:0;max-width:600px!important">
                                      <tbody><tr>
                  <td valign="top" id="m_5275377665128817231templateBody" style="background-color:#ffffff;border-top:0;border:1px solid #c1c1c1;padding-top:0;padding-bottom:0px">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_5275377665128817231mcnTextBlock" style="min-width:100%;border-collapse:collapse">
                          <tbody class="m_5275377665128817231mcnTextBlockOuter">
                              <tr>
                                  <td valign="top" class="m_5275377665128817231mcnTextBlockInner">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse" class="m_5275377665128817231mcnTextContentContainer">
                                          <tbody>
                                              <tr>
                                                  <td valign="top" style="padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px" class="m_5275377665128817231mcnTextContent">
<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="display:block;min-width:100%;border-collapse:collapse;width:100%">
<tbody>
<tr>
<td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Name</strong></td>
</tr>
<tr>
<td style="color:#555555;padding-top:3px;padding-bottom:20px">${name}</td>
</tr>
</tbody>
</table>
<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
<tbody>
<tr>
<td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Email</strong></td>
</tr>
<tr>
<td style="color:#555555;padding-top:3px;padding-bottom:20px">${email}</td>
</tr>
</tbody>
</table><span class="im">


<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
<tbody>
<tr>
<td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Comment or Message</strong></td>
</tr>
<tr>
<td style="color:#555555;padding-top:3px;padding-bottom:20px">${message}</td>
</tr>
</tbody>
</table>

                                                  </span></td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
              <tr>
                  <td valign="top" id="m_5275377665128817231templateFooter" style="background-color:#e9eaec;border-top:0;border-bottom:0;padding-top:12px;padding-bottom:12px">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_5275377665128817231mcnTextBlock" style="min-width:100%;border-collapse:collapse">
                          <tbody class="m_5275377665128817231mcnTextBlockOuter">
                              <tr>
                                  <td valign="top" class="m_5275377665128817231mcnTextBlockInner">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse" class="m_5275377665128817231mcnTextContentContainer">
                                          <tbody>
                                              <tr>
                                                  <td valign="top" class="m_5275377665128817231mcnTextContent" style="padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#aaa;font-family:Helvetica;font-size:12px;line-height:150%;text-align:center">

                                                      
                                                      Sent from <a href="http://xmedia.co.in/baskaran" style="color:#bbbbbb" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://xmedia.co.in/baskaran&amp;source=gmail&amp;ust=1561121033350000&amp;usg=AFQjCNFKmVMJSYbSji4qM4Y3LSloHsoUeA">Baskaran Foundation Trust</a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody></table>
          
          
          </td>
      </tr>
  </tbody></table>`
  

  var mail = {
    from: name,
    to: 'shujathali92@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'Contact Form',
    // text: content
    html: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
