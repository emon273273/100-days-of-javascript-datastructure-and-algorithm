// Wrap your code in an async function
async function generateHash() {
    const { createHmac } = await import('node:crypto');
  
    const secret = 'abcdefg';
    const hash = createHmac('sha256', secret)
      .update('I love cupcakes')
      .digest('hex');
    
    console.log("generated hash is:"+hash);
  }
  
  // Call the async function
  generateHash();
  