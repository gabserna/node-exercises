class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
    setHeight(height) {
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
}

class Square extends Rectangle{
    constructor(length) {
        super(length, length);
    }
}

const rect = new Rectangle(5, 7);
const square = new Square(5);
console.log(rect.getArea());
console.log(square.getArea());
