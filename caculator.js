let display = document.getElementById("res");
let buttons = Array.from(document.getElementsByClassName("butns"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let clickedBtn = e.target.innerText;
    console.log("Content :- ", clickedBtn);

    switch (clickedBtn) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
        case "<=":
            let str=display.innerText.substring(0,display.innerText.length-1);
            // console.log(str);
            display.innerText=str;
            break;
        case "sqrt":
            try{
            display.innerText = eval(display.innerText);
            display.innerText=Math.sqrt(display.innerText);
            }
            catch{
                display.innerText = "Error"; 
            }
            break;
            case "square":
                try{
                display.innerText = eval(display.innerText);
                display.innerText=Math.pow(display.innerText,2);
                }
                catch{
                    display.innerText = "Error"; 
                }
                break;
                case "sin":
                    try{
                    // display.innerText = eval(display.innerText);
                    display.innerText=Math.sin(display.innerText);
                    }
                    catch{
                        display.innerText = "Error"; 
                    }
                    break;
                    case "cos":
                        try{
                        // display.innerText = eval(display.innerText);
                        display.innerText=Math.cos(display.innerText);
                        }
                        catch{
                            display.innerText = "Error"; 
                        }
                        break;

      default:
        display.innerText += clickedBtn;
    }
  });
});