module.exports = {
  funzzyAndIgnoreCaseQuery: function (value) {
    return { $regex: value, $options: "i" };
  },
};
