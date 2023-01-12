const Entry = require('./../db');

module.exports = {
  getEntries: (email, cb) => {
    Entry.find({user_email: email }).sort({updated: -1}).exec(cb);
  },
  saveEntry: (entry, cb) => {
    const newEntry = new Entry({user_email: entry.email, updated: entry.updated, title: entry.title, text: entry.text});
    newEntry.save(cb)
  },
  deleteEntry: (id, cb) => {
    Entry.findByIdAndDelete(id, {}, cb);
  },
  updateEntry: (entry, cb) => {
    let id = entry.id;
    Entry.findByIdAndUpdate(id, {title: entry.title, text:entry.text, updated:entry.updated}, {}, cb);

  }

}