export enum Figure2D {
   Circle = 'circle',
   Square = 'square',
   Rectangle = 'rectangle',
   RightTriangle = 'rightTriangle',
}

export interface Shape {
   area?: number;
   type: Figure2D.Circle | Figure2D.Square | Figure2D.Rectangle | Figure2D.RightTriangle;
}

export interface Circle extends Shape {
   radius: number;
   type: Figure2D.Circle;
}

export interface Rectangle extends Shape {
   length: number;
   type: Figure2D.Rectangle;
   width: number;
}

export interface RightTriangle extends Shape {
   base: number;
   height: number;
   type: Figure2D.RightTriangle;
}

export interface Square extends Shape {
   type: Figure2D.Square;
   width: number;
}


