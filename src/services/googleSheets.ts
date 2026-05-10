export const sendSheetAction = async (action: string, payload: Record<string, any>) => {
  const urlStr = 'https://script.google.com/macros/s/AKfycbxsaAFP1Y6EAkV8Tle1DocgA8dhrkdNPZ-Aq16LmRmQBCBX_-y24H0CyRuUW3-8xqOLfw/exec';

  const formData = new FormData();
  formData.append('action', action);
  Object.keys(payload).forEach(key => {
    formData.append(key, String(payload[key]));
  });

  try {
    const response = await fetch(urlStr, {
      method: 'POST',
      body: formData,
    });
    
    return await response.json();
  } catch (error: any) {
    console.error('Error connecting to Google Sheets:', error);
    throw new Error('Gagal menyambung ke pelayan Google Sheets.');
  }
};
