const daysInMonth = (month) => {
    return new Date(2000, month, 0).getDate();
};

var date = new Date(1901, 1, 1);
var endDate = new Date(2000, 12, 31);

var sundayCount = 0;

while(date < endDate){
    date.setDate(date.getDate() + 1);
    if(date.getDay() == 0 && date.getDate() == 1){
        sundayCount++;
    }
}


console.log(sundayCount);