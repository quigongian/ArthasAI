export async function textConversion() {
    const response = await fetch('api/textConversion', {
      method: 'GET'
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch text conversion');
    }
  
    const data = await response.json();
    return data.html;
  }