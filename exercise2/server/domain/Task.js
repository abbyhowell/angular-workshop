'use strict';

var nextId = 1;

var Task = function(params) {
    this.id = nextId++;
    this.name = params.name;
    this.category = params.category;
    this.isCompleted = (typeof params.isCompleted === 'undefined') ? false : params.isCompleted;
};

module.exports = Task;