const display = document.getElementById('display');

function appendValue(value)
 {
  if (display.textContent === '0')
     {
    display.textContent = value;
  }
   else 
   {
    display.textContent += value;
  }
}

function clearDisplay() 
{
  display.textContent = '0';
}

function calculateResult() 
{

  try 
  {
    const result = eval(display.textContent);
    display.textContent = result;
  } 
  catch (error)
   {
    display.textContent = 'Error';
  }
}
