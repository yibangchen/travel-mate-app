const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: true,
    maxLength: 160
  }
}, { timestamps: true } );

messageSchema.pre('remove', async function(next){
  try {
    let user = await User.findById(this.sender);
    user.messages.remove(this.id);
    await user.save();
    user = await User.findById(this.receiver);
    user.messages.remove(this.id);
    await user.save();
  } catch (err) {
    return next(err);
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;