
const form = document.getElementById('eventForm')
const formMessage = document.querySelector('.form-message')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  //get values from inputs title field, details, location
  const title = document.getElementById('label-title').value
  const location = document.getElementById('location').value
  const details = document.getElementById('details').value

  if (!title || !location || !details) {
    formMessage.textContent = "Please fill out all required fields!"
    return
  }

  //get datetime value, convert to usable javacript object
  const dateTimeISOstring = document.getElementById('datetime').value

  if (!dateTimeISOstring) {
    formMessage.textContent = "Invalid date."
    return
  }

  const dateISO = new Date(dateTimeISOstring)
  //format date to readable string
  const options = {
    hour12: false,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }

  const date = dateISO.toLocaleString('en-US', options)

  const formData = {
    location: location,
    title: title,
    text: details,
    timeStamp: date
  }

  try {
    //send form data to API
    formMessage.textContent = ""
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    if (response.ok) {
      formMessage.innerHTML = `Your post has uploaded. View it <a href="./sightings.html">here</a>.`;
      form.reset()
    } else {
      formMessage.textContent = "Error"
      console.log("Error:", response.status)
    }
  } catch (err) {
    console.log("Error", err)
  }

})












// const form = document.getElementById("eventForm")
// const formMessageText = document.getElementsByClassName("form-message-text")[0]

// form.addEventListener("submit", async function (event) {
//   event.preventDefault()

//   const location = document.getElementById("location").value
//   const text = document.getElementById("details").value
//   const title = document.getElementById("title").value

//   if (!location || !text || !title) {
//     formMessageText.textContent = `Please complete all fields!`
//     return
//   }

//   const isoDateString = document.getElementById("datetime").value

//   if (!isoDateString) {
//     formMessageText.textContent = "Please select a date and time!"
//     return
//   }
//   // Convert the string to a JavaScript Date object
//   const date = new Date(isoDateString)
//   // Format the date to a readable string
//   const options = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//   }
//   const readableDate = date.toLocaleString("en-GB", options)

//   const formData = {
//     location: location,
//     timeStamp: readableDate,
//     text: text,
//     title: title,
//   }

//   try {
//     // Send form data using fetch API
//     formMessageText.textContent = ""
//     const response = await fetch("./api", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData),
//     })
//     if (response.ok) {
//       formMessageText.innerHTML = `Your sighting was uploaded. View it <a href="./sightings.html">here</a>.`;
//       form.reset()
//     } else {
//       formMessageText.textContent = `The server Ghosted you(!). Please try again.`
//       console.error("Server Error:", response.statusText)
//     }
//   } catch (error) {
//     formMessageText.textContent = `Serious ghouls! Please try again.`
//     console.error("Error:", error)
//   }
// })

