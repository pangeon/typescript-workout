const sayHello = async (): Promise<void> => {
    await new Promise((resolve) =>
      setTimeout(() => resolve(console.log('Hello')))
    );
  };
  
  sayHello();
  console.log('World!');