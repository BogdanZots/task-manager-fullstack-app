module.exports = class UserDto { // ХЗ что тут происходит подсмотрел у других 
  email;
  id;
  isActivated;
  name;
  surname;
  role;
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.name = model.name;
    this.surname = model.surname;
    this.role = model.role;
  }
};
