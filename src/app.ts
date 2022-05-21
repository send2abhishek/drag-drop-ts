class ProjectInput {
  elementTemplate: HTMLTemplateElement;
  hostTemplate: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.elementTemplate = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;

    this.hostTemplate = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.elementTemplate.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private attach() {
    this.hostTemplate.insertAdjacentElement("afterbegin", this.element);
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log("submit is called ", this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }
}

const projectInput = new ProjectInput();
