
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',()=>{
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabdefg" para "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz" con offest 33',()=>{
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz'),'HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabdefg');
    })
    it('debería retornar "H I J KLM NOP QRSTU VWXYZABCDEFGhij klmnop qrstuvwxyza bdefg" para "A B C DEF GHI JKLMN OPQRSTUVWXYZabc defghi jklmnopqrst uwxyz" con offest 33',()=>{
      assert.equal(cipher.encode(33,'A B C DEF GHI JKLMN OPQRSTUVWXYZabc defghi jklmnopqrst uwxyz'),'H I J KLM NOP QRSTU VWXYZABCDEFGhij klmnop qrstuvwxyza bdefg');
    })
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',()=>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz" para "HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabdefg" con offest 33',()=>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabdefg'),'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz');
    });
    it('debería retornar "A B C DEF GHI JKLMN OPQRSTUVWXYZabc defghi jklmnopqrst uwxyz" para "H I J KLM NOP QRSTU VWXYZABCDEFGhij klmnop qrstuvwxyza bdefg" con offest 33',()=>{
      assert.equal(cipher.decode(33,'H I J KLM NOP QRSTU VWXYZABCDEFGhij klmnop qrstuvwxyza bdefg'),'A B C DEF GHI JKLMN OPQRSTUVWXYZabc defghi jklmnopqrst uwxyz');
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{
            
      assert.isObject( cipher.createCipherWithOffset(3) , 'Si es un objeto');
      assert.property(cipher.createCipherWithOffset(33), cipher.createCipherWithOffset().encode(),'Tiene la proiedad encode' );
      assert.equal(typeof cipher.createCipherWithOffset(33).encode('A'),'function');
      assert.equal(typeof cipher.createCipherWithOffset(33).decode('H'),'function');

    });
    
    
  });

});
