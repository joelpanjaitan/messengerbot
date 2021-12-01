class Controllers {
  static async home(req, res, next) {
    try {
      res.status(200).json({ msg: "Server is running" });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = Controllers;
