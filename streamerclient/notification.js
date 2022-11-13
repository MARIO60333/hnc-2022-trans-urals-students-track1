class Notification {
  constructor(type, msg, debug) {
    this.type = type;
    this.message = msg;
    this.debug = debug;
    this.#createNotification();
  }
  #createNotification() {
    let modal = document.createElement("div");

    if (this.debug) {

      let content = `
      <h2>Донат</h2>
      <h3>${this.debug.amount}</h3>
      <br>
      <p>${this.debug.message}</p>
      `

      modal.id = "notification";

      modal.className = `notification ${this.type}`;
      modal.innerHTML = content;

      document.body.appendChild(modal);
    } else {
      let content = `
        <h2>${this.type}</h2>

        <p>${this.message}</p>
      `;

      modal.id = "notification";

      modal.className = `notification ${this.type}`;
      modal.innerHTML = content;

      document.body.appendChild(modal);
    }
    setTimeout(function () {
      document.getElementById("notification").remove();
    }, 6000);
  }
}
