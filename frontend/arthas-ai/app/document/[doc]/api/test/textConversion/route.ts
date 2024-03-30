export async function GET() {
    const response = await fetch('api/test/textConversion/textConversion', {
      method: 'GET'
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch text conversion');
    }
  
    const data = await response.json();
    return data.html;
  }
