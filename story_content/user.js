function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oOA7o9Hk2O":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v31q1attempts:player.GetVar("v31q1attempts"),v31q1answeredcorrect:player.GetVar("v31q1answeredcorrect"),v31q2attempts:player.GetVar("v31q2attempts"),v31q2answeredcorrect:player.GetVar("v31q2answeredcorrect"),v31q3attempts:player.GetVar("v31q3attempts"),v31q3answeredcorrect:player.GetVar("v31q3answeredcorrect")})
	}
	)
}

