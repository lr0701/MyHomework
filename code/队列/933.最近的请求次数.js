const RANGE = 3000;

var RecentCounter = function() {
    this.queue = new Queue();
};

RecentCounter.prototype.ping = function(t) {
    while (this.queue.size() > 0 && this.queue.front() < t - RANGE) {
        this.queue.dequeue();
    }
    this.queue.enqueue(t);
    return this.queue.size();
};