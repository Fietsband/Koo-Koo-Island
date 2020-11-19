StatBar.prototype = {
    update: function(amount) {
        this.currentStatAmount = amount;
        this.currentAmount.innerHTML = amount;
        this.innerBar.style.width = this.calculatePercentage() + "%";
    },

    set: function(currentStatAmount, totalStatAmount) {
        this.currentStatAmount = currentStatAmount;
        this.totalStatAmount = totalStatAmount;
        this.currentAmount.innerHTML = currentStatAmount;
        this.total.innerHTML = totalStatAmount;
        this.update(currentStatAmount);
    },

    calculatePercentage: function() {
        return (this.currentStatAmount / this.totalStatAmount) * 100;
    }
};

function StatBar(barScope, currentAmount, total, innerBar) {
    this.barScope = dom.find(barScope);
    this.currentAmount = this.barScope.querySelector(currentAmount);
    this.total = this.barScope.querySelector(total);
    this.innerBar = this.barScope.querySelector(innerBar);
}