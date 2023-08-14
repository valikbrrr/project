const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;
    str = "";

    data.shops.forEach( shop => {
    square += shop.width * shop.length;
    });

    volume += square * data.height;

    data.budget - (volume * data.moneyPer1m3) >= 0 ? str = "Бюджета достаточно" : str = "Бюджета недостаточно";
    console.log(str);
    return str;
}

isBudgetEnough(shoppingMallData);



