// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: username,
      email: useremail,
    }),
  };

  function submitData(username, useremail) {
        return fetch('http://localhost:3000/users', configurationObject)
        .then(function(response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
            document.append(object);
        })
        .catch(function (error) {
            console.log(error.message);
            document.append(error.message)
          });
    }