import { ToMatrixPipe } from './toMatrix.pipe';

describe('MatrixPipe', () => {
  it('create an instance', () => {
    const pipe = new ToMatrixPipe();
    expect(pipe).toBeTruthy();
  });
});
