class Matrix {

  // Class private properties
  private rows: number;
  private columns: number;
  private elements: number[][];

  constructor(rows: number, columns: number) {

    this.rows = rows;
    this.columns = columns;
    this.elements = new Array(rows);

    // Create 2d array
    for (let i = 0; i < rows; i++) {
      this.elements[i] = new Array(columns);
    }
  }

  // Getter for rows
  public getNRows(): number {
    return this.rows;
  }

  // Getter for columns
  public getNColumns(): number {
    return this.columns;
  }

  // Setter for elements and separate a correct value r if es out of range
  public setElement(row: number, column: number, value: number): void {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      console.log("Index out of bounds");
      return;
    }
    this.elements[row][column] = value;
  }

  // Function to sum the elements of the matrix
  public add(matrix: Matrix): Matrix | null {

    // Only when matrix can't be added
    if (this.rows !== matrix.getNRows() || this.columns !== matrix.getNColumns()) {
      console.log("NOOP");
      return null;
    }

    const result = new Matrix(this.rows, this.columns);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        result.setElement(i, j, this.elements[i][j] + matrix.elements[i][j]);
      }
    }
    return result;
  }

  // Function to multiply elements on the matrix
  public multiply(matrix: Matrix): Matrix | null {

    // Only when matrix can't be added
    if (this.columns !== matrix.getNRows()) {
      console.log("NOOP");
      return null;
    }

    const result = new Matrix(this.rows, matrix.getNColumns());

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < matrix.getNColumns(); j++) {
        let sum = 0;
        for (let k = 0; k < this.columns; k++) {
          sum += this.elements[i][k] * matrix.elements[k][j];
        }
        result.setElement(i, j, sum);
      }
    }
    return result;
  }
}

// Instance of the Matrix Class
const matrixA = new Matrix(2, 3);
matrixA.setElement(0, 0, 1);
matrixA.setElement(0, 1, 2);
matrixA.setElement(0, 2, 3);
matrixA.setElement(1, 0, 4);
matrixA.setElement(1, 1, 5);
matrixA.setElement(1, 2, 6);

const matrixB = new Matrix(3, 2);
matrixB.setElement(0, 0, 7);
matrixB.setElement(0, 1, 8);
matrixB.setElement(1, 0, 9);
matrixB.setElement(1, 1, 10);
matrixB.setElement(2, 0, 11);
matrixB.setElement(2, 1, 12);

// Instance of add method
const result1 = matrixA.add(matrixA);
console.log('Result of the Matrix A and B sum:');
console.log(result1);

// Instance of multiply method
const result2 = matrixA.multiply(matrixB);
console.log('Result of the Matrix A and B multiplication:');
console.log(result2);

