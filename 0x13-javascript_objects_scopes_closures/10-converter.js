
rts.converter = function (base) {
  function myConverter (n) {
    return n.toString(base);
  }

  return myConverter;
};
