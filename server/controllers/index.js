const {getEntries, saveEntry, deleteEntry, updateEntry} = require('./../models');

module.exports = {
  getUserEntries: (req, res) => {
    let email = req.params.email;
    getEntries(email, (err, data) => {
      if (err) {
        res.sendStatus(400);
      } else{
        console.log(data);
        res.status(200).send(data);
      }
    } )
  },

  addUserEntry: (req, res) => {
    let {email, text, title} = req.body;
    let date = Date.now();
    saveEntry({email:email, text:text, title:title, updated: date}, (err) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    });
  },

  updateUserEntry: (req, res) => {
    const {id, email, title, text} = req.body
    let date = Date.now();
    updateEntry({id:id, title:title, text:text, updated:date}, (err) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    });


  },
  deleteUserEntry: (req, res) => {
    var id = req.query.id;
    deleteEntry(id, (err) => {
      if (err) {
        res.sendStatus(401);
      }else {
        res.sendStatus(201);
      }
    })

  }

}