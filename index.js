function calculateBalance(transactions) {
    let balance = 0;
    let feePaid = 0;
    let cardPayments = 0;

    for (let i = 0; i < transactions.length; i++) {
        balance += transactions[i];
        if (transactions[i] < 0) {
            cardPayments++;
        }

        let lastThreeMonthsCardPayments = 0;
        for (let j = (i >= 2 ? i - 2 : 0); j <= i; j++) {
            if (transactions[j] < 0) {
                lastThreeMonthsCardPayments += transactions[j];
            }
        }

        if (cardPayments >= 3 && -lastThreeMonthsCardPayments >= 100) {
            feePaid = 1;
        } else {
            feePaid = 0;
            balance -= 5;
        }

        cardPayments = (cardPayments > 2) ? cardPayments - 3 : cardPayments;
    }

    return balance;
}