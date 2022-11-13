class Notification {
  constructor(type, msg) {
    this.type = type;
    this.message = msg;
    this.#createNotification();
  }
  #createNotification() {
    let modal = document.createElement("div");

    let content = `
        <h2>Донат</h2>

        <p>${this.message}</p>
    `;

    modal.id = "notification";

    modal.className = `notification ${this.type}`;
    modal.innerHTML = content;

    document.body.appendChild(modal);

    setTimeout(function () {
      document.getElementById("notification").remove();
    }, 6000);
  }
}
