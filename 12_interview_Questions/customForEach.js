// fresher interview question

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// SDE 2 , SDE 3 interview question

Array.protortype.forEachTwo = function (callback, thiscontext) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const len = this.length;
  let i = 0;
  while (i < len) {
    if (this.hasOWnProperty(i)) {
      callback.call(thiscontext, this[i], i, this);
    }
    i++;
  }
};
