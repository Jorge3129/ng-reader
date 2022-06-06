import { RemoveSpacePipe } from './removeSpace.pipe';

describe('SpacePipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveSpacePipe();
    expect(pipe).toBeTruthy();
  });
});
