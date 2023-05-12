export class El {
    constructor(private name: string) {}
    render = async () => {
      return new Promise((resolve) =>
        setTimeout(
          async () => resolve(`${this.name} is resolved`),
          Math.random() * 1000
        )
      );
    };
  }
  
  const e1 = new El('header');
  const e2 = new El('body');
  const e3 = new El('footer');
  
  const renderAll = async () => {
    await e1.render().then(msg1 => console.log(msg1));
    await e2.render().then(msg2 => console.log(msg2));
    console.log(await e3.render());
  };
  
  renderAll();