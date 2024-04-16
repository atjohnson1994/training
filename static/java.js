function check_answer0(input) {
  console.log(input)
  if (input0 == 0 && input1 == 5 && input2 == 4 && ps0 == 'p1000') {
    console.log('Correct')
    document.getElementById('q0_a').innerHTML = 'Correct'
    document.getElementById('q0_a').style.color = 'white'
    document.getElementById('q0_box').style.backgroundColor = 'green'
  } else {
    console.log('Incorrect')
    document.getElementById('q0_a').innerHTML = 'Incorrect'
    document.getElementById('q0_a').style.color = 'white'
    document.getElementById('q0_box').style.backgroundColor = 'red'
  }
}
function q0_ps(dial_input) {
  console.log(dial_input)
  ps0 = dial_input
}
function dial0(dial_input) {
  console.log(dial_input)
  input0 = dial_input
}
function dial1(dial_input) {
  console.log(dial_input)
  input1 = dial_input
}
function dial2(dial_input) {
  console.log(dial_input)
  input2 = dial_input
}


function check_answer1(input) {
  console.log(input)
  if (input3 == 1 && input4 == 5 && input5 == 4 && ps1 == 'p200') {
    console.log('Correct')
    document.getElementById('q1_a').innerHTML = 'Correct'
    document.getElementById('q1_a').style.color = 'white'
    document.getElementById('q1_box').style.backgroundColor = 'green'
  } else {
    console.log('Incorrect')
    document.getElementById('q1_a').innerHTML = 'Incorrect'
    document.getElementById('q1_a').style.color = 'white'
    document.getElementById('q1_box').style.backgroundColor = 'red'
  }
}
function q1_ps(dial_input) {
  console.log(dial_input)
  ps1 = dial_input
}
function dial3(dial_input) {
  console.log(dial_input)
  input3 = dial_input
}
function dial4(dial_input) {
  console.log(dial_input)
  input4 = dial_input
}
function dial5(dial_input) {
  console.log(dial_input)
  input5 = dial_input
}


function check_answer2(input) {
  console.log(input)
  if (input6 == 1 && input7 == 8 && input8 == 0 && ps2 == 'p20') {
    console.log('Correct')
    document.getElementById('q2_a').innerHTML = 'Correct'
    document.getElementById('q2_a').style.color = 'white'
    document.getElementById('q2_box').style.backgroundColor = 'green'
  } else {
    console.log('Incorrect')
    document.getElementById('q2_a').innerHTML = 'Incorrect'
    document.getElementById('q2_a').style.color = 'white'
    document.getElementById('q2_box').style.backgroundColor = 'red'
  }
}
function q2_ps(dial_input) {
  console.log(dial_input)
  ps2 = dial_input
}
function dial6(dial_input) {
  console.log(dial_input)
  input6 = dial_input
}
function dial7(dial_input) {
  console.log(dial_input)
  input7 = dial_input
}
function dial8(dial_input) {
  console.log(dial_input)
  input8 = dial_input
}

function check_que1(input) {
  console.log(input)
  if (que1_input == 2) {
    console.log('Correct')
    document.getElementById('que1_a').innerHTML = 'Correct'
    document.getElementById('que1_a').style.color = 'white'
    document.getElementById('que1_box').style.backgroundColor = 'green'
  } else {
    console.log('Incorrect')
    document.getElementById('que1_a').innerHTML = 'Incorrect'
    document.getElementById('que1_a').style.color = 'white'
    document.getElementById('que1_box').style.backgroundColor = 'red'
  }

}
function que_sel1(input) {
  console.log(input)
  que1_input = input
}

function check_que2(input) {
  console.log(input)
  if (que2_input == 1) {
    console.log('Correct')
    document.getElementById('que2_a').innerHTML = 'Correct'
    document.getElementById('que2_a').style.color = 'white'
    document.getElementById('que2_box').style.backgroundColor = 'green'
  } else {
    console.log('Incorrect')
    document.getElementById('que2_a').innerHTML = 'Incorrect'
    document.getElementById('que2_a').style.color = 'white'
    document.getElementById('que2_box').style.backgroundColor = 'red'
  }

}
function que_sel2(input) {
  console.log(input)
  que2_input = input
}
