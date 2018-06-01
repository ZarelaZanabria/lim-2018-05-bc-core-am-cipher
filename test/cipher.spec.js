
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
    });

    it('Validar espacios y no reconozca caracteres',()=>{
      assert.equal(cipher.encode(33,'a Ajjjk?bb kss'),'h Hqqqrii rzz');
    });

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
    it('33',()=>{
      assert.equal(cipher.decode(33,'a B i?'),'t U b');
    });

  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('Deberia retornar "A a b" para "H h i" ', () => {
      assert.equal(cipher.createCipherWithOffset(33).encode('A B C JKS kd d'), 'H I J QRZ rk k' );
      assert.equal(cipher.createCipherWithOffset(33).decode('H I J QRZ rk k'), 'A B C JKS kd d' );
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{
            
      assert.isObject( cipher.createCipherWithOffset(33) , 'Si es un objeto');
      //Validamos la propiedad ahora primero seleccionamos el objeto, propiedad
      assert.property(cipher.createCipherWithOffset(33),'encode');

      assert.property(cipher.createCipherWithOffset(33),'decode');
      //Validar la funcion con la propiedad
      assert.isFunction(cipher.createCipherWithOffset(33).encode);
      assert.isFunction(cipher.createCipherWithOffset(33).decode);
      
    });
    
    
  });

});
