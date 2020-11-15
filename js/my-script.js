//1 задание
function age() {
 

    var year = Number(document.getElementById('ageNumber').value);

    console.log(year);
if (Number.isInteger (year)) 
{
    
    if ( year < 0) {
        document.getElementById("yearAnswer").innerHTML = "Неверное значение";
    } 
    if (0 <= year && year <= 2) {
        document.getElementById("yearAnswer").innerHTML = "Ребонок";
    }
    if (12 <= year && year <= 18) {
        document.getElementById("yearAnswer").innerHTML = "Подросток";
    }
    if (18 <= year && year <= 60) {
        document.getElementById("yearAnswer").innerHTML = "Взрослый";
    }
    if (year >= 60) {
        document.getElementById("yearAnswer").innerHTML = "Персионер";
    }
    if (year > 100) {
        document.getElementById("yearAnswer").innerHTML = "УУУ ты мумия!";
    }
} else {
    document.getElementById("yearAnswer").innerHTML = "Введице значение";
 
}

    }

    //2 задание
    function spec() {

        var symbol = Number(document.getElementById('specNumber').value);
        console.log(symbol);

        if (Number.isInteger (symbol)) 
        {
            if (0 <= symbol && symbol <= 9){
                switch (symbol) {
                    case 0:
                        document.getElementById("specAnswer").innerHTML = "Значение -)";
                        break;
                    case 1:
                        document.getElementById("specAnswer").innerHTML = "Значение - !";
                        break;
                    case 2:
                        document.getElementById("specAnswer").innerHTML = "Значение - @";
                        break;
                    case 3:
                        document.getElementById("specAnswer").innerHTML = "Значение - #";
                        break;
                    case 4:
                        document.getElementById("specAnswer").innerHTML = "Значение - $";
                        break;
                    case 5:
                        document.getElementById("specAnswer").innerHTML = "Значение - %";
                        break;
                    case 6:
                        document.getElementById("specAnswer").innerHTML = "Значение - ^";
                        break;
                    case 7:
                        document.getElementById("specAnswer").innerHTML = "Значение - &";
                        break;
                    case 8:
                        document.getElementById("specAnswer").innerHTML = "Значение - *";
                        break;
                    case 9:
                        document.getElementById("specAnswer").innerHTML = "Значение - (";
                        break;
                }
            }
            else {
                document.getElementById("specAnswer").innerHTML = "Значение от 0 до 9";  
           }
        }
        
        else {
             document.getElementById("specAnswer").innerHTML = "Введице значение от 0 до 9";  
        }
    }
    //2 задание
    function three() {
        var threeIgit = Number(document.getElementById('three-igitNumber').value);
        
        var number1 = parseInt(threeIgit /100);
        var number2 = parseInt(threeIgit /10)%10;
        var number3 = (threeIgit %10);
        if (Number.isInteger (threeIgit)) 
        {
            if (100 <= threeIgit && threeIgit <= 999){
               
            if(number1==number2 || number2==number3 || number1==number3){
                document.getElementById("threeAnswer").innerHTML = "Есть совпадения";
            }
        
            else {
                document.getElementById("threeAnswer").innerHTML = "Нет совпадений";  
        }

            }
            else {
                document.getElementById("threeAnswer").innerHTML = "Введите от 100 до 999 ";  
        }
        }
        else {
                document.getElementById("threeAnswer").innerHTML = "Введите трехзначное число ";  
        }

    }
        //3 задание
        function YearOf() {
            var year = Number(document.getElementById('YearOfBirth').value);
            console.log(year);
            if (Number.isInteger (year)) 
            {
                if ( year < 0) {
                    document.getElementById("Birth").innerHTML = "Неверное значение";
                } 
                if(year%4==0 && year%100 !=0 || year%400==0){
                    document.getElementById("Birth").innerHTML = "Год высокосный";
                }
                else {
                    document.getElementById("Birth").innerHTML = "Год не высокосный";  
            }
            }




            else {
                document.getElementById("Birth").innerHTML = "Введите год рождения ";  
        }
        }