//selectors
const firstline = document.querySelector(".question");
const secondline = document.querySelector(".answer");
const themeToggleBtn = document.querySelector(".theme");

const clear = document.querySelector(".clear");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const backspace = document.querySelector(".backspace");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const minus = document.querySelector(".minus");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const plus = document.querySelector(".plus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const equal = document.querySelector(".equal");
const zero = document.querySelector(".zero");
const point = document.querySelector(".point");
let calc = 0;

//state
const theme = localStorage.getItem("theme");

//on mount
theme && document.body.classList.add(theme);
theme ? themeToggleBtn.innerHTML = "🌑" : themeToggleBtn.innerHTML = "☀️";

//handlers
function handleThemeToggle() {
    themeToggleBtn.innerHTML === "🌑" ? themeToggleBtn.innerHTML = "☀️" : themeToggleBtn.innerHTML = "🌑";
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme","light-mode");
    } else {
        localStorage.removeItem("theme");
    };
};

function handlePointChecking() {
    let numberss = secondline.innerHTML.split(/\+-×÷/i);
    console.log(numberss.slice(-1)[0].includes("."));
    return numberss.slice(-1)[0].includes(".");
};

function handleNumbers(num) {
    let lastChar = secondline.innerHTML.slice(-1);
    let lastNo = secondline.innerHTML.split(/\+-×÷/i).slice(-1)[0];
    if (lastChar === "0" && lastNo.length === 1) {
        secondline.innerHTML = secondline.innerHTML.slice(0,-1);
        secondline.innerHTML += num; 
    } else {
        secondline.innerHTML += num; 
    };
};

//events
themeToggleBtn.addEventListener('click', handleThemeToggle);



clear.addEventListener('click', function() {
    firstline.innerHTML = "";
    secondline.innerHTML = "0";
    calc = 0;
});

// 0.2+0.3 not 0.2+03
point.addEventListener('click', function() {
    let lastChar = secondline.innerHTML.slice(-1);
    console.log(lastChar);
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
        secondline.innerHTML += "0.";
    } else if (!handlePointChecking()) {
        secondline.innerHTML += ".";
    };
});

backspace.addEventListener('click', function() {
    if (secondline.innerHTML.length !== 1) {
        secondline.innerHTML = secondline.innerHTML.slice(0,-1);
    } else {
        secondline.innerHTML = "0";
    };
});

equal.addEventListener('click', function() {
    let lastChar = secondline.innerHTML.slice(-1);
    if (!(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")) {
        firstline.innerHTML = secondline.innerHTML + "=";
        calc = eval(secondline.innerHTML.replace("×","*").replace("÷","/"));
        secondline.innerHTML = calc;
    };
});

plus.addEventListener('click', function() {
    let lastChar = secondline.innerHTML.slice(-1);
    if (secondline.innerHTML === "0") {
        secondline.innerHTML += "+";
    } else if (lastChar === ".") {
        secondline.innerHTML += "0+";
    } else if (!(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")) {
        secondline.innerHTML += "+";
    };
});

minus.addEventListener('click', function() {
    let lastChar = secondline.innerHTML.slice(-1);
    if (secondline.innerHTML === "0") {
        secondline.innerHTML += "-";
    } else if (lastChar === ".") {
        secondline.innerHTML += "0-";
    } else if (!(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")) {
        secondline.innerHTML += "-";
    };
});

multiply.addEventListener('click', function() {
    let lastChar = secondline.innerHTML.slice(-1);
    if (secondline.innerHTML === "0") {
        secondline.innerHTML += "×";
    } else if (lastChar === ".") {
        secondline.innerHTML += "0×";
    } else if (!(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")) {
        secondline.innerHTML += "×";
    };
});

divide.addEventListener('click', function() {
    let lastChar = secondline.innerHTML.slice(-1);
    if (secondline.innerHTML === "0") {
        secondline.innerHTML += "÷";
    } else if (lastChar === ".") {
        secondline.innerHTML += "0÷";
    } else if (!(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")) {
        secondline.innerHTML += "÷";
    };
});

// 5+000 <-- Error
zero.addEventListener('click', function() {
    let lastNo = secondline.innerHTML.split(/\+-×÷/i).slice(-1)[0];
    if (lastNo !== "0") {
        secondline.innerHTML += "0";    
    }
});

one.addEventListener('click', function() {
    handleNumbers("1");
});

one.addEventListener('click', function() {
    handleNumbers("1");
});

two.addEventListener('click', function() {
    handleNumbers("2");
});

three.addEventListener('click', function() {
    handleNumbers("3");
});

four.addEventListener('click', function() {
    handleNumbers("4");
});

five.addEventListener('click', function() {
    handleNumbers("5");
});

six.addEventListener('click', function() {
    handleNumbers("6");
});

seven.addEventListener('click', function() {
    handleNumbers("7");
});

eight.addEventListener('click', function() {
    handleNumbers("8");
});

nine.addEventListener('click', function() {
    handleNumbers("9");
});

