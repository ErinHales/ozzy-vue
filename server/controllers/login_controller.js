module.exports = {
  signUp: (req, res, bcrypt) => {
    let { name, email, password } = req.body;
    req.session.user = { name, email };
    bcrypt.hash(password, null, null, (err, hash) => {
      req.app.get("db").create_new_user([name, email, hash]).then(response => {
        res.status(201).send(response);
      }).catch(err => {
        res.status(401);
        console.log(err);
      })
    })
  },
  login: (req, res, bcrypt) => {
    let { email, password } = req.params;
    req.app.get("db").find_user(email).then(response => {
      if (!response[0]) {
        res.status(200).send('Username does not exist');
      } else {
        let { name, email, hash: bcrypt_password, picture } = response[0]
        req.session.user = { name, email, picture };
        bcrypt.compare(password, bcrypt_password, (error, response) => {
          (response ? res.status(200).send(req.session.user) : res.send('Password did not match the email'))
        })
      }
    }).catch(err => {
      res.status(401);
      console.log(err);
    })
  },
  logout: (req, res) => {
    res.sendStatus(200);
    req.session.destroy();
  }
}